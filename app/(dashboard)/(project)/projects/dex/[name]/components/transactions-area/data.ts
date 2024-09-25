type Column = {
    name: string;
    uid: string;
    sortable?: boolean;
}
export const columns: Column[] = [
    {
        name: "Time",
        uid: "version",
        sortable: true,
    },
    {
        name: "Sender",
        uid: "sender",
        sortable: true,
    },
    {
        name: "Token Sold",
        uid: "token_sold",
        sortable: true,
    },
    {
        name: "Sold Amount",
        uid: "token_sold_amount",
        sortable: true,
    },
    {
        name: "Token Bought",
        uid: "token_bought",
        sortable: true,
    },
    {
        name: "Bought Amount",
        uid: "token_bought_amount",
        sortable: true,
    },
];

