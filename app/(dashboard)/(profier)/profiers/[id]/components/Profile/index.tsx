'use client';

import { Profile } from "@/components/dashboard/profile";
import { useProfiler } from "../../context";

export default function ProfileHeader() {
    const profiler = useProfiler();
    
    return (
        <header className="w-full flex flex-col md:flex-row gap-4 my-4">
            <Profile
                name={profiler.name}
                avatar={profiler.avatar}
                address={profiler.address}
                tags={[profiler.tag as any]}
            />

        </header>
    );
}