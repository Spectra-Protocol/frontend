import { getCollection } from "@/fetch-functions/collection";
import ProfileHeader from "./components/profile";
import { mockCollection } from "@/mock";
import Providers from "./providers";
import { notFound } from "next/navigation";

import DetailsArea from "./components/details-area";
import NFTsArea from "./components/nfts-area";
import { USING_MOCK } from "@/config";
import TransactionArea from "./components/transactions-area";


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
            <div className="grid grid-cols-1 lg:grid-cols-3 row-auto gap-8">
                <div className="row-start-1 col-span-full">
                    <ProfileHeader />
                </div>
                <div className="row-start-2 lg:row-start-2 lg:col-start-3 col-span-1 overflow-y-auto flex flex-col gap-8">
                    <DetailsArea />
                    <TransactionArea />
                </div>
                <div className="lg:row-start-2 lg:col-start-1 col-span-2 overflow-y-auto h-full">
                    <NFTsArea />
                </div>

            </div>
        </Providers>
    );
}