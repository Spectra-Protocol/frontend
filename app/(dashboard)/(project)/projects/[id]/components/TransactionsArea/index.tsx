import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { TransactionIcon} from "hugeicons-react";
import dynamic from "next/dynamic";

const TransactionsTable = dynamic(() => import('./TransactionsTable'), { ssr: false });

export default function TransactionArea() {
    return (
        <Area>
            <AreaHeader name="Transactions" icon={<TransactionIcon size={24} />} subtitle="All transaction with details"/>
            <AreaMain>
                <TransactionsTable />
            </AreaMain>
        </Area>
    )
}