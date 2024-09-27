import { notFound } from "next/navigation";

import { mockToken } from "@/mock";
import ImageArea from "./components/image-area";
import { getToken as fetchToken } from "@/fetch-functions/token";
import Providers from "./providers";
import TransactionArea from "./components/transactions-area";
import Profile from "./components/profile";
import DetailsArea from "./components/details-area";
import { Token } from '@/types';

interface PageProps {
    params: {
        id: string;
    };
}
const USING_MOCK = true;

// const getToken = async (id: string): Promise<Token> => {
//     if (USING_MOCK) {
//         return mockToken;
//     }

//     try {
//         const nft = await fetchToken(id);
//         return nft;
//     } catch (error) {
//         throw error;
//     }
// };

// export async function generateMetadata({ params }: PageProps) {
//     const { id } = params;
//     let nft = null;

//     try {
//         nft = await getToken(id);
//         return {
//             title: nft.name.replace(/\b\w/g, l => l.toUpperCase()),
//         } satisfies Metadata;
//     } catch (error) {
//         console.error(error);
//     }
// }

export default async function Page(props: PageProps) {
    const { id } = props.params;

    let nft = null;

    try {
        nft = mockToken;
    } catch (error) {
        console.error(error);
    }
    if (!nft) notFound();

    return (
        <Providers nft={nft}>
            <div className="w-full h-full grid grid-col-1 lg:grid-cols-3 row-auto gap-8 overflow-x-visible">
                <div className="w-full h-full col-span-2 flex flex-col gap-8">
                    <ImageArea />
                    <Profile />
                    <DetailsArea />
                </div>
                <div className="w-full h-full col-span-1">
                    <TransactionArea />
                </div>
            </div>
        </Providers>
    )

}