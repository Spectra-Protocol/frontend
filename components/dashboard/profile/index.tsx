'use client';

import { Chip, User } from "@nextui-org/react";

import { Copy02Icon, LockedIcon } from "hugeicons-react";
import { Tag } from "../tag/type";
import TagCard from "../tag";
import clsx from "clsx";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {
    name?: string | React.ReactNode;
    description?: string | React.ReactNode;
    address?: string;
    avatar?: string | React.ReactNode;
    tags?: Tag[];
    showFallbackAvatar?: boolean;
    classNames?: {
        wrapper?: string;
        header?: string;
        main?: string;
        avatar?: string;
        title?: string;
    };
}

export const Profile: React.FC<ProfileProps> = (props) => {
    const { name, avatar, address, tags, description } = props;

    return (
        <div className={clsx(
            "w-full flex flex-row items-center gap-4",
            props.classNames?.wrapper
        )}>
            <User
                name={
                    <h1 className={clsx(
                        "w-full text-2xl font-semibold text-foreground capitalize",
                        props.classNames?.title
                    )}>{name}</h1>
                }
                description={
                    <div className="flex flex-row gap-2 flex-wrap items-center">
                        <Chip
                            radius="sm"
                            className={clsx(
                                "bg-foreground-100 text-foreground-500 font-medium shadow-sm",
                                "hover:scale-110 transition-transform cursor-pointer",
                                "hover:text-foreground-800"
                            )}
                            endContent={
                                <Copy02Icon
                                    size={16}
                                    onClick={() => {
                                        try {
                                            if (!address) return;
                                            copy(address);
                                            toast.success("Address copied to clipboard");
                                        } catch (error) {
                                            toast.error("Failed to copy address");
                                        }
                                    }}
                                />
                            }
                        >
                            {address?.slice(0, 5) || "-"}
                        </Chip>
                        {tags && tags.map((tag) => (
                            <TagCard tag={tag} key={tag} />
                        ))}
                    </div>
                }
                avatarProps={{
                    src: avatar as string,
                    size: "lg",
                    className: clsx(
                        "rounded-[12px] shadow",
                        props.classNames?.avatar
                    ),
                    showFallback: props.showFallbackAvatar,
                }}
            />
            {props.children}
        </div>
    )
}