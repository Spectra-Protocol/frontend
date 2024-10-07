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
    const [currentPath, setCurrentPath] = React.useState<React.Key>("");
    const paths = dashboardData.paths;

    return (
        <header
            className={twMerge(
                "w-full flex flex-row items-center justify-between gap-4",
                className
            )}
            {...props}
        >
            <CustomBreadcrumbs />
            <SearchEngine />
            <LinearContainer direction="row" space="sm" className="w-fit">
                <ViewSwitch />
                <Clock />
            </LinearContainer>
        </header>
    )
}