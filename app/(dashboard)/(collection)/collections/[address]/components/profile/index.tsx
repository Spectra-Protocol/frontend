'use client';

import { DetailCard } from "@/components/dashboard";
import { Profile } from "@/components/dashboard/profile";
import numeral from "numeral";

import { useCollection } from "../../context";
import { title } from "process";
import { ChartLineData01Icon, icons, Profile02Icon, ShipmentTrackingIcon, UserIcon } from "hugeicons-react";
import React from "react";
import { getMetadata } from "@/lib";


export function LoadingProfileHeader() {
    return (
        <header className="w-full flex flex-col md:flex-row gap-6 my-4">
            <div className="h-24 flex-grow-[2] rounded-2xl bg-primary-100" />
            <div className="h-24  flex-grow-[1] rounded-2xl bg-primary-100" />
        </header>
    )
}
export default function ProfileHeader() {
    const collection = useCollection();
    const [metadata, setMetadata] = React.useState<any>(null);

    const fetchMetadata = React.useCallback(async () => {
        try {
            const data = await getMetadata(collection.uri!);
            setMetadata(data);
        } catch (error) {
            console.error(error);
        }

    }, [collection.collection_id]);

    React.useEffect(() => {
        fetchMetadata();
    }, [fetchMetadata]);
    const items = [
        {
            title: "Supply",
            value: numeral(collection.current_supply).format("0,0a"),
            icon: <ShipmentTrackingIcon size={16} />,
        },
        // {
        //     title: "Total Volume",
        //     value: numeral(collection.).format("0,0a"),
        //     icon: <ChartLineData01Icon size={16} />,
        // },
        {
            title: "Minted",
            value: numeral(collection.total_minted_v2).format("0,0a"),
            icon: <UserIcon size={16} />,
        }
    ]
    return (
        <header className="w-full h-fit flex flex-col lg:flex-row gap-6 my-4">
            <Profile
                name={collection.collection_name}
                avatar={metadata?.image}
                address={collection.collection_id}
                description={collection.description}
                className="lg:flex-col"
            />
            <div className="w-full grid grid-cols-2 lg:flex lg:w-fit h-full flex-row items-center justify-start md:justify-end gap-4">
                {/* <DetailCard
                    key={"Floor Price"}
                    title={"Floor Price"}
                    value={numeral(collection.floor_price).format("$0,0.00")}
                    classNames={{
                        wrapper: "bg-transparent shadow-none",
                        title: "text-success",
                        value: "text-lg lg:text-3xl font-bold"
                    }}
                /> */}
                {items.map((item, index) => (
                    <DetailCard
                        classNames={{
                            wrapper: "w-full lg:w-fit"
                        }}
                        key={index}
                        title={item.title}
                        value={item.value}
                        icon={item.icon}
                    />
                ))}
            </div>
        </header>
    )
}