import { getPopularColor } from "@/lib";
import { User } from "@nextui-org/react";
import React from "react";
import TagCard from "../tag";
import { ProfilerTagType } from "@/types";
import clsx from "clsx";

interface ShortcutCardProps extends React.HTMLAttributes<HTMLElement> {
    name?: React.ReactNode;
    description?: React.ReactNode;
    avatar?: string;
    tag?: ProfilerTagType;
}
export default function ShortcutCard(props: ShortcutCardProps) {
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
        <div className={clsx(
            "w-fit h-fit p-3 rounded-[14px] bg-foreground-100 flex flex-row gap-4 items-center cursor-pointer",
            "hover:scale-[1.02] transition-transform duration-300 ease-in-out",
        )}>
            <User
                name={props.name}
                description={props.description}
                avatarProps={{
                    src: props.avatar,
                    style: {
                        boxShadow: `0 0 16px -2px ${color}`,
                    },
                    size: "lg",
                    radius: "md",
                }}
            />
            <TagCard
                tag={props.tag as ProfilerTagType}
            />
        </div>
    )
}