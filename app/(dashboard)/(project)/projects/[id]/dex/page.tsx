import dynamic from "next/dynamic";
import Providers from "../providers";

const ProfileHeader = dynamic(() => import("./components/Profile"), { ssr: false });   
const KeyMetricsArea = dynamic(() => import("./components/KeyMetricsArea"), { ssr: false });

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
                <ProfileHeader />
                <KeyMetricsArea />
            </div>
        </Providers>
    )
};