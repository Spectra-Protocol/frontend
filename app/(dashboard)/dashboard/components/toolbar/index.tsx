"use client";

import { TabsProps } from "@nextui-org/react";
import TabsEngine from "./tabs";
import SearchEngine from "./search";
import ViewSwitch from "@/components/dashboard/view-switch";

interface ToolbarProps extends React.HTMLAttributes<HTMLElement> {
    tabsProps?: TabsProps;
} 

export default function Toolbar(props: ToolbarProps) {
    return (
       <div className='w-full h-fit flex flex-row items-start justify-between gap-4'>
            <SearchEngine />
            <ViewSwitch />
       </div>
    )
}