"use client";

import { Tabs, Tab, TabsProps, Button } from "@nextui-org/react";
import React from "react";
import { GridViewIcon, Menu05Icon } from "hugeicons-react";
import clsx from "clsx";
type ViewType = "grid" | "list";

export const ViewSwitchContext = React.createContext<{
    view: ViewType;
    setView: (view: ViewType) => void;
}>({
    view: "grid",
    setView: () => { },
});
export const useViewSwitch = () => React.useContext(ViewSwitchContext);
export const ViewSwitchProvider = ({ children }: { children: React.ReactNode }) => {
    const [view, setView] = React.useState<ViewType>("grid");

    return (
        <ViewSwitchContext.Provider value={{ view, setView }}>
            {children}
        </ViewSwitchContext.Provider>
    );
}

interface ViewSwitchProps extends TabsProps {
}
export default function ViewSwitch({ ...props }: ViewSwitchProps) {
    const { setView } = useViewSwitch();

    return (
        <Tabs
            classNames={{
                tab: clsx(
                    "w-fit h-fit",
                ),
                tabContent: "group-data-[selected=true]:text-foreground-800",
                cursor: "bg-foreground-100",
                tabList: "shadow-sm bg-foreground-200"
            }}
            {...props}
            onSelectionChange={(view) => {
                setView(view as ViewType);
            }}
        >
            <Tab
                key={"grid" as ViewType}
                title={
                    <GridViewIcon size={16}/>
                }
            />
            <Tab
                key={"list" as ViewType}
                title={
                    <Menu05Icon size={16}/>
                }
            />
        </Tabs>
    );
}
