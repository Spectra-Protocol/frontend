"use client";

import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { ReponsiveGridContainer } from "@/components/ui/container";
import { useCollection } from "../../context";
import { NFTCard } from "@/components/dashboard/cards/NFTCard";
import { CollectionsBookmarkIcon } from "hugeicons-react";

export default function NFTsArea() {
    const collection = useCollection();
    const tokens = collection.tokens;

    return (
        <Area>
            <AreaHeader title="All NFTs" icon={<CollectionsBookmarkIcon/>}/>
            <AreaMain>
                <ReponsiveGridContainer className="!xl:grid-cols-3 h-screen">
                    {tokens && tokens.map((token, index) => (
                        <NFTCard
                            key={index}
                            nft={token}
                        />
                    ))}
                </ReponsiveGridContainer>
            </AreaMain>
        </Area>
    );
}
