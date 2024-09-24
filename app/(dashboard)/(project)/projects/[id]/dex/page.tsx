import dynamic from "next/dynamic";
import { USING_MOCK } from "@/config";
import { mockDexDataResponse } from "@/mock";
import { getDexDataReponse } from "@/fetch-functions/project";
import { notFound } from "next/navigation";
import Providers from "./providers";

const ProfileHeader = dynamic(() => import("./components/Profile"), { ssr: false });   
const KeyMetricsArea = dynamic(() => import("./components/KeyMetricsArea"), { ssr: false });

interface PageProps {
    params: {
        name: string;
    }
}
export default async function Page({ params: { name } }: PageProps) {
    let project = null;
    
    try {
        USING_MOCK ? project = mockDexDataResponse : project = await getDexDataReponse(name);
    } catch (error) {
        console.error(error);
    }
    if (!project) return notFound();

    return (
        <Providers project={project}>
            <div className="w-full flex flex-col gap-8">
                <ProfileHeader />
                <KeyMetricsArea />
            </div>
        </Providers>
    )
};