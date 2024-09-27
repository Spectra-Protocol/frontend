'use client';

import { Profile } from "@/components/dashboard/profile";
import { useProfiler } from "../../context";
import { usePathname } from "next/navigation";
import { ProfilerTagType } from "@/types";

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