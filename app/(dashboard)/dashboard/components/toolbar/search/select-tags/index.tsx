"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { tags } from "./data";

interface SelectTagsProps extends React.HTMLAttributes<HTMLElement> {   
}
export default function SelectTags(props: SelectTagsProps) {
    
    return (
        <Select
            color="primary"
            label="Tags"
            classNames={{
                trigger: "bg-primary text-primary-forground",
                mainWrapper: "text-primary-forground",
            }}
        >
            {tags.map((tag) => (
                <SelectItem key={tag.key} value={tag.key}>
                    {tag.title}
                </SelectItem>
            ))}
        </Select>
    )
}