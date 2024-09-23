import dynamic from "next/dynamic";

import Providers from "./providers";
import React from "react";
import { getProject } from "../../../../../fetch-functions/project";

const Profile = dynamic(() => import("./components/Profile"), { ssr: false });
const TransactionsArea = dynamic(() => import("./components/TransactionsArea"), { ssr: false });
const MetricChartArea = dynamic(() => import("./components/MetricChartArea"), { ssr: false });

interface PageProps {
    params: {
        id: string;
    }
}
export default async function Page({ params: { id } }: PageProps) {
    const project = await getProject(id);

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