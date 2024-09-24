'use client';

import { mockProject } from "@/mock"
import { Agreement02Icon, Blockchain04Icon, LockedIcon, SourceCodeIcon } from "hugeicons-react";
import { DetailCard } from "@/components/dashboard";
import { Profile } from "@/components/dashboard/profile";
import { useProject } from "../../../context";
import numeral from "numeral";
import { useProjectDexAggregator } from "../../context";


export default function ProfileHeader() {
    const project = useProjectDexAggregator();

    return (
        <header className="w-full flex flex-col md:flex-row gap-8 my-4">
            <Profile
                name={project.name}
                avatar=""
                address={project.contract_address}
                tags={["dex-aggregator"]}
            />
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