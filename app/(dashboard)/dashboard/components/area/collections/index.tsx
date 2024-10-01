"use client";
import { DynamicContainer, LinearContainer, ReponsiveGridContainer } from "@/components/ui/container";
import { useInfiniteQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { Cards02Icon } from "hugeicons-react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

import { getCollections } from "@/fetch-functions/collection";
import { Collection, ProfilerTagType } from "@/types";
import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import ShortcutCard, { SkeletonShortcutCard } from "@/components/dashboard/cards/ShortcutCard";
import { useSearchParam } from "@/components/dashboard/search/context";
import { useViewSwitch } from "@/components/dashboard/view-switch";

interface CollectionsContainerProps extends React.HTMLAttributes<HTMLElement> {
}

export default function CollectionsContainerArea(props: CollectionsContainerProps) {
    const router = useRouter();
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
            const collections = await getCollections(10, pageParam, searchTerm);
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
        <Area>
            <AreaHeader title="Collections" icon={<Cards02Icon size={24} />} />
            <AreaMain>
                <DynamicContainer
                    className={clsx(
                        "w-full overflow-y-auto no-scrollbar",
                        props.className,
                    )}
                    variant={view as any}
                >
                    {
                        isLoading ?
                            Array.from({ length: 32 }).map((_, index) => (
                                <SkeletonShortcutCard key={index} />
                            )) :
                            data?.pages.map((page, pageIndex) => (
                                page.map((collection: Collection, index: any) => (
                                    <ShortcutCard
                                        key={`${pageIndex}-${index}`}
                                        name={collection.collection_name}
                                        tag={ProfilerTagType.Collection}
                                        avatar={collection.cdn_asset_uris?.cdn_image_uri}
                                        onClick={() => router.push(`/collections/${collection.collection_id}`)}
                                    />
                                ))
                            ))
                    }
                    {isFetchingNextPage && Array.from({ length: 32 }).map((_, index) => (
                        <SkeletonShortcutCard key={`skeleton-${index}`} />
                    ))}
                    <div ref={ref} />
                </DynamicContainer>
            </AreaMain>
        </Area>
    );
}