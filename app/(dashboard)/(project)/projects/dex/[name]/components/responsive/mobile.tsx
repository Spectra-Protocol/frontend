"use client";

import { Tab, Tabs } from "@nextui-org/react";
import dynamic from "next/dynamic";

const TransactionArea = dynamic(() => import("../../components/transactions-area"), { ssr: false });
const KeyMetricsArea = dynamic(() => import("../../components/key-metric-area"), { ssr: false });

export default function Mobile() {
    return (
        <div className="lg:hidden flex flex-col">
            <Tabs variant="light">
                <Tab key={"transactions"} title="Transactions">
                    <TransactionArea />
                </Tab>
                <Tab key={"key-metrics"} title="Key Metrics">
                    <KeyMetricsArea />
                </Tab>
            </Tabs>
        </div>
    )
}