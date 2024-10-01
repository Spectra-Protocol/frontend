import { ReponsiveGridContainer } from "@/components/ui/container";
import { useInfiniteQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { Cards02Icon } from "hugeicons-react";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

import { Collection, ProfilerTagType, Project } from "@/types";
import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import ShortcutCard, { SkeletonShortcutCard } from "@/components/dashboard/cards/ShortcutCard";
import { useSearchParam } from "@/components/dashboard/search/context";
import { getProject } from "@/fetch-functions/project";
import SkeletonContainer from "../components/SkeletonContainer";
import { toast } from "react-toastify";
import EmptyContent from "@/components/empty";

interface ProjectsContainerProps extends React.HTMLAttributes<HTMLElement> {
}

export default function ProjectsContainerArea(props: ProjectsContainerProps) {
    const router = useRouter();
    const { ref, inView } = useInView();
    const { searchTerm } = useSearchParam();

    const [mockProject, setMockProject] = React.useState<Project | null>(null);

    React.useEffect(() => {
        const fetchMockProject = async () => {
            try {
                const project = await getProject("1");
                setMockProject(project);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMockProject();
    }, []);

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
            return mockProject ? [mockProject] : [];
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
                <ReponsiveGridContainer
                    className={clsx(
                        "w-full overflow-y-auto no-scrollbar",
                        props.className,
                    )}
                >
                    {
                        isLoading ?
                            <SkeletonContainer />
                            :
                            data?.pages.map((page, pageIndex) => (
                                page.map((project: Project, index: any) => (
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
                </ReponsiveGridContainer>
            </AreaMain>
        </Area>
    );
}