'use client';

import { Avatar, Chip, Image } from "@nextui-org/react";

import { Copy02Icon, LockedIcon } from "hugeicons-react";
import { Tag } from "../tag/type";
import TagCard from "../tag";

interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {
    name?: string | React.ReactNode;
    address?: string;
    avatar?: string | React.ReactNode;
    tags?: Tag[];
}

export const Profile: React.FC<ProfileProps> = (props) => {
    const { name, avatar, address, tags } = props;

    return (
        <div className="w-full flex flex-row items-center gap-4">
            <div className="h-full aspect-square max-h-16">N
                {typeof avatar === "string" ? (
                    <Avatar
                        src={avatar}
                        alt={name as string}
                        color="primary"
                        className="rounded-[12px] md:rounded-[16px] w-full h-full object-cover shadow"
                        showFallback
                    />
                ) : (
                    avatar
                )}
            </div>

            <div className="w-full h-fit flex flex-col gap-2 justify-between">
                <h1 className="w-full text-2xl font-semibold text-foreground">{name}</h1>
                <div className="flex flex-row gap-2 flex-wrap items-center">
                    <Chip
                        radius="sm"
                        className="bg-foreground-50 text-foreground-500 font-medium shadow-sm"
                        endContent={<Copy02Icon size={16} />}
                    >
                        {address?.slice(0, 5) || "-"}
                    </Chip>
                    {tags && tags.map((tag) => (
                        <TagCard tag={tag} />
                    ))}
                </div>
            </div>
        </div>
    )
}