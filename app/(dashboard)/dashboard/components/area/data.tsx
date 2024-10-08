import { TabItemProps } from "@nextui-org/react";
import { Cards01Icon, KeyboardIcon } from "hugeicons-react";
import dynamic from "next/dynamic";
import React from "react";

const CollectionsContainer = dynamic(() => import("../area/collections"));
const ProjectsContainer = dynamic(() => import("../area/projects"));
const All = dynamic(() => import("../area/all"));

export const items = [
    {
        key: "all",
        title: "All",
        component: <All />,
    },
    {
        key: "projects",
        title: "Projects",
        icon: <KeyboardIcon size={16} />,
        component: <ProjectsContainer/>
    },
    {
        key: "collections",
        title: "Collections",
        icon: <Cards01Icon size={16} />,
        component: <CollectionsContainer />,
    },
] satisfies (TabItemProps & { icon?: React.ReactNode, component?: React.ReactNode })[];