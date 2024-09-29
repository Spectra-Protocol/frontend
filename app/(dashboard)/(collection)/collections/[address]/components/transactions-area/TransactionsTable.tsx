'use client';

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, getKeyValue, Chip, Pagination, SortDescriptor, Button } from "@nextui-org/react";
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
    const [data, setData] = React.useState<TokenActivity[]>([]);
    const [cursor, setCursor] = React.useState<number | null>(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [pages, setPages] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
        column: "transaction_timestamp",
        direction: "descending",
    });
    const fetchData = async (cursor: number | null) => {
        setIsLoading(true);
        const newData = await getCollectionActivities(collection.collection_id, 99999);
        setPages(Math.ceil(newData.length / rowsPerPage));
        setData(newData);
        setIsLoading(false);
    };

    React.useEffect(() => {
        fetchData(cursor);
    }, []);


    const onNextPage = React.useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page])

    const items= React.useMemo(() => {
        return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
    }, [data, page, rowsPerPage]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
                <div className="hidden sm:flex w-[30%] justify-end gap-2">
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
                        Previous
                    </Button>
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
                        Next
                    </Button>
                </div>
            </div>
        );
    }, [page, pages]);



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
            default:
                return <p className="w-full overflow-clip">{""}</p>;
        }
    }, []);

    return (
        <Table
            isHeaderSticky
            aria-label="Transactions table"
            fullWidth
            bottomContent={bottomContent}
            classNames={{
                base: "max-h-[520px] overflow-scroll bg-transparent text-foreground-900",
                table: "min-h-[400px]",
                wrapper: "w-full bg-foreground-100",
            }}
            onSortChange={setSortDescriptor}
            sortDescriptor={sortDescriptor}
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
                items={items}
                loadingContent={<Spinner color="primary" />}
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
