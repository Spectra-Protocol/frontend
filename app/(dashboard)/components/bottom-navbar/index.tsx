'use client';

import { Button, Chip } from "@nextui-org/react";
import clsx from "clsx";
import { Saturn02Icon, KeyboardIcon, Notification01Icon, Wallet01Icon, DashboardCircleIcon, icons, CursorInfo02Icon } from "hugeicons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { PropsWithChildren } from "react";
import Wallet from "./Wallet";
import { motion } from "framer-motion";
import ThemeSwitch from "@/components/theme-switch";
import dynamic from "next/dynamic";
import Tips from "./Tips";
import Menu from "./Menu";

const navItems = [
    {
        label: "Wallet",
        component: <Wallet />,
        icon: <Wallet01Icon size={20} filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))" />,
    },
    {
        label: "App",
        component: <Menu />,
        icon: <DashboardCircleIcon size={20} filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))" />,
    },
    {
        label: "Tips",
        component: <Tips />,
        icon: <CursorInfo02Icon size={20} filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))" />,

    }

];

interface BottomNavbarProps extends React.HTMLAttributes<HTMLElement> {
}

function BottomNavbarWrapper({ children, className }: PropsWithChildren<BottomNavbarProps>) {
    return (
        <div className={clsx(
            "fixed bottom-0 left-0 right-0 z-50 h-fit w-[100vw] mx-auto",
            className
        )}>
            {children}
        </div>
    )
}

export default function BottomNavbar({ className, ...props }: BottomNavbarProps) {
    const pathname = usePathname();
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [currentComponent, setCurrentComponent] = React.useState<React.ReactNode | null>(null);
    const [selectedItem, setSelectedItem] = React.useState(navItems[0]);

    const navRef = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event: any) => {
            // @ts-ignore
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navRef]);

    return (
        <BottomNavbarWrapper className={clsx(
            className
        )}
        >
            <motion.div
                ref={navRef}
                initial={{
                    width: "fit-content",
                    height: "fit-content",
                    borderRadius: "16px",
                }}
                animate={{
                    height: isExpanded ? "auto" : "fit-content",
                    padding: isExpanded ? "16px" : "16px",
                    paddingTop: isExpanded ? "16px" : "8px",
                    paddingBottom: isExpanded ? "16px" : "8px",
                    borderRadius: isExpanded ? "24px" : "16px",

                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={clsx(
                    "my-auto mx-auto mb-6 z-50",
                    "flex flex-col items-center justify-end gap-4",
                    "bg-foreground-300/75 backdrop-blur-lg",
                )}
            >

                {isExpanded && currentComponent}
                <nav className={clsx(
                    "w-full flex justify-between items-center h-fit gap-2",
                )}>
                    {
                        navItems.map((item) => (
                            <Button
                                variant="light"
                                key={item.label}
                                radius="md"
                                size="md"
                                className={clsx(
                                    "flex flex-row items-center gap-1 font-normal min-w-fit",
                                    selectedItem.label === item.label ?
                                        "text-foreground-50 bg-foreground-800 font-medium data-[hover=true]:bg-foreground-800 data-[hover=true]:text-foreground-50"
                                        :
                                        "text-default-500 data-[hover=true]:text-foreground-700",
                                )}
                                startContent={item.icon}
                                onClick={() => {
                                    if (item.component) {
                                        setCurrentComponent(item.component);
                                        setIsExpanded(true);
                                        setSelectedItem(item);
                                    }

                                }}
                            >
                                <span className={clsx(
                                    "hidden sm:block",
                                )}>
                                    {item.label}
                                </span>
                            </Button>
                        ))
                    }
                    <ThemeSwitch
                        className="bg-transparent text-default-500"
                    />
                </nav>
            </motion.div>
        </BottomNavbarWrapper>
    )
}
