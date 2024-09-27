import { Metadata } from "next";
import { getAccount } from "@/fetch-functions/profile"

import { USING_MOCK } from "@/config";
import { mockProfiler } from "@/mock";
import ProfileHeader from "../components/Profile";
import PortfolioArea from "../components/PortfolioArea";
import Providers from "./providers";

const getProfile = async (address: string) => {
    if (USING_MOCK) {
        return mockProfiler;
    }
    try {
        const profile = await getAccount(address);
        return profile.data;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch profile");
    }
}
export const metadata: Metadata = {
    title: "Profile",
    description: "Explore the profile of a user",
}

export default async function Page() {

    return (
        <Providers>
            <div className="w-full flex flex-col gap-8">
                <ProfileHeader />
                <PortfolioArea />
            </div>
        </Providers>
    )
};