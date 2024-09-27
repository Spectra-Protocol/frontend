import dynamic from "next/dynamic";
import Providers from "./providers";
import React from "react";
import { getProject } from "@/fetch-functions/project";
import { notFound, redirect } from "next/navigation";
import { USING_MOCK } from "@/config";
import { mockProject } from "@/mock";
import { Project } from "@/types";

const Profile = dynamic(() => import("./components/Profile"), { ssr: false });
const TransactionsArea = dynamic(() => import("./components/TransactionsArea"), { ssr: false });
const MetricChartArea = dynamic(() => import("./components/MetricChartArea"), { ssr: false });

interface PageProps {
    params: {
        id: string;
    }
}

export default async function Page({ params: { id } }: PageProps) {
    let project: Project | null = null;

    try {
        false ? project = mockProject : project = await getProject(id);

    } catch (error) {
        console.error(error);
    } finally {
        if (!project) return notFound();
        if (project.category.toLowerCase() === 'dex') {
            redirect(`/projects/dex/${project.name}`);
        }
    }


    return (
        <Providers project={project}>
            <div className="w-full flex flex-col gap-8">
                <Profile />
                <TransactionsArea />
                <MetricChartArea />
            </div>
        </Providers>
    )
};