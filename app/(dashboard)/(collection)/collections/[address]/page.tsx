import { getCollection } from "@/fetch-functions/collection";
import ProfileHeader from "./components/profile";
import { mockCollection } from "@/mock";
import Providers from "./providers";
import { notFound } from "next/navigation";

import { USING_MOCK } from "@/config";
import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./components/responsive/desktop"), { ssr: false });

interface PageProps {
    params: {
        address: string;
    }
}
export default async function Page({ params: { address } }: PageProps) {
    let collection = null;
    try {
        USING_MOCK ?
            collection = mockCollection
            :
            collection = await getCollection(address);
    } catch (error) {
        console.error(error);
    }
    if (!collection) notFound();

    return (
        <Providers collection={collection}>
            <div className="grid grid-cols-1 lg:grid-cols-3 row-auto gap-6">
                <div className="row-start-1 col-span-full">
                    <ProfileHeader />
                </div>
                <Desktop/>
            </div>
        </Providers>
    );
}