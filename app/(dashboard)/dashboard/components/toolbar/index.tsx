"use client";

import { TabsProps } from "@nextui-org/react";
import TabsEngine from "./tabs";
import SearchEngine from "./search";

interface ToolbarProps extends React.HTMLAttributes<HTMLElement> {
    tabsProps?: TabsProps;
} 

export default function Toolbar(props: ToolbarProps) {
    return (
       <div className='w-full flex flex-col items-start gap-4 overflow-y-auto'>
            <SearchEngine />
            <TabsEngine />
       </div>
    )
}