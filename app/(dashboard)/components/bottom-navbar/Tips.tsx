import { ProfilerTagType } from "@/types";
import { Listbox, Popover, PopoverContent, PopoverTrigger, ListboxItem, Button } from "@nextui-org/react";
import { AiImageIcon, AnonymousIcon, BitcoinGraphIcon, Building06Icon, Cards01Icon, CursorInfo02Icon } from "hugeicons-react";
import dynamic from "next/dynamic";
import React from "react";
import { GiWhaleTail } from "react-icons/gi";

function Tips() {
    const tags = React.useMemo(() => [
        {
            tag: ProfilerTagType.Anonymous,
            icon: <AnonymousIcon color="#A4A4A4" size={16} />
        },
        {
            tag: ProfilerTagType.Fund,
            icon: <Building06Icon color="#18974F" size={16} />
        },
        {
            tag: ProfilerTagType.Whale,
            icon: <GiWhaleTail color="#0057BC" size={16} />
        },
        {
            tag: ProfilerTagType.Dex,
            icon: <BitcoinGraphIcon color="#F5A524" size={16} />
        },
        {
            tag: ProfilerTagType.NFT,
            icon: <AiImageIcon color="#F5A524" size={16} />
        },
        {
            tag: ProfilerTagType.Collection,
            icon: <Cards01Icon color="#87E91D" size={16} />
        }
    ], []);

    return (
        <Listbox className="w-full">
            {tags.map((tag) => (
                <ListboxItem key={tag.tag} startContent={tag.icon}>
                    {tag.tag}
                </ListboxItem>
            ))}
        </Listbox>
    );
}
export default dynamic(() => Promise.resolve(Tips), { ssr: false });