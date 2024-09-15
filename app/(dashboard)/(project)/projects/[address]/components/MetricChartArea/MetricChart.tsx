'use client';

import { CustomBarChartHeader, CustomBarChartWrapper } from "@/components/dashboard/charts";
import clsx from "clsx";
import { Bar, Legend, Tooltip, ResponsiveContainer, XAxis, YAxis, LegendProps, BarChart } from "recharts";

function RenderLegend(prop: LegendProps) {
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
                title="Sales"
                subtitle="Last 7 days"
                description="Total sales in the last 7 days"
            />
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    barGap={3}
                    barSize={16}
                    height={300}
                    data={[
                        { day: "Monday", value: 100 },
                        { day: "Tuesday", value: 200 },
                        { day: "Wednesday", value: 300 },
                        { day: "Thursday", value: 400 },
                        { day: "Friday", value: 500 },
                        { day: "Saturday", value: 600 },
                        { day: "Sunday", value: 700 },
                    ]}
                >
                    <XAxis dataKey="day"
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis dataKey={"value"}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        labelClassName="text-xs font-semibold text-foreground-500"
                        itemStyle={{
                            color: "hsl(var(--color-foreground-900))",
                        }}
                        wrapperClassName="!bg-foreground-100 !border-none rounded-[12px] !shadow p-2"
                        cursor={{
                            fill: "transparent",
                        }} />
                    <Legend
                        className="rounded-[12px] font-normal"
                        content={<RenderLegend />}
                    />
                    <Bar dataKey="value" fill="#9353D3" radius={4} />
                </BarChart>
            </ResponsiveContainer >
        </CustomBarChartWrapper>
    )
}