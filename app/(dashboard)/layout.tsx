import { siteConfig } from "@/config/site";
import { Metadata } from "next";

import { Providers } from "./providers";
import BottomNavbar from "./components/bottom-navbar";
import Sidebar from "./components/sidebar";
import TopNavbar from "./components/top-navbar";
import { LinearContainer } from "@/components/ui/container";


interface LayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Dashboard",
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export default function DashboardLayout({ children }: LayoutProps) {
    return (
        <Providers>
            <LinearContainer className="w-screen h-screen flex flex-col lg:grid lg:grid-cols-[min-content_auto] p-4 lg:overflow-hidden" space="lg">
                <Sidebar className="hidden lg:flex lg:col-start-1" />
                <BottomNavbar className="md:hidden overflow-visible z-10" />
                <LinearContainer direction="column" className="w-full lg:col-start-2 h-full overflow-auto">
                    <TopNavbar />
                    <main className="flex-1 w-full h-full pb-32 lg:py-4 overflow-y-auto">{children}</main>
                </LinearContainer>
            </LinearContainer>
        </Providers>
    );
}