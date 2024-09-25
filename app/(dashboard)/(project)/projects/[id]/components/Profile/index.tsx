'use client';

import numeral from "numeral";

import { mockProject } from "@/mock"
import { Agreement02Icon, Blockchain04Icon, LockedIcon, SourceCodeIcon } from "hugeicons-react";
import { DetailCard } from "@/components/dashboard";
import { Profile } from "@/components/dashboard/profile";
import { useProject } from "../../context";


export default function ProfileHeader() {
    const project = useProject();

    return (
        <header className="w-full flex flex-col md:flex-row gap-4 my-4">
            <Profile
                name={project.name}
                avatar={project.avatar_url}
                address={project.contract_address}
            />
            {/* <div className="flex w-fit h-full flex-row items-center justify-start md:justify-end gap-4">
                <DetailCard
                    title="Core Devs"
                    description="Core Developers"
                    icon={<SourceCodeIcon size={24} />}
                    value={
                        numeral(project.).format("0,000a")
                    }
                />
                <DetailCard
                    title="Code Commits"
                    description="Code Commits"
                    icon={<Agreement02Icon size={24} />}
                    value={
                        numeral(project.code_commits).format("0,000a")
                    }
                />
                <DetailCard
                    title="Chains"
                    description="Number of Chains"
                    icon={<Blockchain04Icon size={24} />}
                    value={
                        numeral(project.num_chains).format("0,000a")
                    }
                />
            </div> */}
        </header>
    )
}