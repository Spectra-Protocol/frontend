"use client";

import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";

import { KeyframesMultipleIcon } from "hugeicons-react";
import { MetricCategory } from "@/types";
import { useProjectDexAggregator } from "../../context";
import numeral from "numeral";
import GeneralMetric from "./general";
import { Skeleton } from "@nextui-org/react";
import PerformanceMetric from "./performance";
import ActivityMetric from "./activity";
import FinancialsMetric from "./financials";

export function LoadingKeyMetricsArea() {
    return (
        <Area>
            <Skeleton className="rounded-2xl w-32 h-8" />
            <AreaMain className="flex flex-col gap-4">
                <Skeleton className="rounded-3xl aspect-[2/3] w-full" />
                <Skeleton className="rounded-3xl aspect-[2/3] w-full" />
                <Skeleton className="rounded-3xl aspect-[2/3] w-full" />
            </AreaMain>
        </Area>
    )
}
export default function KeyMetricsArea() {
    const project = useProjectDexAggregator();
    if (!project) return <LoadingKeyMetricsArea />
    
    return (
        <Area>
            <AreaHeader title="Key Metrics" icon={<KeyframesMultipleIcon size={24} />} subtitle={"All key metrics"}/>
            <AreaMain className="flex flex-col gap-4">
                <GeneralMetric />
                <PerformanceMetric />
                <ActivityMetric />
                <FinancialsMetric />
            </AreaMain>
        </Area>
    )
}