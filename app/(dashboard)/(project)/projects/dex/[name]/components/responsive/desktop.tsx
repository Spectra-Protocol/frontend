"use client";

import dynamic from "next/dynamic";

const TransactionArea = dynamic(() => import("../../components/transactions-area"), { ssr: false });
const KeyMetricsArea = dynamic(() => import("../../components/key-metric-area"), { ssr: false });

export default function Desktop() {
    return (
        <div className="hidden lg:flex flex-col-reverse lg:flex-row gap-4 w-full h-full overflow-y-scroll">
            <div className="flex-grow-[3] h-full overflow-y-scroll">
                <TransactionArea />
            </div>
            <div className="flex-grow-[1] h-full overflow-y-scroll">
                <KeyMetricsArea />
            </div>
        </div>
    )
}