import { TabItemProps } from "@nextui-org/react";
import { Cards01Icon, KeyboardIcon } from "hugeicons-react";
import dynamic from "next/dynamic";
import React from "react";
const CollectionsContainer = dynamic(() => import("../area/collections"));

export const items = [
    {
        key: "all",
        title: "All",
        component: <div>All</div>,
    },
    {
        key: "projects",
        title: "Projects",
        icon: <KeyboardIcon size={16} />,
    },
    {
        key: "collections",
        title: "Collections",
        icon: <Cards01Icon size={16} />,
        component: <CollectionsContainer />,
    },
] satisfies (TabItemProps & { icon?: React.ReactNode, component?: React.ReactNode })[];