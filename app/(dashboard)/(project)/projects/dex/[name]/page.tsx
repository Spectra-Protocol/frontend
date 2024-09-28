import dynamic from "next/dynamic";
import { USING_MOCK } from "@/config";
import { mockDexDataResponse } from "@/mock";
import { getDexDataReponse } from "@/fetch-functions/project";
import { notFound } from "next/navigation";
import Providers from "./providers";
// import Mobile from "./components/responsive/mobile";
// import Desktop from "./components/responsive/desktop";

const TransactionArea = dynamic(() => import("./components/transactions-area"), { ssr: false });
const ProfileHeader = dynamic(() => import("./components/profile"), { ssr: false });
const KeyMetricsArea = dynamic(() => import("./components/key-metric-area"), { ssr: false });
const Mobile = dynamic(() => import("./components/responsive/mobile"), { ssr: false });
const Desktop = dynamic(() => import("./components/responsive/desktop"), { ssr: false });

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
            <div className="w-full h-full flex flex-col gap-8 lg:h-screen lg:overflow-hidden">
                <ProfileHeader />
                {/* <div className="hidden lg:flex flex-col-reverse lg:flex-row gap-4 w-full h-full overflow-y-scroll">
                    <div className="flex-grow-[3] h-full overflow-y-scroll">
                        <TransactionArea />
                    </div>
                    <div className="flex-grow-[1] h-full overflow-y-scroll">
                        <KeyMetricsArea />
                    </div>
                </div> */}
                <Mobile />
                {/* <Desktop /> */}
            </div>
        </Providers>
    )
};