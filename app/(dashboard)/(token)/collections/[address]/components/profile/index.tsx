'use client';

import { DetailCard } from "@/components/dashboard";
import { Profile } from "@/components/dashboard/profile";
import numeral from "numeral";
import { Skeleton } from "@nextui-org/react";
import { useCollection } from "../../context";
import { title } from "process";
import { ChartLineData01Icon, icons, Profile02Icon, ShipmentTrackingIcon, UserIcon } from "hugeicons-react";


export function LoadingProfileHeader() {
    return (
        <header className="w-full flex flex-col md:flex-row gap-8 my-4">
            <Skeleton className="h-24 flex-grow-[2] rounded-3xl" />
            <Skeleton className="h-24  flex-grow-[1] rounded-3xl" />
        </header>
    )
}
export default function ProfileHeader() {
    const collection = useCollection();

    const items = [
        {
            title: "Supply",
            value: numeral(collection.supply).format("0,0a"),
            icon: <ShipmentTrackingIcon size={16} />,
        },
        {
            title: "Total Volume",
            value: numeral(collection.total_volume).format("0,0a"),
            icon: <ChartLineData01Icon size={16} />,
        },
        {
            title: "Owners",
            value: numeral(collection.tokens?.length).format("0,0a"),
            icon: <UserIcon size={16} />,
        }
    ]
    return (
        <header className="w-full flex flex-col lg:flex-row gap-8 my-4">
            <Profile
                name={collection.name}
                avatar={collection.avatar_url}
                address={collection.contract_address}
                description={collection.description}
                className="lg:flex-col"
            >
            </Profile>
            <div className="w-full grid grid-cols-2 lg:flex lg:w-fit h-full flex-row items-center justify-start md:justify-end gap-4">
                <DetailCard
                    key={"Floor Price"}
                    title={"Floor Price"}
                    value={numeral(collection.floor_price).format("$0,0.00")}
                    classNames={{
                        wrapper: "bg-transparent shadow-none",
                        title: "text-success",
                        value: "text-lg lg:text-3xl font-bold"
                    }}
                />
                {items.map((item, index) => (
                    <DetailCard
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