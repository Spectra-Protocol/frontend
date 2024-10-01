'use client';

import { Chip } from "@nextui-org/react";
import { Tag } from "./type";
import { AiImageIcon, AnonymousIcon, BitcoinGraphIcon, Building06Icon, Cards01Icon } from "hugeicons-react";
import { GiWhaleTail } from "react-icons/gi";


import { ProfilerTagType } from "@/types";
import clsx from "clsx";

type TagStyle = {
    color: string;
    backgroundColor: string;
    icon: React.ReactNode;
}
const getTagStyle = (tag: Tag): TagStyle | null => {
    switch (tag) {
        case "dex-aggregator":
            return {
                color: "#936316",
                backgroundColor: "#F5A524",
                icon: <BitcoinGraphIcon size={16} color="#F5A524" filter="drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1))" />
            };
        case ProfilerTagType.Whale.toString():
            return {
                color: "#0A0A0A",
                backgroundColor: "#0C7DFF",
                icon: <GiWhaleTail color="#0057BC" size={16} />
            };
        case ProfilerTagType.Fund.toString():
            return {
                color: "#0E793C",
                backgroundColor: "#17C964",
                icon: <Building06Icon color="#18974F" size={16} />
            };
        case ProfilerTagType.Anonymous.toString():
            return {
                color: "#F4F4F5",
                backgroundColor: "#18181B",
                icon: <AnonymousIcon color="#A4A4A4" size={16} />
            };
        case ProfilerTagType.Dex.toString():
            return {
                color: "#F4F4F5",
                backgroundColor: "#18181B",
                icon: <BitcoinGraphIcon color="#F5A524" size={16} />
            };
        case ProfilerTagType.NFT.toString():
            return {
                color: "#F4F4F5",
                backgroundColor: "#18181B",
                icon: <AiImageIcon color="#F5A524" size={16} />
            };
        case ProfilerTagType.Collection.toString():
            return {
                color: "#F4F4F5",
                backgroundColor: "#18181B",
                icon: <Cards01Icon color="#87E91D" size={16} />
            };
        default:
            return null;
    }
}
interface TagCardProps extends React.HTMLAttributes<HTMLDivElement> {
    tag: Tag;
}
export default function TagCard({ tag }: TagCardProps) {
    const tagStyle = getTagStyle(tag);

    return (
        <Chip
            key={tag}
            radius="sm"
            className={clsx(
                "capitalize",
                "shadow-[inset_0px_-2px_1px_0px_rgba(0,0,0,0.1),0px_2px_2px_0px_rgba(0,0,0,0.1)]",
                "bg-foreground-100 text-foreground-800",
                "p-2 h-fit rounded-xl"
            )}
            classNames={{
                content: "font-medium text-xs   "
            }}
            startContent={tagStyle?.icon}
        >
            {tag}
        </Chip>
    );
}