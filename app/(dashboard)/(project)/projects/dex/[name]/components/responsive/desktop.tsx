"use client";

import dynamic from "next/dynamic";
import KeyMetricsArea from "../key-metric-area";
import TransactionArea from "../transactions-area";
import { LinearContainer } from "@/components/ui/container";

const MetricChart = dynamic(() => import("../metrics-chart-area"));

export default function Desktop() {
    return (
        <div className="hidden lg:flex flex-col-reverse lg:flex-row gap-4 w-full h-full overflow-y-scroll">
            <LinearContainer className="flex-grow-[3] h-full overflow-y-scroll no-scrollbar" space="lg" direction="column">
                <TransactionArea />
                <MetricChart />
            </LinearContainer>
            <div className="flex-grow-[2] h-full overflow-y-scroll no-scrollbar">
                <KeyMetricsArea />
            </div>
        </div>
    )
}