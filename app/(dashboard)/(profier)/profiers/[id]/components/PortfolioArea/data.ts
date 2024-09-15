import { Column } from "@/components/dashboard/table";

export const columns: Column[] = [
    {
        name: "Asset",
        uid: "asset",
        sortable: false,
    },
    {
        name: "Price",
        uid: "price",
        sortable: true,
    },
    {
        name: "Holding",
        uid: "holding",
        sortable: true,
    },
    {
        name: "Value",
        uid: "value",
        sortable: true,
    }
];

