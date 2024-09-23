import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Providers } from "./providers";

const Sidebar = dynamic(() => import("./components/sidebar/sidebar"), { ssr: false });
const BottomNavbar = dynamic(() => import("./components/bottom-navbar/bottom-navbar"), { ssr: false });
const TopNavbar = dynamic(() => import("./components/top-navbar/top-navbar"), { ssr: false });

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
            <div className="max-h-screen w-screen h-screen flex flex-col md:flex-row p-4 overflow-hidden">
                <div className="md:hidden overflow-visible z-10">
                    <BottomNavbar />
                    {/* <TopNavbar /> */}
                </div>
                <Sidebar className="hidden md:flex" />
                <main className="flex-1 w-full overflow-y-scroll">{children}</main>
            </div>
        </Providers>
    );
}