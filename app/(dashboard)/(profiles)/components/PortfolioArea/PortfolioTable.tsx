'use client';

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, getKeyValue, Chip, Avatar } from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";

import { Coin } from "@/types";
import { columns } from "./data";
import { useProfiler } from "../../context";
import { formatValue, getPartOfFunction, truncateAddress } from "@/lib";
import numeral from "numeral";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import { getPrice } from "@/fetch-functions/coin";

export default function TransactionsTable() {
    const profiler = useProfiler();

    const [isLoading, setIsLoading] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(false);

    let list = useAsyncList<Coin>({
        async load({ signal, cursor }) {
            if (!profiler.coins) return { items: [] };

            setIsLoading(true);

            const start = cursor ? parseInt(cursor, 10) : 0;
            const itemsPerPage = 10;
            const end = start + itemsPerPage;

            const items = profiler.coins.slice(start, end);
            const hasMore = end < profiler.coins.length;

            setHasMore(hasMore);
            setIsLoading(false);

            return {
                items: items,
                cursor: end.toString()
            };
        },
        async sort({ items, sortDescriptor }) {
            return {
                items: items.sort((a, b) => {
                    const first = getKeyValue(a, sortDescriptor.column!.toString());
                    const second = getKeyValue(b, sortDescriptor.column!.toString());

                    let cmp = 0;
                    if (first > second) {
                        cmp = 1;
                    } else if (first < second) {
                        cmp = -1;
                    }

                    if (sortDescriptor.direction === "descending") {
                        cmp *= -1;
                    }

                    return cmp;
                }),
            };
        }
    });

    const [loaderRef, scrollerRef] = useInfiniteScroll({ hasMore, onLoadMore: list.loadMore });

    const renderCell = React.useCallback(async (item: Coin, columnKey: React.Key) => {
        const cellValue = getKeyValue(item, columnKey.toString());

        switch (columnKey) {
            case "asset_type":
                const assetType = cellValue;
                const parse = getPartOfFunction(assetType);

                return (
                    <Chip
                        variant="light"
                        size="lg"
                        classNames={{
                            content: "text-foreground"
                        }}
                        className="cursor-pointer"
                        onClick={() => {
                            try {
                                if (!assetType) return;
                                copy(assetType);
                                toast.success("Copied to clipboard");
                            } catch (error) {
                                toast.error("Failed to copy to clipboard");
                            }
                        }}
                    >
                        {truncateAddress(parse[0], "start")}::{parse[1]}::{parse[2]}
                    </Chip>
                )
            case "name":
                const name = cellValue;

                return (
                    <Chip
                        variant="light"
                        size="lg"
                        classNames={{
                            content: "text-foreground font-semibold"
                        }}
                        endContent={
                            <Chip
                                size="sm"
                                color="primary"
                                radius="sm"
                            >
                                {item.symbol.toUpperCase()}
                            </Chip>
                        }
                    >
                        {name}
                    </Chip>
                )
            case "symbol":
                const symbol = cellValue;
                <Chip
                    variant="light"
                    size="lg"
                >
                    {symbol}
                </Chip>
            case "amount":
                const amount = cellValue;
                let price;
                try {
                    price = await getPrice(item.asset_type);
                } catch (error) {
                    console.error(error);
                    price = null;
                }
                return (
                    <div className="flex flex-col">
                        <p className="w-full overflow-clip">
                            {numeral(amount).format("0,0.000")}
                        </p>
                        {price && (
                            <p className="text-foreground-500">
                                {formatValue(price.price, price.decimals)} APT
                            </p>
                        )}
                    </div>
                )
            default:
                return <p className="text-foreground-500">-</p>;
        }
    }, []);

    return (
        <Table
            isHeaderSticky
            aria-label="Example table with infinite pagination"
            baseRef={scrollerRef}
            fullWidth
            bottomContent={
                hasMore ? (
                    <div className="flex w-full justify-center">
                        <Spinner ref={loaderRef} color="primary" />
                    </div>
                ) : null
            }
            classNames={{
                base: "max-h-[520px] overflow-scroll bg-transparent",
                table: "min-h-[400px]",
                wrapper: "w-full bg-foreground-50",
            }}
        >
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn
                        key={column.uid}
                        allowsSorting={column.sortable}
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody
                isLoading={isLoading}
                items={list.items}
                loadingContent={<Spinner color="white" />}
                emptyContent="No data found"
            >
                {(item: Coin) => (
                    <TableRow key={item.asset_type} className="w-full hover:bg-foreground-100">
                        {(columnKey) =>
                            <TableCell>
                                {renderCell(item, columnKey)}
                            </TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
