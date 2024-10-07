import Providers from "./providers";
import React from "react";
import { getProject } from "@/fetch-functions/project";
import { notFound, redirect } from "next/navigation";

import { mockDexProjects, mockProject } from "@/mock";
import { Project } from "@/types";
import MetricChartArea from "./components/MetricChartArea";
import Profile from "./components/Profile";
import TransactionsArea from "./components/TransactionsArea";


const USING_MOCK = true;

interface PageProps {
    params: {
        id: string;
    }
}

export default async function Page({ params: { id } }: PageProps) {
    let project: Project | null = null;

    try {
        project = await getProject(id);

    } catch (error) {
        if (USING_MOCK) {
            project = mockDexProjects[id as any] || null;
        }
        console.error(error);
    } finally {
        if (!project) return notFound();
        if (project.category.toLowerCase() === 'dex') {
            redirect(`/projects/dex/${project.name}`);
        }
    }


    return (
        <Providers project={project}>
            <div className="w-full flex flex-col gap-6">
                <Profile />
                <TransactionsArea />
                <MetricChartArea />
            </div>
        </Providers>
    )
};