'use client';

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, getKeyValue, Chip, Avatar } from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";

import { Portifolio, Token } from "@/types";
import { columns } from "./data";
import { useProfiler } from "../../context";

export default function TransactionsTable() {
    const profiler = useProfiler();

    const [isLoading, setIsLoading] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(false);

    let list = useAsyncList<Portifolio>({
        async load({ signal, cursor }) {
            if (!profiler.portifolio) return { items: [] };

            setIsLoading(true);

            const start = cursor ? parseInt(cursor, 10) : 0;
            const itemsPerPage = 10;
            const end = start + itemsPerPage;

            const items = profiler.portifolio.slice(start, end);
            const hasMore = end < profiler.portifolio.length;

            setHasMore(hasMore);
            setIsLoading(false);

            return {
                items: items,
                cursor: end.toString()
            };
        },
    });

    const [loaderRef, scrollerRef] = useInfiniteScroll({ hasMore, onLoadMore: list.loadMore });

    const renderCell = React.useCallback((item: Portifolio, columnKey: React.Key) => {
        const cellValue = getKeyValue(item, columnKey.toString());

        switch (columnKey) {
            case "asset":
                const convertedToken = cellValue as Token;

                return (
                    <Chip
                        variant="light"
                        size="lg"
                        classNames={{
                            content: "text-foreground"
                        }}
                        startContent={
                            <Avatar
                                src={convertedToken.icon}
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
            case "price":
                const convertedPrice = cellValue as any;

                return (
                    <p className="w-full overflow-clip">{convertedPrice.toString()}</p>
                )
            case "holding":
                const convertedHolding = cellValue as any;

                return (
                    <p className="w-full overflow-clip">{convertedHolding.toString()}</p>
                )
            case "value":
                const convertedValue = cellValue as any;

                return (
                    <p className="w-full overflow-clip">{convertedValue.toString()}</p>
                )
            default:
                return null;
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
                {(item: Portifolio) => (
                    <TableRow key={item.id} className="w-full hover:bg-foreground-100">
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
