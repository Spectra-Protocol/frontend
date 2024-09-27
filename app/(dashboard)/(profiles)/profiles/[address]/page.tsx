import dynamic from "next/dynamic";
import Providers from "../../providers";
import { mockProfiler } from "@/mock";
import { USING_MOCK } from "@/config";
import { getAccount } from "@/fetch-functions/profile";
import { notFound } from "next/navigation";
import TransactionArea from "../../components/TransactionsArea";

const ProfileHeader = dynamic(() => import("../../components/Profile"), { ssr: false });
const PortfolioArea = dynamic(() => import("../../components/PortfolioArea"), { ssr: false });

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
        console.log("profiler", profiler);
    } catch (error) {
        console.error(error);
    }

    if (!profiler) notFound();

    return (
        <Providers profile={profiler}>
            <div className="w-full flex flex-col gap-8">
                <ProfileHeader />
                <PortfolioArea />
                <TransactionArea />
            </div>
        </Providers>
    )
};