import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Providers from "./providers";
import React from "react";
import { getProject } from "@/fetch-functions/project";
import { notFound } from "next/navigation";
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
    const router = useRouter();
    let project: Project | null = null;

    try {
        USING_MOCK ? project = mockProject : project = await getProject(id);
        if (project.category === 'dex') {
            router.push(`/project/dex/${project.name}`);
        }
    } catch (error) {
        console.error(error);
    }
    if (!project) return notFound();

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