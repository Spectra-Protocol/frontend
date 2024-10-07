'use client';

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, getKeyValue, Tab, Chip, Avatar } from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";

import { columns } from "./data";
import { SwapTransaction } from "@/types";

import { Copy02Icon } from "hugeicons-react";
import { formatTime, truncateAddress } from "@/lib";
import { useProjectDexAggregator } from "../../context";
import numeral from "numeral";

function getTokenName(tokenIdentifier: string): string {
    if (!tokenIdentifier) {
        return '';
    }
    const parts = tokenIdentifier.split('::');
    return parts[parts.length - 1];
}

export default function TransactionsTable() {
    const project = useProjectDexAggregator();

    const [isLoading, setIsLoading] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(false);

    let list = useAsyncList<SwapTransaction>({
        async load({ signal, cursor }) {
            if (cursor) {
                setIsLoading(false);
            }

            return {
                items: project.transactions || [],
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


    const renderCell = React.useCallback((item: SwapTransaction, columnKey: React.Key) => {
        const cellValue = getKeyValue(item, columnKey.toString());

        switch (columnKey) {
            case "version":
                return (
                    <p className="text-sm w-fit text-nowrap">
                        {cellValue}
                    </p>
                );
            case "sender":
                const convertedSender = cellValue as string;

                return (
                    <Chip
                        size="lg"
                        radius="md"
                        className="bg-transparent"
                        classNames={{
                            content: "text-foreground-900",
                        }}
                        endContent={
                            <Copy02Icon size={16} className="text-foreground-400" />
                        }
                    >
                        {truncateAddress(convertedSender, "start")}
                    </Chip>
                )
            case "token_sold":
                return (
                    <p className="uppercase text-foreground-900 font-semibold">
                        {getTokenName(item.token_sold)}
                    </p>
                )
            case "token_sold_amount":
                return (
                    <p
                    >
                        {numeral(item.token_sold_amount).format("0,0.00a")}
                    </p>
                )
            case "token_bought":
                return (
                    <p className="uppercase text-foreground-900 font-semibold">
                        {getTokenName(item.token_bought)}
                    </p>
                )
            case "token_bought_amount":
                return (
                    <p>
                        {numeral(item.token_bought_amount).format("0,0.00a")}
                    </p>
                )
            default:
                return <p className="w-full overflow-clip">{""}</p>;
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
                base: "h-full overflow-scroll bg-transparent text-foreground-900",
                table: "min-h-[400px]",
                wrapper: "w-full h-full bg-foreground-100",
                tbody: "scrollbar"
            }}
            onSortChange={(sortDescriptor) => list.sort(sortDescriptor)}
            sortDescriptor={list.sortDescriptor}
        >
            <TableHeader columns={columns} className="bg-transparent">
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
                {(item: SwapTransaction) => (
                    <TableRow key={item.version} className="w-full">
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
