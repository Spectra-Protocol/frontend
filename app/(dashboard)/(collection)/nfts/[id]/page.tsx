import { notFound } from "next/navigation";
import { Metadata } from "next";

import { mockToken } from "@/mock";
import ImageArea from "./components/image-area";
import { getToken as fetchToken } from "@/fetch-functions/token";
import Providers from "./providers";
import TransactionArea from "./components/transactions-area";
import Profile from "./components/profile";
import DetailsArea from "./components/details-area";
import { Token } from '@/types';
import { USING_MOCK } from "@/config";
import { LinearContainer } from "@/components/ui/container";

interface PageProps {
    params: {
        id: string;
    };
}

const getToken = async (id: string): Promise<Token> => {
    if (USING_MOCK) {
        
    }

    try {
        const nft = await fetchToken(id);
        return nft;
    } catch (error) {
        throw error;
    }
};

export async function generateMetadata({ params }: PageProps) {
    const { id } = params;
    let nft = null;

    try {
        nft = await getToken(id);
        return {
            title: nft.token_name,
        } satisfies Metadata;
    } catch (error) {
        console.error(error);
    }
}

export default async function Page(props: PageProps) {
    const { id } = props.params;

    let nft = null;
    try {
        USING_MOCK ?
            nft = {} as Token
            :
            nft = await fetchToken(id);
    } catch (error) {
        console.error(error);
    }
    if (!nft) notFound();

    return (
        <Providers nft={nft}>
            <div className="w-full h-full grid grid-col-1 lg:grid-cols-3 row-auto gap-6 overflow-y-auto">
                <LinearContainer className="w-full h-full col-span-2" space="lg" direction="column">
                    <ImageArea />
                    <Profile />
                    <DetailsArea />
                    <TransactionArea />
                </LinearContainer>
                <div className="w-full h-full col-span-1" />
            </div>
        </Providers>
    )

}