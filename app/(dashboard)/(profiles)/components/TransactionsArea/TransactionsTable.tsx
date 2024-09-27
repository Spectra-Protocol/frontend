'use client';

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue, Tab, Chip, Avatar } from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";

import { columns } from "./data";
import { Profiler, Token, Transaction, TransactionTagType } from "@/types";
import { Copy02Icon } from "hugeicons-react";
import { formatTime, getPartOfFunction, truncateAddress } from "@/lib";
import { useProfiler } from "../../context";
import numeral from "numeral";


export default function TransactionsTable() {
    const profile = useProfiler();

    const [isLoading, setIsLoading] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(false);

    let list = useAsyncList<Transaction>({
        async load({ signal, cursor }) {
            if (cursor) {
                setIsLoading(false);
            }

            return {
                items: profile.transactions || [],
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

    const renderCell = React.useCallback((item: Transaction, columnKey: React.Key) => {
        const cellValue = getKeyValue(item, columnKey.toString());

        switch (columnKey) {
            case "version":
                const convertedVersion = cellValue as number;

                return (
                    <p className="text-sm w-fit text-nowrap">
                        {convertedVersion}
                    </p>
                );
            case "timestamp":
                const convertedTime = new Date(cellValue);

                return (
                    <p className="text-sm w-fit text-nowrap">
                        {formatTime(convertedTime)}
                    </p>
                );
            case "sender":
                const convertedSender = cellValue;

                return (
                    <Chip
                        size="lg"
                        radius="md"
                        className="shadow bg-foreground-50 dark:bg-foreground-100 text-foreground-900 text-sm gap-2"
                        endContent={
                            <Copy02Icon size={16} className="text-foreground-400" />
                        }
                    >
                        {truncateAddress(convertedSender, "start")}
                    </Chip>
                )
            case "receiver":
                const convertedReceiver = cellValue;

                return (
                    <Chip
                        size="lg"
                        radius="md"
                        className="shadow bg-foreground-50 dark:bg-foreground-100 text-foreground-900 text-sm gap-2"
                        endContent={
                            <Copy02Icon size={16} className="text-foreground-400" />
                        }
                    >
                        {truncateAddress(convertedReceiver, "start")}
                    </Chip>
                )
            case "token":
                const convertedToken = cellValue as Token;

                return (
                    <Chip
                        variant="light"
                        size="lg"
                        startContent={
                            <Avatar
                                src={convertedToken.image}
                                alt={convertedToken.name}
                                color="primary"
                                size="sm"
                                className="w-4 h-4"
                                radius="full"
                                showFallback
                            />
                        }
                    >
                        {convertedToken.symbol}
                    </Chip>
                )
            case "function":
                const convertedFunction = cellValue as string;
                const parts = getPartOfFunction(convertedFunction);

                return (
                    <div className="flex gap-2">
                        <Chip
                            className="text-xs"
                            // color={
                            // tag === TransactionTagType.Buy ? "success" :
                            // tag === TransactionTagType.Sell ? "danger" :
                            // tag === TransactionTagType.Transfer ? "warning" : "default"
                            // }
                            radius="md"
                            variant="flat"
                        >
                            {parts[2]}
                        </Chip>

                    </div>
                )
            case "amount":
                const convertedAmount = cellValue as number;

                return (
                    <p>
                        {numeral(convertedAmount/10e8).format("0,0.000000")} APT
                    </p>
                )
            case "gas_amount":
                const convertedGasAmount = cellValue as number;

                return (
                    <p>
                        {numeral(convertedGasAmount/10e8).format("0,0.000000")} APT
                    </p>
                )
            default:
                return <p className="w-full overflow-clip">-</p>;
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
            onSortChange={(sortDescriptor) => list.sort(sortDescriptor)}
            sortDescriptor={list.sortDescriptor}
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
                {(item: Transaction) => (
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
