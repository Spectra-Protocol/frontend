import dynamic from "next/dynamic";
import { USING_MOCK } from "@/config";
import { mockDexDataResponse } from "@/mock";
import { getDexDataReponse } from "@/fetch-functions/project";
import { notFound } from "next/navigation";
import Providers from "./providers";

const TransactionArea = dynamic(() => import("./components/transactions-area"), { ssr: false });
const ProfileHeader = dynamic(() => import("./components/P"), { ssr: false });
const KeyMetricsArea = dynamic(() => import("./components/key-metric-area"), { ssr: false });

interface PageProps {
    params: {
        name: string;
    }
}
export default async function Page({ params: { name } }: PageProps) {
    let project = null;
    try {
        USING_MOCK ?
            project = mockDexDataResponse
            :
            project = await getDexDataReponse(name);
    } catch (error) {
        console.error(error);
    }
    if (!project) return notFound();

    return (
        <Providers project={project}>
            <div className="w-full flex flex-col gap-8">
                <ProfileHeader />
                <div className="flex flex-col-reverse lg:flex-row gap-4 w-full">
                    <div className="flex-grow-[3]">
                        <TransactionArea />
                    </div>
                    <div className="flex-grow-[1]">
                        <KeyMetricsArea />
                    </div>
                </div>
            </div>
        </Providers>
    )
};