'use client';

import { CustomBarChartHeader, CustomBarChartWrapper } from "@/components/dashboard/charts";
import clsx from "clsx";
import { Bar, Legend, Tooltip, ResponsiveContainer, XAxis, YAxis, LegendProps, BarChart, Brush } from "recharts";
import { data } from "./data";

export function RenderLegend(prop: LegendProps) {
    const { payload } = prop;
    return (
        <div className="flex flex-row gap-4 w-full items-center justify-center">
            {payload && payload.map((entry, index) => {
                return (
                    <div key={`item-${index}`} className="flex flex-row items-center gap-2">
                        <div
                            className={clsx(
                                "w-4 h-4 rounded-md",
                            )}
                            style={{
                                backgroundColor: entry.color
                            }}
                        />
                        <p className="text-xs font-semibold text-foreground-500 capitalize">{entry.value}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default function MetricChart() {
    return (
        <CustomBarChartWrapper>
            <CustomBarChartHeader
                title="Marketcap, TVL, Volume"
                subtitle="Last 7 days"
                description="Total sales in the last 7 days"
            />
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    barGap={4}
                    barSize={16}
                    height={1000}
                    data={data}
                    barCategoryGap={16}
                >
                    <XAxis dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        interval={4}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        labelClassName="text-xs font-semibold text-foreground-500 capitalize"
                        itemStyle={{
                            color: "hsl(var(--color-foreground-900))",
                        }}
                        wrapperClassName="!bg-foreground-200 !border-none rounded-[12px] !shadow p-2"
                        cursor={{
                            fill: "transparent",
                        }} />
                    <Legend
                        className="rounded-[12px] font-normal"
                        content={<RenderLegend />}
                    />
                    <Bar dataKey="marketcap" fill="#FCFF3C" radius={4} />
                    <Bar dataKey="tvl" fill="#3CFF77" radius={4} />
                    <Bar dataKey="volume" fill="#40FFBF" radius={4} />
                    <Brush dataKey="day" height={30} stroke="hsl(var(--color-primary))" fill="hsl(var(--color-foreground-200))" />
                </BarChart>
            </ResponsiveContainer >
        </CustomBarChartWrapper>
    )
}