'use client';

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue, Tab, Chip, Avatar } from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";
import copy from "copy-to-clipboard";

import { columns } from "./data";
import {Transaction} from "@/types";
import { Copy02Icon } from "hugeicons-react";
import { formatTime, getPartOfFunction, truncateAddress } from "@/lib";
import { useProfiler } from "../../context";
import numeral from "numeral";
import { toast } from "react-toastify";


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
                const sender = cellValue;

                return (
                    <Chip
                        size="lg"
                        radius="md"
                        className="bg-transparent text-foreground-900 text-sm gap-2"
                        endContent={
                            <Copy02Icon size={16} className="text-foreground-400" 
                                onClick={()=>{
                                    try {
                                        if(!sender) return;
                                        copy(sender);
                                        toast.success("Address copied to clipboard");
                                    } catch (error) {
                                        toast.error("Failed to copy address");
                                    }
                                }}
                            />
                        }
                    >
                        {truncateAddress(sender, "start")}
                    </Chip>
                )
            case "receiver":
                const receiver = cellValue;

                return (
                    <Chip
                        size="lg"
                        radius="md"
                        className="bg-transparent text-foreground-900 text-sm gap-2"
                        endContent={
                            <Copy02Icon size={16} className="text-foreground-400"
                                onClick={()=>{
                                    try {
                                        if(!receiver) return;
                                        copy(receiver);
                                        toast.success("Address copied to clipboard");
                                    } catch (error) {
                                        toast.error("Failed to copy address");
                                    }
                                }}
                             />
                        }
                    >
                        {truncateAddress(receiver, "start")}
                    </Chip>
                )
            case "function":
                const convertedFunction = cellValue as string;
                const parts = getPartOfFunction(convertedFunction);

                return (
                        <Chip
                            className="text-xs"
                            classNames={{
                                content: "text-foreground-200",
                                base: "bg-foreground-700 shadow",
                            }}
                            radius="sm"
                            variant="flat"
                        >
                            {parts[1]}::{parts[2]}
                        </Chip>
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
