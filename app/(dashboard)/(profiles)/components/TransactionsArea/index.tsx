import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { TransactionIcon} from "hugeicons-react";
import TransactionsTable from "./TransactionsTable";

export function SkeletonTransactionArea() {
    return (
        <Area>
            <AreaHeader title="Transactions" icon={<TransactionIcon size={24} />} subtitle="All transaction with details"/>
            <AreaMain>
                <div className="w-full h-96 bg-foreground-100 rounded-3xl animate-pulse"/>
            </AreaMain>
        </Area>
    )
}
export default function TransactionArea() {
    return (
        <Area>
            <AreaHeader title="Transactions" icon={<TransactionIcon size={24} />} subtitle="All transaction with details"/>
            <AreaMain>
                <TransactionsTable />
            </AreaMain>
        </Area>
    )
}