import { getCollection } from "@/fetch-functions/collection";
import ProfileHeader from "./components/profile";
import { mockCollection } from "@/mock";
import Providers from "./providers";
import { notFound } from "next/navigation";

import DetailsArea from "./components/details-area";
import NFTsArea from "./components/nfts-area";

const USING_MOCK = true;
interface PageProps {
    params: {
        id: string;
    }
}
export default async function Page({ params: { id } }: PageProps) {
    let collection = null;
    try {
        USING_MOCK ?
            collection = mockCollection
            :
            collection = await getCollection(id);
    } catch (error) {
        console.error(error);
    }
    if (!collection) notFound();

    return (
        <Providers collection={collection}>
            <div className="grid grid-cols-1 lg:grid-cols-3 row-auto gap-8">
                <div className="row-start-1 col-span-full">
                    <ProfileHeader />
                </div>
                <div className="row-start-2 lg:row-start-2 lg:col-start-3 col-span-1 overflow-y-auto">
                    <DetailsArea />
                </div>
                <div className="lg:row-start-2 lg:col-start-1 col-span-2 overflow-y-auto h-full">
                    <NFTsArea />
                </div>

            </div>
        </Providers>
    );
}