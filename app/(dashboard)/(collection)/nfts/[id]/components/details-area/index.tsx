"use client";

import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import { LabelIcon } from "hugeicons-react";
import { useNFT } from "../../context";
import { getMetadata } from "@/lib";
import React from "react";

function TraitCard({ keyName, value }: { keyName: string, value: string }) {
    return (
        <div className="flex flex-col gap-2 items-start justify-center bg-foreground-100 px-4 py-3 rounded-2xl min-w-fit max-w-64" key={keyName}>
            <p className="text-base font-semibold text-foreground-900 capitalize">{keyName}</p>
            <p className="text-xs text-foreground-500 font-semibold truncate w-full">{value}</p>
        </div>
    );
}

export function TraitsArea() {
    const nft = useNFT();
    const [traits, setTraits] = React.useState<any>();
    
    React.useEffect(() => {
        const fetchTraits = async () => {
            const metadata = await getMetadata(nft.token_uri);
            setTraits(metadata?.attributes);
        }
        fetchTraits();
    }, [nft.token_uri]);

    return (
        <div>
            <Area>
                <AreaHeader title="Traits" icon={<LabelIcon size={16} />} />
                <AreaMain className="flex flex-row gap-4 flex-wrap">
                    {traits && traits.map((trait: any, index: any) => (
                        <TraitCard key={index} keyName={trait.trait_type} value={trait.value} />
                    ))}
                </AreaMain>
            </Area>
        </div>
    );
}

export default function DetailsArea() {
    return(
        <div className="flex flex-col gap-4">
            <TraitsArea />
        </div>
    )
}