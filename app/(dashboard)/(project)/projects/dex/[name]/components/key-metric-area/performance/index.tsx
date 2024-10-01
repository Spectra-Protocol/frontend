import { ArrowDownRight01Icon, ArrowUpRight01Icon, BitcoinWithdrawIcon, Wallet02Icon } from "hugeicons-react";
import { useProjectDexAggregator } from "../../../context";
import { MetricCard } from "../components/ui/metric-card";
import { MetricField01 } from "../components/ui/metric-fields";

export default function PerformanceMetric() {
    const project = useProjectDexAggregator();

    return (
        <MetricCard
            title="Performance"
            description="Historical price performance metrics"
            classNames={{
                wrapper: "p-6 rounded-3xl bg-foreground-100"
            }}
            className="grid grid-cols-2 grid-rows-2 justify-between items-start gap-6"
        >
            <MetricField01
                title="ATH"
                description="All Time High"
                useTooltip
                icon={<ArrowUpRight01Icon size={16} className="text-success" />}
                value={project.ath}
            />
            <MetricField01
                title="ATH"
                description="All Time High"
                useTooltip
                icon={<ArrowDownRight01Icon size={16} className="text-warning" />}
                value={project.ath}
                className="items-end"
            />
            <MetricField01
                title="ARPU"
                useTooltip
                description="Average Revenue per User"
                icon={<BitcoinWithdrawIcon size={16} />}
                value={project.arpu}
            />
            <MetricField01
                title="AFPU"
                useTooltip
                description="Average Fee per User"
                icon={<Wallet02Icon size={16} />}
                value={project.afpu}
                className="items-end"
            />
        </MetricCard>
    )
}