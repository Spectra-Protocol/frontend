'use client';

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, getKeyValue, Chip } from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";
import { Copy02Icon } from "hugeicons-react";

import { columns } from "./data";
import { TokenActivity } from "@/types";
import { formatTime, getPartOfFunction, truncateAddress } from "@/lib";
import { useCollection } from "../../context";
import { getCollectionActivities } from "@/fetch-functions/collection";

function getTokenName(tokenIdentifier: string): string {
    if (!tokenIdentifier) {
        return '';
    }
    const parts = tokenIdentifier.split('::');
    return parts[parts.length - 1];
}

export default function TransactionsTable() {
    const collection = useCollection();

    const [isLoading, setIsLoading] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(false);

    let list = useAsyncList<TokenActivity>({
        async load({ signal, cursor }) {
            if (cursor) {
                setIsLoading(false);
            }
            const data = await getCollectionActivities(collection.collection_id);

            return {
                items: data as TokenActivity[],
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


    const renderCell = React.useCallback((item: TokenActivity, columnKey: React.Key) => {
        const cellValue = getKeyValue(item, columnKey.toString());

        switch (columnKey) {
            case "current_token_data":

            case "transaction_timestamp":
                return (
                    <p className="text-sm w-fit text-nowrap">
                        {formatTime(new Date(item.transaction_timestamp))}
                    </p>
                );
            case "transaction_version":

                return (
                    <p className="text-sm w-fit text-nowrap">
                        {item.transaction_version}
                    </p>
                );
            case "from":
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
                        {truncateAddress(item.from_address, "start")}
                    </Chip>
                )
            case "to":
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
                        {truncateAddress(item.to_address, "start")}
                    </Chip>
                )

            case "entry_function_id_str":
                const parts = getPartOfFunction(item.entry_function_id_str);

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
            // case "value":
            //     return (
            //         <p
            //         >
            //             {numeral(item.value).format("0,0.00a")}
            //         </p>
            //     )
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
                base: "max-h-[520px] overflow-scroll bg-transparent text-foreground-900",
                table: "min-h-[400px]",
                wrapper: "w-full bg-foreground-100",
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
                {(item: TokenActivity) => (
                    <TableRow key={Math.random()} className="w-full">
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
