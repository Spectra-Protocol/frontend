'use client';

import { CustomBarChartHeader, CustomBarChartWrapper } from "@/components/dashboard/charts";
import { Bar, Legend, Tooltip, ResponsiveContainer, XAxis, YAxis, LegendProps, BarChart, Brush } from "recharts";
import { RenderLegend } from "./MetricChart";
import { generateData } from "./data";

export const data = generateData();

export default function VolumeChart() {
    return (
        <CustomBarChartWrapper>
            <CustomBarChartHeader
                title="Volume"
                subtitle="30 days"
                description="Total volume in the last 30 days"
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
                    <Bar
                        dataKey="volume"
                        fill="hsl(var(--color-foreground-300))"
                        radius={4}
                        activeBar={{
                            fill: "#3CFF77"
                        }}
                    />
                    <Brush dataKey="day" height={30} stroke="hsl(var(--color-primary))" fill="hsl(var(--color-foreground-200))"/>
                </BarChart>
            </ResponsiveContainer >
        </CustomBarChartWrapper>
    )
}