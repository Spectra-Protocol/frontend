'use client';

import { Chip } from "@nextui-org/react";
import { KeyboardIcon, Notification01Icon, Saturn02Icon } from "hugeicons-react";

export const navItems = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: <Saturn02Icon size={20} />,
    },
    {
        label: "Interface",
        href: "/interface",
        icon: <KeyboardIcon size={20} />,
    },
    {
        label: "Notifications",
        href: "/notifications",
        icon: <Notification01Icon size={20} />,
        endContent: <Chip color="secondary" radius="full" size="sm">+ 3</Chip>,
    }
];