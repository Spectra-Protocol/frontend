"use client";

import { Tab, Tabs } from "@nextui-org/react";
import dynamic from "next/dynamic";

const TransactionArea = dynamic(() => import("../../components/transactions-area"), { ssr: false });
const KeyMetricsArea = dynamic(() => import("../../components/key-metric-area"), { ssr: false });

export default function Mobile() {
    return (
        <Tabs className="lg:hidden" variant="light" fullWidth>
            <Tab key={"transactions"}>
                <TransactionArea />
            </Tab>
            <Tab key={"key-metrics"}>
                <KeyMetricsArea />
            </Tab>
        </Tabs>
    )
}