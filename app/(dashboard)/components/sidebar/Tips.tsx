import { ProfilerTagType } from "@/types";
import { Listbox, Popover, PopoverContent, PopoverTrigger, ListboxItem, Button } from "@nextui-org/react";
import { AiImageIcon, AnonymousIcon, BitcoinGraphIcon, Building06Icon, Cards01Icon, CursorInfo02Icon } from "hugeicons-react";
import dynamic from "next/dynamic";
import { GiWhaleTail } from "react-icons/gi";

function Tips() {
    const tags = [
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
    ]
    return (
        <Popover>
            <PopoverTrigger>
                <Button
                    size="sm"
                    className="bg-foreground-100 text-foreground-900 shadow-sm"
                    isIconOnly
                >
                    <CursorInfo02Icon size={16} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-foreground-100">
                <Listbox>
                    {tags.map((tag) => (
                        <ListboxItem key={tag.tag} startContent={tag.icon}>
                            {tag.tag}
                        </ListboxItem>
                    ))}
                </Listbox>
            </PopoverContent>
        </Popover>
    );
}
export default dynamic(() => Promise.resolve(Tips), { ssr: false });