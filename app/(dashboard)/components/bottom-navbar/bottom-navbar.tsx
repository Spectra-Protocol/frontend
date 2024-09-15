'use client';

import { Button, Chip } from "@nextui-org/react";
import clsx from "clsx";
import { Saturn02Icon, KeyboardIcon, Notification01Icon, Wallet01Icon } from "hugeicons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

const navItems = [
    {
        label: "Wallet",
        href: "/wallet",
        icon: <Wallet01Icon size={20} />,
    },
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

interface BottomNavbarProps extends React.HTMLAttributes<HTMLElement> {
}

function BottomNavbarWrapper({ children, className }: PropsWithChildren<BottomNavbarProps>) {
    return (
        <div className={clsx(
            "fixed bottom-0 left-0 right-0 z-50 h-fit w-[80vw] mx-auto",
            className
        )}>
            {children}
        </div>
    )
}

export default function BottomNavbar({ className, ...props }: BottomNavbarProps) {
    const pathname = usePathname();

    return (
        <BottomNavbarWrapper className={className}>
            <nav className={clsx(
                "flex justify-center bg-foreground-300 backdrop-blur-lg py-2 px-4 w-fit h-fit gap-2 rounded-[16px] mx-auto mb-6",
            )}>
                {
                    navItems.map((item) => (
                        <Button
                            as={Link}
                            variant="light"
                            key={item.href}
                            href={item.href}
                            radius="md"
                            size="md"
                            className={clsx(
                                "flex flex-row items-center gap-1 font-normal p-2 min-w-fit",
                                pathname === item.href ?
                                    "text-foreground-50 bg-foreground-800 font-medium data-[hover=true]:bg-foreground-800 data-[hover=true]:text-foreground-50"
                                    : "text-default-500 data-[hover=true]:text-foreground-700",
                            )}
                            startContent={item.icon}
                        >
                            <span className={clsx(
                                "hidden sm:block",
                                pathname === item.href && "!block",
                            )}>
                                {item.label}
                            </span>
                        </Button>
                    ))
                }
            </nav>
        </BottomNavbarWrapper>
    )
}
