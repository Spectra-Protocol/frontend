"use client";
import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { Skeleton } from "@nextui-org/react";
import { TransactionIcon} from "hugeicons-react";
import dynamic from "next/dynamic";

const TransactionsTable = dynamic(() => import("./TransactionsTable"), { ssr: false });

export function LoadingTransactionArea() {
    return (
        <Area>
            <Skeleton className="rounded-2xl w-32 h-8"/>
            <AreaMain>
                <Skeleton className="rounded-3xl w-full aspect-[1/2]" />
            </AreaMain>
        </Area>
    )
}
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