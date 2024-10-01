import { siteConfig } from "@/config/site";
import { Metadata } from "next";

import { Providers } from "./providers";
import BottomNavbar from "./components/bottom-navbar";
import Sidebar from "./components/sidebar";


interface LayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: {
        default: 'Dashboard',
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export default function DashboardLayout({ children }: LayoutProps) {
    return (
        <Providers>
            <div className="max-h-screen w-screen h-screen flex flex-col md:flex-row p-4 gap-6 lg:overflow-hidden">
                <Sidebar className="hidden md:flex" />
                <main className="flex-1 w-full pb-32 lg:py-4">{children}</main>
                <div className="md:hidden overflow-visible z-10">
                    <BottomNavbar />
                </div>
            </div>
        </Providers>
    );
}