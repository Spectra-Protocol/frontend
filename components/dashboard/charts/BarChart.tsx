'use client';

import clsx from 'clsx';
import React from 'react';

interface CustomBarChartHeaderProps {
    title?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    icon?: React.ReactNode;
    description?: string | React.ReactNode;
}
export const CustomBarChartHeader: React.FC<CustomBarChartHeaderProps> = (props) => {
    return (
        <div className="flex flex-col gap-2 w-full items-start">
            <div className="flex flex-row gap-2">
                {props.icon}
                <div className='flex flex-col'>
                    <h1 className="text-lg font-semibold text-foreground-900">{props.title}</h1>
                    <p className="text-sm text-foreground-500">{props.subtitle}</p>
                </div>
            </div>
        </div>
    )
}

interface CustomBarChartWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const CustomBarChartWrapper: React.FC<CustomBarChartWrapperProps> = (props) => {
    return (
        <div {...props} className={clsx(
            "bg-foreground-50 rounded-[24px] shadow-lg p-8 space-y-8",
            props.className
        )}>
            {props.children}
        </div>
    )
}
