import { AnalyticsUpIcon } from "hugeicons-react";
import React from "react";
import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import MartketcapChart from "./MarketCapChart";
import TVLChart from "./TVLChart";
import { LinearContainer } from "@/components/ui/container";
import VolumeChart from "./VolumeChart";


export default function MetricChartArea() {
    return (
        <Area>
            <AreaHeader title="Metric Chart" icon={<AnalyticsUpIcon size={24} />} />
            <AreaMain>
                <LinearContainer direction="column" space="lg">
                    <MartketcapChart />
                    <TVLChart />
                    <VolumeChart />
                </LinearContainer>
            </AreaMain>
        </Area>
    )
}