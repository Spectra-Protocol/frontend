import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import React from "react";

import { dashboardData } from "@/config";
import { usePathname } from "next/navigation";

const paths = dashboardData.paths;

export default function CustomBreadcrumbs() {
    const [currentPath, setCurrentPath] = React.useState<React.Key>("");
    const pathname = usePathname();
    const pathNames = pathname.split('/').filter(path => path)

    return (
        <Breadcrumbs
            aria-label="Breadcrumb"
            separator="/"
            underline="active"
            onAction={(key) => setCurrentPath(key)}
            classNames={{
                list: "font-medium"
            }}
            maxItems={3}
            itemsBeforeCollapse={1}
            itemsAfterCollapse={2}
        >
            {/* {
                pathname.split("/").map((key, index) => {
                    const path = paths[key];
                    if (path) {
                        return (
                            <BreadcrumbItem key={key} isCurrent={currentPath === key} href={path.href}>
                                {path.icon}
                                {path.label}
                            </BreadcrumbItem>
                        )
                    }

                    return <BreadcrumbItem key={key} isCurrent={currentPath === key} className="truncate max-w-[16ch]">{key}</BreadcrumbItem>
                })
            } */}
            {
                pathNames.map((key, index) => {
                    const path = paths[key];

                    if (path) {
                        return (
                            <BreadcrumbItem key={key} isCurrent={currentPath === key} href={path.href}>
                                {path.icon}
                                <span className="capitalize">{path.label}</span>
                            </BreadcrumbItem>
                        )
                    }

                    return <BreadcrumbItem key={key} isCurrent={currentPath === key} >
                        <p className="truncate max-w-[20ch]">{key}</p>
                    </BreadcrumbItem>
                })
            }
        </Breadcrumbs>
    );
}