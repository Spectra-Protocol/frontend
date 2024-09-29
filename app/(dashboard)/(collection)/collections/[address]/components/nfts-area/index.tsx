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

export default function NFTsArea() {
    const collection = useCollection();
    const [tokens, setTokens] = React.useState<Token[]>([]);
    const fetchTokens = React.useCallback(async () => {
        try {
            const data = await getTokensByCollection(collection.collection_id);
            setTokens(data);
        } catch (error) {
            console.error(error);
        }
    }, [collection.collection_id]);

    React.useEffect(() => {
        fetchTokens();
    }, [fetchTokens]);
    
    return (
        <Area classNames={{
            wrapper: "h-full"
        }}>
            <AreaHeader title="All NFTs" icon={<CollectionsBookmarkIcon />} />
            <AreaMain>
                {tokens.length === 0 && <EmptyContent />}
                {
                    tokens && tokens.length > 0 && (
                        <ReponsiveGridContainer className="!xl:grid-cols-3 h-screen">
                            {tokens.map((token: any, index: any) => (
                                <NFTCard
                                    key={index}
                                    nft={token}
                                />
                            ))}
                        </ReponsiveGridContainer>
                    )
                }
            </AreaMain>
        </Area>
    );
}