'use client';

import { Chip } from "@nextui-org/react";
import { Tag } from "./type";
import { AnonymousIcon, Building06Icon, GroupLayersIcon } from "hugeicons-react";
import { GiWhaleTail } from "react-icons/gi";


import { ProfilerTagType } from "@/types";

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
                icon: <GroupLayersIcon size={16} color="#312107" />
            };
        case ProfilerTagType.Whale.toString():
            return {
                color: "#0A0A0A",
                backgroundColor: "#0C7DFF",
                icon: <GiWhaleTail color="0057BC" size={16} />
            };
        case ProfilerTagType.Fund.toString():
            return {
                color: "#0E793C",
                backgroundColor: "#17C964",
                icon: <Building06Icon color="18974F" size={16} />
            };
        case ProfilerTagType.Anonymous.toString():
            return {
                color: "#F4F4F5",
                backgroundColor: "#18181B",
                icon: <AnonymousIcon color="A4A4A4" size={16} />
            };
        default:
            return null;
    }
}
export default function TagCard({ tag }: { tag: Tag }) {
    const tagStyle = getTagStyle(tag);

    return (
        <Chip
            radius="sm"
            className="shadow-sm font-medium"
            style={{
                color: tagStyle?.color,
                backgroundColor: tagStyle?.backgroundColor
            }}
            startContent={tagStyle?.icon}
        >
            {tag}
        </Chip>
    );
}