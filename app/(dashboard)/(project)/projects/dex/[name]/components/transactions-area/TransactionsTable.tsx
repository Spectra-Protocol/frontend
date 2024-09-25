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
    });
    const [loaderRef, scrollerRef] = useInfiniteScroll({ hasMore, onLoadMore: list.loadMore });


    const renderCell = React.useCallback((item: SwapTransaction, columnKey: React.Key) => {
        const cellValue = getKeyValue(item, columnKey.toString());

        switch (columnKey) {
            case "time":

                return (
                    <p className="text-sm w-fit text-nowrap">
                        {formatTime(new Date(item.version * 1000))}
                    </p>
                );
            case "sender":
                const convertedSender = cellValue as string;

                return "";
            // return (
            //     <Chip
            //         size="lg"
            //         radius="md"
            //         className="shadow bg-foreground-50 dark:bg-foreground-100 text-foreground-900 text-sm gap-2"
            //         startContent={
            //             <Avatar
            //                 src={convertedFrom.avatar}
            //                 alt={convertedFrom.name}
            //                 color="primary"
            //                 size="sm"
            //                 className="w-4 h-4"
            //                 radius="full"
            //                 showFallback
            //             />
            //         }
            //         endContent={
            //             <Copy02Icon size={16} className="text-foreground-400" />
            //         }
            //     >
            //         {truncateAddress(convertedFrom.address, "start")}
            //     </Chip>
            // )
            case "token-sold":
                const convertedToken = cellValue as string;

                return (
                    <Chip
                        variant="light"
                        size="lg"

                    >
                        {convertedToken}
                    </Chip>
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
                base: "max-h-[520px] overflow-scroll bg-transparent",
                table: "min-h-[400px]",
                wrapper: "w-full bg-foreground-50",
            }}
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
