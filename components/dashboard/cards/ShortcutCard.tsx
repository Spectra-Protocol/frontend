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
            <div className="w-14 h-14 rounded-md bg-foreground-200"></div>
            <div className="w-36 h-4 bg-foreground-200 rounded-md"></div>
        </div>
    )
}
export default function ShortcutCard(props: ShortcutCardProps) {
    const { view } = useViewSwitch();
    const [color, setColor] = React.useState<string | null>(null);

    React.useEffect(() => {
        getPopularColor(props.avatar as string)
            .then((color) => {
                // decrease the opacity of the color
                color = color.replace("rgb", "rgba").replace(")", ", 0.5)");
                setColor(color);
            }, (error) => {
                console.error("Failed to get popular color", error);
            })
    }, [props.avatar])

    return (
        <div
            className={clsx(
                "w-full h-fit p-3 rounded-[14px] flex flex-row gap-4 items-center cursor-pointer",
                "hover:scale-[1.02] transition-transform duration-300 ease-in-out",
                view === "grid" && "bg-foreground-100 shadow",
            )}
            role="a"
            {...props}
        >
            <User
                name={props.name}
                description={
                    <TagCard
                        tag={props.tag as ProfilerTagType}
                    />
                }
                classNames={{
                    name: "truncate"
                }}
                avatarProps={{
                    src: props.avatar,
                    style: {
                        boxShadow: `0 0 16px -2px ${color}`,
                    },
                    size: "lg",
                    radius: "md",
                }}
            />

        </div>
    )
}