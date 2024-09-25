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
        name: "Sender",
        uid: "sender",
        sortable: true,
    },
    {
        name: "Token Sold",
        uid: "token-sold",
        sortable: true,
    },
    {
        name: "Sold Price",
        uid: "sold-price",
        sortable: true,
    },
    {
        name: "Token Bought",
        uid: "token-bought",
        sortable: true,
    },
    {
        name: "Bought Price",
        uid: "bought-price",
        sortable: true,
    },
];

