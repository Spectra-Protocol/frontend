"use client";

import { format } from "date-fns";
import { MetricCard } from "@/app/(dashboard)/(project)/projects/dex/[name]/components/key-metric-area/components/ui/metric-card";
import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { useCollection } from "../../context";
import React from "react";
import { Blockchain01Icon, Calendar03Icon } from "hugeicons-react";

export default function DetailsArea() {
    const collection = useCollection();
    const [seeMore, setSeeMore] = React.useState(false);

    const handleSeeMoreToggle = () => {
        setSeeMore(!seeMore);
    };

    const maxDescriptionLength = 30;
    const description = collection.description || "";
    const isLongDescription = description.length > maxDescriptionLength;
    const displayedDescription = seeMore ? description : `${description.substring(0, maxDescriptionLength)}...`;
    const extraItems = [
        {
            title: "Chain",
            value: collection.chain,
            icon: <Blockchain01Icon size={16} className="text-foreground-300" />,
        },
        {
            title: "Created At",
            value: collection.created_at ? format(new Date(collection.created_at), "MMM, yyyy") : "-",
            icon: <Calendar03Icon size={16} className="text-foreground-300" />,
        },
    ]
    return (
        <Area>
            <AreaHeader title="Details" />
            <AreaMain>
                <MetricCard
                    title="Description"
                    classNames={{
                        wrapper: "p-6 rounded-3xl bg-foreground-100 w-full"
                    }}
                >
                    <p className="text-foreground-900 text-base">
                        {displayedDescription}
                        {isLongDescription && (
                            <span
                                role="button"
                                tabIndex={0}
                                onClick={handleSeeMoreToggle}
                                className="text-primary cursor-pointer ml-2"
                            >
                                {seeMore ? "See less" : "See more"}
                            </span>
                        )}
                    </p>
                    <div className="flex flex-row gap-4">
                        {extraItems.map((item, index) => (
                            <div className="flex flex-row gap-2 items-center" key={index}>
                                {item.icon}
                                <div className="flex flex-row gap-1 items-center">
                                    <p className="text-sm text-foreground-500">{item.title}</p>
                                    <p className="text-sm text-foreground-500 font-semibold">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </MetricCard>
            </AreaMain>
        </Area>
    );
}