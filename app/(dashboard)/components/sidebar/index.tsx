'use client';

import { Input } from "@nextui-org/input";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import dynamic from "next/dynamic";
import clsx from "clsx";
import ThemeSwitch from "@/components/theme-switch";
import { usePathname } from "next/navigation";
import { Cards01Icon, CursorInfo02Icon, DashboardCircleIcon, KeyboardIcon, UserCircleIcon } from "hugeicons-react";
import Tips from "./Tips";

const ProfileAccordition = dynamic(() => import("./ProfileAccordition"));
const CopyRight = dynamic(() => import("./Copyright"));

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
}
const navItems = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: <DashboardCircleIcon size={16} />,
    },
    {
        label: "Projects",
        href: "/projects",
        icon: <KeyboardIcon size={16} />,
    },
    {
        label: "Collections",
        href: "/collections",
        icon: <Cards01Icon size={16} />,
    },
    {
        label: "Profile",
        href: "/profile",
        icon: <UserCircleIcon size={16} />,
    }
];

export default function Sidebar({ className, ...props }: SidebarProps) {
    const pathname = usePathname();

    return (
        <aside className={clsx(
            "relative flex h-full max-w-64 flex-1 flex-col gap-6 items-center",
            "ftransition-transform -translate-x-full sm:translate-x-0",
            className

        )}
            aria-label="Sidebar"
        >
            <div className="w-full h-fit">
                <ProfileAccordition />
            </div>
            <div className="flex flex-row items-center justify-end w-full gap-4">
                <Tips />
                <ThemeSwitch />
            </div>
            <Listbox className="h-full w-full" aria-label="Navigation">
                {
                    navItems.map((item) => (
                        <ListboxItem
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "rounded-[8px] text-sm text-default-500 hover:bg-foreground-100 data-[hover=true]:bg-foreground-100 data-[hover=true]:text-foreground-900 data-[hover=true]:font-bold",
                                pathname.startsWith(item.href) && "bg-foreground-100 shadow-sm"
                            )}
                            classNames={{
                                title: clsx(
                                    pathname.startsWith(item.href) && "text-foreground-900 font-semibold"
                                ),
                                base: "px-3 py-2"
                            }}
                            startContent={item.icon}
                        >
                            {item.label}
                        </ListboxItem>
                    ))
                }
            </Listbox>
            <div className="h-fit w-full">
                <CopyRight />
            </div>
        </aside>
    )
}