import { Column } from "@/components/dashboard/table";

export const columns: Column[] = [
    {
        name: "Version",
        uid: "version",
        sortable: true,
    },
    {
        name: "Time",
        uid: "timestamp",
        sortable: true,
    },
    {
        name: "Sender",
        uid: "sender",
        sortable: true,
    },
    {
        name: "Receiver",
        uid: "receiver",
        sortable: true,
    },
    {
        name: "Amount",
        uid: "amount",
        sortable: true,
    },
    {
        name: "Function",
        uid: "function",
        sortable: true,
    },
    {
        name: "Gas Amount",
        uid: "gas_amount",
        sortable: false,
    }
];

