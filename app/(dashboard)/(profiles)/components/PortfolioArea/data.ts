import { Column } from "@/components/dashboard/table";

export const columns: Column[] = [
    {
        name: "Asset Type",
        uid: "asset_type",
        sortable: false,
    },
    {
        name: "Name",
        uid: "name",
        sortable: true,
    },
    {
        name: "Symbol",
        uid: "symbol",
        sortable: true,
    },
    {
        name: "Amount",
        uid: "amount",
        sortable: true,
    }
];

