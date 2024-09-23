type Column = {
    name: string;
    uid: string;
    sortable?: boolean;
}
export const columns: Column[] = [
    {
        name: "Time",
        uid: "time",
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
        name: "Value",
        uid: "value",
        sortable: true,
    },
    {
        name: "Token",
        uid: "token",
        sortable: true,
    },
    {
        name: "Tags",
        uid: "tags",
        sortable: false,
    }
];

