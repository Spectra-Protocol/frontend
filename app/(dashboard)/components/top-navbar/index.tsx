"use client";

import React from "react";

import { dashboardData } from "@/config";
import { twMerge } from "tailwind-merge";
import SearchEngine from "@/components/dashboard/search";
import ViewSwitch from "@/components/dashboard/view-switch";
import { Clock } from "@/components/dashboard/clock";
import { LinearContainer } from "@/components/ui/container";
import CustomBreadcrumbs from "./breadcrumbs";

interface TopNavbarProps extends React.HTMLAttributes<HTMLElement> {
}
export default function TopNavbar({ className, ...props }: TopNavbarProps) {

    return (
        <header
            className={twMerge(
                "w-full flex flex-col items-start lg:flex-row lg:items-center justify-between gap-4",
                className
            )}
            {...props}
        >
            <CustomBreadcrumbs />
            <SearchEngine />
            <LinearContainer direction="row" space="sm" className="w-fill justify-between lg:justify-end lg:w-fit">
                <ViewSwitch />
                <Clock />
            </LinearContainer>
        </header>
    )
}