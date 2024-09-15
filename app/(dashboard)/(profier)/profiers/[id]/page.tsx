import dynamic from "next/dynamic";
import Providers from "./providers";
import { mockProfiler } from "@/mock";

const DynamicProfileHeader = dynamic(() => import("./components/Profile"), { ssr: false });
const DynamicPortfolioArea = dynamic(() => import("./components/PortfolioArea"), { ssr: false });

interface PageProps {
    params: {
        address: string;
    }
}
export default function Page({ params: { address } }: PageProps) {
    const profiler = mockProfiler;

    return (
        <Providers Profiler={profiler}>
            <div className="w-full flex flex-col gap-8">
                <DynamicProfileHeader />
                <DynamicPortfolioArea />
            </div>
        </Providers>
    )
};