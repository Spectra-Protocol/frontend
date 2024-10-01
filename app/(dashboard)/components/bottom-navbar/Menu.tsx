import { Listbox, ListboxItem } from "@nextui-org/react";
import clsx from "clsx";
import { DashboardCircleIcon, KeyboardIcon, Cards01Icon } from "hugeicons-react";
import { usePathname } from "next/navigation";

export default function Menu() {
    const pathname = usePathname();
    
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
        }
    ];

    return (
        <div className="w-full flex flex-col gap-2">
            <Listbox className="h-full w-full" aria-label="Navigation">
                {
                    navItems.map((item) => (
                        <ListboxItem
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "rounded-[8px] text-sm text-default-500 hover:bg-foreground-100 data-[hover=true]:bg-foreground-100 data-[hover=true]:text-foreground-900 data-[hover=true]:font-bold",
                                pathname.startsWith(item.href) && "bg-foreground-900"
                            )}
                            classNames={{
                                title: clsx(
                                    pathname.startsWith(item.href) && "text-foreground-100 font-semibold"
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
        </div>
    )
}