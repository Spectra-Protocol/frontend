'use client';

import { mockProject } from "@/mock"
import { useProject } from "../../context";
import { LockedIcon } from "hugeicons-react";
import { DetailCard } from "@/components/dashboard";
import { Profile } from "@/components/dashboard/profile";


export default function ProfileHeader() {
    const project = mockProject;

    return (
        <header className="w-full flex flex-col md:flex-row gap-4 my-4">
            <Profile
                name={project.name}
                avatar={project.avatar}
                address={project.address}
            />
            <div className="flex w-fit h-full flex-row items-center justify-start md:justify-end gap-4">
                <DetailCard
                    title="TVL"
                    description="Total Value Locked"
                    value={project?.tvl}
                    icon={<LockedIcon size={32} />}
                />
            </div>
        </header>
    )
}