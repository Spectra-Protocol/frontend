'use client';

import { Input } from "@nextui-org/input";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import { Favicon } from "@/components/icons";
import { usePathname } from "next/navigation";
import { Chip } from "@nextui-org/react";
import { Saturn02Icon, KeyboardIcon, Notification01Icon } from "hugeicons-react";

const DynamicProfileAccordition = dynamic(() => import("./ProfileAccordition"));
const DynamicExtraCard = dynamic(() => import("./ExtraCard"));
const DynamicCopyRight = dynamic(() => import("./Copyright"));

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
}
const navItems = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: <Saturn02Icon size={16} />,
    },
    {
        label: "Interface",
        href: "/interface",
        icon: <KeyboardIcon size={16} />,
    },
    {
        label: "Notifications",
        href: "/notifications",
        icon: <Notification01Icon size={16} />,
        endContent: <Chip color="secondary" radius="full" size="sm">+ 3</Chip>,
    }
];

export default function Sidebar({ className, ...props }: SidebarProps) {

    const pathname = usePathname();

    const Search = () => {
        return (
            <Input placeholder="Search..." fullWidth />
        )
    };
    return (
        <aside className={clsx(
            "relative flex h-full w-72 flex-1 flex-col p-6 gap-8 items-center max-w-64",
            "ftransition-transform -translate-x-full sm:translate-x-0",
            className

        )}
            aria-label="Sidebar"
        >
            <div className="flex items-center justify-between px-2 w-full">
                <Favicon size={24} />
                <h1 className="font-semibold text-foreground-900 w-full">Unexpected</h1>
            </div>
            <div className="w-full">
                <Search />
            </div>
            <Listbox className="h-full w-full">
                {
                    navItems.map((item) => (
                        <ListboxItem
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "px-4 py-3 text-sm rounded-large text-default-500 hover:bg-foreground-100 data-[hover=true]:bg-foreground-100 data-[hover=true]:text-foreground-900 data-[hover=true]:font-bold data-[hover=true]:border border-default/5",
                                pathname === item.href ? "bg-foreground-100 text-foreground-900 font-bold border border-default/5" : ""
                            )}
                            startContent={item.icon}
                            endContent={item.endContent}
                        >
                            {item.label}
                        </ListboxItem>
                    ))
                }
            </Listbox>
            <div className="h-full">
                <DynamicExtraCard />
            </div>
            <div className="flex flex-row gap-4 justify-between w-full h-fit items-center">
                <p className="text-sm text-default-500">Dark Mode</p>
                <ThemeSwitch />
            </div>
            <div className="w-full h-fit">
                <DynamicProfileAccordition />
            </div>
            <div className="h-fit">
                <DynamicCopyRight />
            </div>
        </aside>
    )
}