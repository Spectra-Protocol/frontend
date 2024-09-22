import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { AnalyticsUpIcon } from "hugeicons-react";
import dynamic from "next/dynamic";

const DynamicMetricChart = dynamic(() => import("./MetricChart"), { ssr: false });

export default function MetricChartArea() {
    return (
        <Area>
            <AreaHeader title="Metric Chart" icon={<AnalyticsUpIcon size={24}/>}/>
            <AreaMain>
                <DynamicMetricChart />
            </AreaMain>
        </Area>
    )
}