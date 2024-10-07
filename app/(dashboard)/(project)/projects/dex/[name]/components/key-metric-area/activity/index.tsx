"use client";

import { title } from "process";
import { useProjectDexAggregator } from "../../../context";
import { MetricCard } from "../components/ui/metric-card";
import { ChartIcon, CoinsSwapIcon } from "hugeicons-react";
import MetricField02, { MetricField01 } from "../components/ui/metric-fields";
import clsx from "clsx";
import numeral from "numeral";

export default function ActivityMetric() {
    const project = useProjectDexAggregator();

    const items1 = [
        {
            title: "Trading Volume",
            description: "Total trading volume",
            value: numeral(project.trading_volume).format("0,0.00a"),
            icon: <CoinsSwapIcon size={16} />
        },
        {
            title: "TTV (30d)",
            description: "Total transaction volume (30d)",
            value: numeral(project.token_trading_volume_30d).format("0,0.00a"),
            icon: <ChartIcon size={16} />
        }
    ]

    const items2 = [
        {
            title: "Daily Active Users",
            description: "Number of daily active users",
            value: numeral(project.daily_active_users).format("0,0.00a"),
        },
        {
            title: "Weekly Active Users",
            description: "Number of weekly active users",
            value: numeral(project.weekly_active_users).format("0,0.00a"),
        },
        {
            title: "Monthly Active Users",
            description: "Number of monthly active users",
            value: numeral(project.monthly_active_users).format("0,0.00a"),
        }
    ]
    return (
        <MetricCard
            title="Activity"
            description="User engagement and trading activity"
            classNames={{
                wrapper: "p-6 rounded-3xl bg-foreground-100"
            }}
        >
            <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full justify-start items-start">
                {items1.map((item, index) => (
                    <MetricField01
                        key={index}
                        className={clsx(
                            index % 2 === 0 ? "items-start" : "items-end",
                        )}
                        useTooltip={!!item.description}
                        title={item.title}
                        description={item.description}
                        value={item.value}
                        icon={item.icon}
                    />
                ))}
            </div>
            <div className="flex flex-col gap-2 w-full">
                {items2.map((item, index) => (
                    <MetricField02
                        key={index}
                        className="bg-foreground-100 p-6 rounded-3xl shadow"
                        title={item.title}
                        value={item.value}
                    />
                ))}
            </div>
        </MetricCard>
    )
}