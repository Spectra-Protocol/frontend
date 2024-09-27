type Column = {
    name: string;
    uid: string;
    sortable?: boolean;
}
export const columns: Column[] = [
    {
        name: "Version",
        uid: "timestamp",
        sortable: true,
    },
    {
        name: "Event",
        uid: "event",
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
    }
];

