import dynamic from "next/dynamic";
import Providers from "../../providers";
import { mockProfiler } from "@/mock";
import { USING_MOCK } from "@/config";
import { getAccount } from "@/fetch-functions/profile";
import { notFound } from "next/navigation";
import TransactionArea from "../../components/TransactionsArea";
import ProfileHeader from "../../components/Profile";
import PortfolioArea from "../../components/PortfolioArea";


const getProfile = async (address: string) => {
    if (USING_MOCK) {
        return mockProfiler;
    }

    try {
        const profile = await getAccount(address);
        return profile;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch profile");
    }
}
interface PageProps {
    params: {
        address: string;
    }
}
export default async function Page({ params: { address } }: PageProps) {
    let profiler = null;
    try {
        profiler = await getProfile(address);
    } catch (error) {
        console.error(error);
    }

    if (!profiler) notFound();

    return (
        <Providers profile={profiler}>
            <div className="w-full h-full flex flex-col gap-6 overflow-y-auto">
                <ProfileHeader />
                <PortfolioArea />
                <TransactionArea />
            </div>
        </Providers>
    )
};