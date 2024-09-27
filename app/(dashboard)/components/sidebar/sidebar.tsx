'use client';

import { Input } from "@nextui-org/input";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import dynamic from "next/dynamic";
import clsx from "clsx";
import ThemeSwitch from "@/components/theme-switch";
import { Favicon } from "@/components/icons";
import { usePathname } from "next/navigation";
import { DashboardCircleIcon } from "hugeicons-react";
import { APP_VERSION } from "@/config";

const ProfileAccordition = dynamic(() => import("./ProfileAccordition"));
const ExtraCard = dynamic(() => import("./ExtraCard"));
const CopyRight = dynamic(() => import("./Copyright"));

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
}
const navItems = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: <DashboardCircleIcon size={16} />,
    },
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
            <div className="flex flex-row items-center rrpx-2 gap-4 w-full">
                <Favicon size={32} />
                <div className="flex flex-col gap-0">
                    <h1 className="font-semibold text-2xl text-foreground-900 w-full">Spectra</h1>
                    <p className="text-xs text-foreground-500">•Version {APP_VERSION}</p>
                </div>
            </div>
            <div className="w-full">
                <Search />
            </div>
            <Listbox className="h-full w-full" aria-label="Navigation">
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
                        >
                            {item.label}
                        </ListboxItem>
                    ))
                }
            </Listbox>
            <div className="h-full">
                <ExtraCard />
            </div>
            <div className="flex flex-row gap-4 justify-between w-full h-fit items-center">
                <p className="text-sm text-default-500">Dark Mode</p>
                <ThemeSwitch />
            </div>
            <div className="w-full h-fit">
                <ProfileAccordition />
            </div>
            <div className="h-fit">
                <CopyRight />
            </div>
        </aside>
    )
}