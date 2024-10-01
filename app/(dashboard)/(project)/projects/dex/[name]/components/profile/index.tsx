'use client';

import { Agreement02Icon, Blockchain04Icon, LockedIcon, SourceCodeIcon } from "hugeicons-react";
import { DetailCard } from "@/components/dashboard";
import { Profile } from "@/components/dashboard/profile";
import numeral from "numeral";
import { useProjectDexAggregator } from "../../context";
import { Skeleton } from "@nextui-org/react";


export function LoadingProfileHeader() {
    return (
        <header className="w-full flex flex-col md:flex-row gap-6 my-4">
            <Skeleton className="h-24 flex-grow-[2] rounded-3xl" />
            <Skeleton className="h-24  flex-grow-[1] rounded-3xl" />
        </header>
    )
}
export default function ProfileHeader() {
    const project = useProjectDexAggregator();


    return (
        <header className="w-full flex flex-col lg:flex-row gap-6 my-4">
            <Profile
                name={project.name}
                avatar={project.avatar_url}
                address={project.contract_address}
                className="lg:flex-col"
                tags={["dex-aggregator"]}
            >
                {/* <DetailCard
                    title="Market Cap"
                    description="Circulating"
                    value={
                        numeral(project.market_cap_fully_diluted).format("$0,0.00a")
                    }
                    classNames={{
                        wrapper: "bg-transparent shadow-none w-fit justify-between col-span-2",
                        value: "text-foreground lg:text-2xl 2xl:text-4xl font-semibold",
                        icon: "bg-primary-100"
                    }}
                /> */}
            </Profile>
            <div className="w-full grid grid-cols-2 lg:flex lg:w-fit h-full flex-row items-center justify-start md:justify-end gap-4">

                <DetailCard
                    title="TVL"
                    description="Total Value Locked"
                    value={
                        numeral(project.total_value_locked).format("0.00a")
                    }
                    classNames={{
                        wrapper: "bg-primary w-full lg:w-fit justify-between",
                        title: "text-primary-200",
                        value: "text-primary-foreground",
                        icon: "bg-primary-100"
                    }}
                    icon={<LockedIcon size={24} />}
                />
                <DetailCard
                    title="Core Devs"
                    description="Core Developers"
                    icon={<SourceCodeIcon size={24} />}
                    classNames={{
                        wrapper: "w-full lg:w-fit justify-between",
                    }}
                    value={
                        numeral(project.core_developers).format("0,000a")
                    }
                />
                <DetailCard
                    title="Code Commits"
                    description="Code Commits"
                    icon={<Agreement02Icon size={24} />}
                    classNames={{
                        wrapper: "w-full lg:w-fit justify-between",
                    }}
                    value={
                        numeral(project.code_commits).format("0,000a")
                    }
                />
                <DetailCard
                    title="Chains"
                    description="Number of Chains"
                    icon={<Blockchain04Icon size={24} />}
                    classNames={{
                        wrapper: "w-full lg:w-fit justify-between",
                    }}
                    value={
                        numeral(project.num_chains).format("0,000a")
                    }
                />
            </div>
        </header>
    )
}