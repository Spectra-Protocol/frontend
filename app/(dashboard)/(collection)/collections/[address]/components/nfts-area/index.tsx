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
import loading from "@/app/(landing)/loading";
import { useSearchParam } from "@/components/dashboard/search/context";
import { useViewSwitch } from "@/components/dashboard/view-switch";
import { getCollections } from "@/fetch-functions/collection";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export default function NFTsArea() {
    const collection = useCollection();

    const { ref, inView } = useInView();
    const { searchTerm } = useSearchParam();
    const { view } = useViewSwitch();

    const {
        data,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        initialPageParam: 0,
        queryKey: ["collections", searchTerm],
        queryFn: async ({ pageParam = 0 }) => {
            const collections = await getTokensByCollection(collection.collection_id, 10, pageParam, searchTerm);
            return collections;
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
            wrapper: "h-full w-full"
        }}>
            <AreaHeader title="All NFTs" icon={<CollectionsBookmarkIcon />} />
            <AreaMain>
                <DynamicContainer
                    className={clsx(
                        "w-full h-full overflow-y-auto no-scrollbar",
                    )}
                    space="md"
                    variant={view as any}
                >
                    {
                        isLoading ?
                            <div className="h-full w-full flex items-center justify-center">
                                <Spinner color="primary" />
                            </div>
                            :
                            <>
                                {
                                    isLoading ?
                                        Array.from({ length: 32 }).map((_, index) => (
                                            <SkeletonNFTCard key={`skeleton-${index}`} />
                                        )) :
                                        data?.pages.map((page, pageIndex) => (
                                            page.map((token: any, index: any) => (
                                                <NFTCard
                                                    key={`${pageIndex}-${index}`}
                                                    nft={token}
                                                />
                                            ))
                                        ))
                                }
                                {isFetchingNextPage && Array.from({ length: 32 }).map((_, index) => (
                                    <SkeletonNFTCard key={`skeleton-${index}`} />
                                ))}
                                <div ref={ref} />
                            </>
                    }
                </DynamicContainer>
            </AreaMain>
        </Area>
    );
}