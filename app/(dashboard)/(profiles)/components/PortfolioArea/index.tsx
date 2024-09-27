import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { BitcoinMailIcon } from "hugeicons-react";
import dynamic from "next/dynamic";

const PortfolioTable = dynamic(() => import('./PortfolioTable'), { ssr: false });

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