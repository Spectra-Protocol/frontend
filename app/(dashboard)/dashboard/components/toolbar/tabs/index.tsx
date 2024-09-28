"use client";

import { Tab, Tabs, TabsProps } from "@nextui-org/react";
import { items } from "../../area/data";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";



interface ToolbarProps extends React.HTMLAttributes<HTMLElement> {
    tabsProps?: TabsProps;
}

type TabsKeys = "all" | "projects" | "collections";

export default function TabsEngine(props: ToolbarProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [tab, setTab] = React.useState<TabsKeys>(searchParams.get('tab') as TabsKeys || 'all');
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )
    return (
        <div className="w-full">
            <Tabs
                aria-label="Toolbar"
                variant="light"
                selectedKey={tab}
                classNames={{
                    cursor: "group-data-[selected=true]:bg-foreground-100 group-data-[selected=true]:text-foreground-900 border-none",
                    tabContent: "group-data-[selected=true]:text-foreground-900",
                    panel: "w-full",
                }}
                onSelectionChange={(key) => {
                    setTab(key as TabsKeys);
                    router.push(`?${createQueryString('tab', key as TabsKeys)}`)
                }}
            >
                {items.map((item) => (
                    <Tab
                        key={item.key}
                        title={
                            <span className="flex gap-2 items-center`">
                                {item.icon}
                                <p>
                                    {item.title}
                                </p>
                            </span>
                        }
                        
                    >
                        {item.component}
                    </Tab>
                ))}
            </Tabs >
        </div>

    )
}