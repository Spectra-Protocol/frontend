import dynamic from "next/dynamic";
import { USING_MOCK } from "@/config";
import { mockDexDataResponse } from "@/mock";
import { getDexDataReponse } from "@/fetch-functions/project";
import { notFound } from "next/navigation";
import Providers from "./providers";
import ProfileHeader from "./components/profile";
import Mobile from "./components/responsive/mobile";
import Desktop from "./components/responsive/desktop";


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
            <div className="w-full h-full flex flex-col gap-6 lg:h-full lg:overflow-hidden no-scrollbar">
                <ProfileHeader />
                <Mobile />
                <Desktop />
            </div>
        </Providers>
    )
};