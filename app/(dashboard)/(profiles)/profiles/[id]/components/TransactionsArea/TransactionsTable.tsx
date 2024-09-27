'use client';

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue, Tab, Chip, Avatar } from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";

import { columns } from "./data";
import { Profiler, Token, Transaction, TransactionTagType } from "@/types";
import { mockProjectsTransactions } from "@/mock";
import { Copy02Icon } from "hugeicons-react";
import { formatTime, truncateAddress } from "@/lib";

export default function TransactionsTable() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(false);

    let list = useAsyncList<Transaction>({
        async load({ signal, cursor }) {
            if (cursor) {
                setIsLoading(false);
            }

            return {
                items: mockProjectsTransactions,
            };
        },
    });

    const [loaderRef, scrollerRef] = useInfiniteScroll({ hasMore, onLoadMore: list.loadMore });

    const renderCell = React.useCallback((item: Transaction, columnKey: React.Key) => {
        const cellValue = getKeyValue(item, columnKey.toString());

        switch (columnKey) {
            case "time":
                const convertedTime = new Date(cellValue);

                return (
                    <p className="text-sm w-fit text-nowrap">
                        {formatTime(convertedTime)}
                    </p>
                );
            case "from":
                const convertedFrom = cellValue as Profiler;

                return (
                    <Chip
                        size="lg"
                        radius="md"
                        className="shadow bg-foreground-50 dark:bg-foreground-100 text-foreground-900 text-sm gap-2"
                        startContent={
                            <Avatar
                                src={convertedFrom.avatar}
                                alt={convertedFrom.name}
                                color="primary"
                                size="sm"
                                className="w-4 h-4"
                                radius="full"
                                showFallback
                            />
                        }
                        endContent={
                            <Copy02Icon size={16} className="text-foreground-400" />
                        }
                    >
                        {truncateAddress(convertedFrom.address, "start")}
                    </Chip>
                )
            case "to":
                const convertedTo = cellValue as Profiler;

                return (
                    <Chip
                        size="lg"
                        radius="md"
                        className="shadow bg-foreground-50 dark:bg-foreground-100 text-foreground-900 text-sm gap-2"
                        startContent={
                            <Avatar
                                src={convertedTo.avatar}
                                alt={convertedTo.name}
                                color="primary"
                                size="sm"
                                className="w-4 h-4"
                                radius="full"
                                showFallback
                            />
                        }
                        endContent={
                            <Copy02Icon size={16} className="text-foreground-400" />
                        }
                    >
                        {truncateAddress(convertedTo.address, "start")}
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
            case "tags":
                const convertedTags = cellValue as string[];

                return (
                    <div className="flex gap-2">
                        {convertedTags.map((tag, index) => (
                            <Chip key={index}
                                className="text-xs"
                                color= {
                                    tag === TransactionTagType.Buy ? "success" :
                                    tag === TransactionTagType.Sell ? "danger" :
                                    tag === TransactionTagType.Transfer ? "warning" : "default"
                                }
                                radius="md"
                                variant="flat"
                            >
                                {tag}
                            </Chip>
                        ))}
                    </div>
                )


            default:
                return <p className="w-full overflow-clip">{cellValue.toString()}</p>;
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
                {(item: Transaction) => (
                    <TableRow key={item.id} className="w-full">
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
