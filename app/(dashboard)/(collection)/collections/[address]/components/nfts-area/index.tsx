"use client";

import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { ReponsiveGridContainer } from "@/components/dashboard/ui/container";
import { useCollection } from "../../context";
import { NFTCard } from "@/components/dashboard/cards/NFTCard";
import { CollectionsBookmarkIcon } from "hugeicons-react";
import EmptyContent from "@/components/empty";
import { Token } from "@/types";
import React from "react";
import { getTokensByCollection } from "@/fetch-functions/token";
import { Spinner } from "@nextui-org/react";

export default function NFTsArea() {
    const collection = useCollection();
    const [tokens, setTokens] = React.useState<Token[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    const fetchTokens = React.useCallback(async () => {
        try {
            setLoading(true);
            const data = await getTokensByCollection(collection.collection_id);
            setTokens(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [collection.collection_id]);

    React.useEffect(() => {
        fetchTokens();
    }, [fetchTokens]);

    return (
        <Area classNames={{
            wrapper: "h-full"
        }}>
            <AreaHeader name="All NFTs" icon={<CollectionsBookmarkIcon />} />
            <AreaMain>
                {
                    loading ?
                        <div className="h-full w-full flex items-center justify-center">
                            <Spinner color="primary" />
                        </div>
                        :
                        (
                            <>
                                {tokens.length === 0 && <EmptyContent />}
                                {
                                    tokens && tokens.length > 0 && (
                                        <ReponsiveGridContainer className="xl:grid-cols-3 h-screen">
                                            {tokens.map((token: any, index: any) => (
                                                <NFTCard
                                                    key={index}
                                                    nft={token}
                                                />
                                            ))}
                                        </ReponsiveGridContainer>
                                    )
                                }
                            </>
                        )
                }
            </AreaMain>
        </Area>
    );
}