'use client';

import { MetricCategory } from "@/types";
import { Tooltip } from "@nextui-org/react";
import clsx from "clsx"


interface MetricsWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
}
export const MetricsWrapper: React.FC<MetricsWrapperProps> = (props) => {
    return (
        <div {...props} className={clsx(
            "bg-foreground-50 rounded-[32px] shadow p-4 space-y-8 w-full overflow-x-scroll",
            props.className
        )}>
            {props.children}
        </div>
    )
}

interface MetricsTableProps extends React.HTMLAttributes<HTMLTableElement> {
    categories: MetricCategory[];
}
export const MetricsTable: React.FC<MetricsTableProps> = (props) => {
    const { categories, className } = props;

    return (
        <MetricsWrapper>
            <div
                className={clsx(
                    "min-w-full w-fit",
                    "sm:gap-4 p-4 border border-default/20 rounded-[24px]",
                    "flex flex-col sm:flex-row gap-4",
                    className
                )}
            >
                {categories &&
                    categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col w-full sm:w-fit md:w-full gap-2"
                        >
                            {category.metrics.map((metric, index) => (
                                <div
                                    key={metric.id}
                                    className={clsx(
                                        "flex flex-row justify-between min-w-fit w-full gap-4 p-1",
                                        index === category.metrics.length - 1
                                            ? ""
                                            : "border-b border-default/20 pb-2"
                                    )}
                                >
                                    <span className="text-base font-medium text-nowrap text-foreground-500 w-fit">
                                        {metric.name}
                                    </span>
                                    <span className="text-base font-medium text-foreground-900 cursor-pointer">
                                        <Tooltip
                                            content={metric.value}
                                            color="primary"
                                            placement="top"
                                        >
                                            {Number(metric.value).toFixed(2)}
                                        </Tooltip>
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </MetricsWrapper>
    )
}