"use client";

import dynamic from "next/dynamic";
import KeyMetricsArea from "../key-metric-area";
import TransactionArea from "../transactions-area";


export default function Desktop() {
    return (
        <div className="hidden lg:flex flex-col-reverse lg:flex-row gap-4 w-full h-full overflow-y-scroll">
            <div className="flex-grow-[3] h-full overflow-y-scroll no-scrollbar">
                <TransactionArea />
            </div>
            <div className="flex-grow-[1] h-full overflow-y-scroll no-scrollbar">
                <KeyMetricsArea />
            </div>
        </div>
    )
}