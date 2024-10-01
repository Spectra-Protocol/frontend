import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { BitcoinMailIcon } from "hugeicons-react";
import dynamic from "next/dynamic";

const PortfolioTable = dynamic(() => import('./PortfolioTable'), { ssr: false });

export function SkeletonPortfolioArea() {
    return (
        <Area>
            <AreaHeader title="Portfolio" icon={<BitcoinMailIcon size={24} />}/>
            <AreaMain>
                <div className="w-full h-96 bg-foreground-100 rounded-3xl animate-pulse"/>
            </AreaMain>
        </Area>
    )
}
export default function PortfolioArea() {
    return (
        <Area>
            <AreaHeader title="Portfolio" icon={<BitcoinMailIcon size={24} />}/>
            <AreaMain>
                <PortfolioTable />
            </AreaMain>
        </Area>
    )
}