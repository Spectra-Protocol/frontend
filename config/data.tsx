import { DashboardCircleIcon, KeyboardIcon, Cards01Icon, UserCircleIcon } from "hugeicons-react";

type DashboardData = {
    paths: {
        [key: string]: {
            label: string;
            href: string;
            icon: JSX.Element;
        }
    }
}
export const dashboardData: DashboardData = {
    paths: {
        dashboard: {
            label: "Dashboard",
            href: "/dashboard",
            icon: <DashboardCircleIcon size={16} />,
        },
        projects: {
            label: "Projects",
            href: "/projects",
            icon: <KeyboardIcon size={16} />,
        },
        collections: {
            label: "Collections",
            href: "/collections",
            icon: <Cards01Icon size={16} />,
        },
        profile: {
            label: "Profile",
            href: "/profile",
            icon: <UserCircleIcon size={16} />,
        }
    }
}