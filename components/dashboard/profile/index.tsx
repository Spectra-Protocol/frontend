'use client';

import {Chip, User } from "@nextui-org/react";

import { Copy02Icon, LockedIcon } from "hugeicons-react";
import { Tag } from "../tag/type";
import TagCard from "../tag";
import clsx from "clsx";

interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {
    name?: string | React.ReactNode;
    address?: string;
    avatar?: string | React.ReactNode;
    tags?: Tag[];
    classNames?: {
        wrapper?: string;
        header?: string;
        main?: string;
    };
}

export const Profile: React.FC<ProfileProps> = (props) => {
    const { name, avatar, address, tags } = props;

    return (
        <div className={clsx(
            "w-full flex flex-row items-center gap-4",
            props.classNames?.wrapper
        )}>
            <User
                name={
                    <h1 className="w-full text-2xl font-semibold text-foreground capitalize">{name}</h1>
                }
                description={
                    <div className="flex flex-row gap-2 flex-wrap items-center">
                        <Chip
                            radius="sm"
                            className="bg-foreground-50 text-foreground-500 font-medium shadow-sm"
                            endContent={<Copy02Icon size={16} />}
                        >
                            {address?.slice(0, 5) || "-"}
                        </Chip>
                        {tags && tags.map((tag) => (
                            <TagCard tag={tag} key={tag}/>
                        ))}
                    </div>
                }
                avatarProps={{
                    src: avatar as string,
                    size: "lg",
                    className: "rounded-[12px] shadow"
                }}
            />
            {props.children}
        </div>
    )
}