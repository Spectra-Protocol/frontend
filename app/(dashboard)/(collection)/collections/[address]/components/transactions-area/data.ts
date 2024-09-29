type Column = {
    name: string;
    uid: string;
    sortable?: boolean;
}
export const columns: Column[] = [
    {
        name: "NFT",
        uid: "current_token_data",
        sortable: false,
    },
    {
        name: "Version",
        uid: "transaction_version",
        sortable: true,
    },
    {
        name: "Timestamp",
        uid: "transaction_timestamp",
        sortable: true,
    },
    {
        name: "From",
        uid: "from",
        sortable: true,
    },
    {
        name: "To",
        uid: "to",
        sortable: true,
    },
    {
        name: "Function",
        uid: "entry_function_id_str",
        sortable: false,
    },
];

