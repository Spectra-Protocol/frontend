import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { MetricsTable } from "@/components/dashboard";
import { mockProjectDex } from "@/mock";
import { KeyframesMultipleIcon } from "hugeicons-react";

export default function KeMetricsArea() {
    const projectDex = mockProjectDex;

    return (
        <Area>
            <AreaHeader title="Key Metrics" icon={<KeyframesMultipleIcon size={32} />} />
            <AreaMain>
                <MetricsTable categories={projectDex.categories} />
            </AreaMain>
        </Area>
    )
}