"use client";

import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { DynamicContainer, ReponsiveGridContainer } from "@/components/ui/container";
import { useCollection } from "../../context";
import { NFTCard, SkeletonNFTCard } from "@/components/dashboard/cards/NFTCard";
import { CollectionsBookmarkIcon } from "hugeicons-react";
import EmptyContent from "@/components/empty";
import { Token } from "@/types";
import React from "react";
import { getTokensByCollection } from "@/fetch-functions/token";
import { Spinner } from "@nextui-org/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParam } from "@/components/dashboard/search/context";
import clsx from "clsx";
import { useViewSwitch } from "@/components/dashboard/view-switch";
import { useInView } from "react-intersection-observer";

export default function NFTsArea() {
    const collection = useCollection();
    const { searchTerm } = useSearchParam();
    const { view } = useViewSwitch();
    const { ref, inView } = useInView();

    const {
        data,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        initialPageParam: 0,
        queryKey: ["nfts", searchTerm],
        queryFn: async ({ pageParam = 0 }) => {
            const nfts = await getTokensByCollection(collection.collection_id, 10, pageParam, searchTerm);
            return nfts;
        },
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length === 10) {
                return pages.length;
            } else {
                return undefined;
            }
        }
    });

    React.useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    return (
        <Area classNames={{
            wrapper: "h-full"
        }}>
            <AreaHeader title="All NFTs" icon={<CollectionsBookmarkIcon />} />
            <AreaMain>
                <DynamicContainer
                    className={clsx(
                        "w-full overflow-y-auto no-scrollbar",
                    )}
                    variant={view as any}
                >
                    {
                        isLoading ?
                            Array.from({ length: 32 }).map((_, index) => (
                                <SkeletonNFTCard key={index} />
                            )) :
                            data?.pages.map((page, pageIndex) => (
                                page.map((nft: Token, index: any) => (
                                    <NFTCard
                                        key={`${pageIndex}-${index}`}
                                        nft={nft}
                                    />
                                ))
                            ))
                    }
                    {isFetchingNextPage && Array.from({ length: 32 }).map((_, index) => (
                        <SkeletonNFTCard key={`skeleton-${index}`} />
                    ))}
                    <div ref={ref} />
                    {
                        !isLoading && data?.pages.length === 0 && (
                            <EmptyContent
                                title="No NFTs found"
                                description="No NFTs found for the current search term."
                            />
                        )
                    }
                </DynamicContainer>
            </AreaMain>
        </Area>
    );
}