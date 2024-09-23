import dynamic from "next/dynamic";
import Providers from "./providers";
import { mockProfiler } from "@/mock";

const ProfileHeader = dynamic(() => import("./components/Profile"), { ssr: false });
const PortfolioArea = dynamic(() => import("./components/PortfolioArea"), { ssr: false });

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
                <ProfileHeader />
                <PortfolioArea />
            </div>
        </Providers>
    )
};