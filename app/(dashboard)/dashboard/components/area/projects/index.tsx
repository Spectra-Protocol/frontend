"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { Cards02Icon } from "hugeicons-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";

import { DynamicContainer, ReponsiveGridContainer } from "@/components/ui/container";
import { ProfilerTagType, Project } from "@/types";
import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import ShortcutCard, { SkeletonShortcutCard } from "@/components/dashboard/cards/ShortcutCard";
import { useSearchParam } from "@/components/dashboard/search/context";
import SkeletonContainer from "../components/SkeletonContainer";
import EmptyContent from "@/components/empty";
import { mockProjects } from "@/mock";
import { useViewSwitch } from "@/components/dashboard/view-switch";

const USING_MOCK = true;

interface ProjectsContainerProps extends React.HTMLAttributes<HTMLElement> {
}

export default function ProjectsContainerArea(props: ProjectsContainerProps) {
    const router = useRouter();
    const { ref, inView } = useInView();
    const { searchTerm } = useSearchParam();
    const {view} = useViewSwitch();

    const {
        data,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        error
    } = useInfiniteQuery({
        initialPageParam: 0,
        queryKey: ["projects", searchTerm],
        queryFn: async ({ pageParam = 0 }) => {
            if (USING_MOCK) {
                return mockProjects;
            }

            // todo: implement fetch function for projects
            return [];
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

    React.useEffect(() => {
        if (error) {
            toast.error("Failed to fetch projects");
        }
    }, [error]);

    return (
        <Area>
            <AreaHeader title="Projects" icon={<Cards02Icon size={24} />} />
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
                            <SkeletonContainer />
                            :
                            data?.pages.map((page, pageIndex) => (
                                page
                                    .filter((project: Project) => project.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                    .map((project: Project, index: any) => (
                                        <ShortcutCard
                                            key={`${pageIndex}-${index}`}
                                            name={project.name}
                                            tag={project.category as ProfilerTagType}
                                            avatar={project.avatar_url}
                                            onClick={() => router.push(`/projects/${project.id}`)}
                                        />
                                    ))
                            ))
                    }
                    {data?.pages.length === 0 && <EmptyContent content="No projects found" />}
                    {isFetchingNextPage && <SkeletonContainer />}
                    <div ref={ref} />
                </DynamicContainer>
            </AreaMain>
        </Area>
    );
}