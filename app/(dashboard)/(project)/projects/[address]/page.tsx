import dynamic from "next/dynamic";

import Providers from "./providers";

const DynamicProfile = dynamic(() => import("./components/Profile"), { ssr: false });
const DynamicTransactionsArea = dynamic(() => import("./components/TransactionsArea"), { ssr: false });
const DynamicMetricChartArea = dynamic(() => import("./components/MetricChartArea"), { ssr: false });

interface PageProps {
    params: {
        address: string;
    }
}
export default function Page({ params: { address } }: PageProps) {
    const project = {} as any;

    return (
        <Providers project={project}>
            <div className="w-full flex flex-col gap-8">
                <DynamicProfile />
                <DynamicTransactionsArea />
                <DynamicMetricChartArea />
            </div>
        </Providers>
    )
};