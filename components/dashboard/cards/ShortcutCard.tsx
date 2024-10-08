"use client";

import { getPopularColor } from "@/lib";
import { User } from "@nextui-org/react";
import React from "react";
import TagCard from "../tag";
import { ProfilerTagType } from "@/types";
import clsx from "clsx";
import { useViewSwitch } from "../view-switch";

interface ShortcutCardProps extends React.HTMLAttributes<HTMLElement> {
    name?: React.ReactNode;
    description?: React.ReactNode;
    avatar?: string;
    tag?: ProfilerTagType;
}
interface SkeletonShortcutCardProps extends React.HTMLAttributes<HTMLElement> { }
export function SkeletonShortcutCard(props: SkeletonShortcutCardProps) {
    return (
        <div className="w-full h-fit p-3 rounded-[14px] bg-foreground-100 flex flex-row gap-4 items-center cursor-pointer animate-pulse shadow" {...props}>
            <div className="w-14 h-14 rounded-md bg-foreground-200" />
            <div className="flex flex-col gap-2 w-full">
                <div className="w-3/4 h-4 bg-foreground-200 rounded-md" />
                <div className="w-1/2 h-4 bg-foreground-200 rounded-md" />
            </div>
        </div>
    )
}
export default function ShortcutCard(props: ShortcutCardProps) {
    const { view } = useViewSwitch();

    return (
        <div
            className={clsx(
                "w-full h-fit p-3 rounded-[14px] flex flex-row gap-4 items-center cursor-pointer",
                "hover:scale-[1.02] transition-transform duration-300 ease-in-out",
                view === "grid" && "bg-foreground-100 shadow",
            )}
            role="button"
            {...props}
        >
            <User
                name={
                    <p className="truncate max-w-[20ch] font-medium">
                        {props.name}
                    </p>
                }
                description={
                    <TagCard
                        tag={props.tag as ProfilerTagType}
                    />
                }
                avatarProps={{
                    showFallback: true,
                    src: props.avatar,
                    className: "bg-transparent",
                    size: "lg",
                    radius: "md",
                }}
            />

        </div>
    )
}