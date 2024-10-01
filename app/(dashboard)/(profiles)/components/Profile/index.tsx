'use client';

import { Profile } from "@/components/dashboard/profile";
import { useProfiler } from "../../context";
import { usePathname } from "next/navigation";
import { ProfilerTagType } from "@/types";

export function SkeletonProfileHeader() {
    return (
        <header className="w-full flex flex-col md:flex-row gap-4 my-4">
            <div className="w-16 h-16 rounded-2xl bg-gray-300 animate-pulse"></div>
            <div className="flex flex-col gap-2">
                <div className="w-32 h-4 bg-gray-300 animate-pulse"></div>
                <div className="w-24 h-4 bg-gray-300 animate-pulse"></div>
            </div>
        </header>
    )
}
export default function ProfileHeader() {
    const profiler = useProfiler();
    const pathname = usePathname();
    const address = pathname.split("/").pop();

    return (
        <header className="w-full flex flex-col md:flex-row gap-4 my-4">
            <Profile
                name={profiler.name || "Unknown"}
                avatar={""}
                address={address}
                tags={[profiler.category as ProfilerTagType]}
            />

        </header>
    );
}