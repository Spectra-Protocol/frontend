import { formatTime, getMetadata } from "@/lib";
import { Token } from "@/types";
import { Image } from "@nextui-org/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import numeral from "numeral";
import React from "react";
import { useInView } from "react-intersection-observer";

interface NFTCardProps extends React.HTMLAttributes<HTMLDivElement> {
    nft: Token;
}


export function SkeletonNFTCard(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="w-full h-full bg-foreground-100 rounded-[16px] shadow p-4 flex flex-col gap-4" {...props}>
            <div className="w-full h-[270px] bg-foreground-200 rounded-[16px] animate-pulse" />
            <div className="w-full h-4 bg-foreground-200 rounded-[16px] animate-pulse" />
            <div className="w-full h-4 bg-foreground-200 rounded-[16px] animate-pulse" />
        </div>
    );
}
export function NFTCard(props: NFTCardProps) {
    const router = useRouter();

    const { nft } = props;
    const [metadata, setMetadata] = React.useState<any>(null);
    const fetchMetadata = React.useCallback(async () => {
        try {
            const data = await getMetadata(nft.token_uri);
            setMetadata(data);
        } catch (error) {
            console.error(error);
        }
    }, [nft.token_uri]);

    React.useEffect(() => {
        fetchMetadata();
    }, [fetchMetadata]);

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "0px",
        threshold: 0.1,
    });

    return (
        <div
            className={clsx(
                "w-full h-full bg-foreground-100 rounded-[16px] shadow p-4 flex flex-col gap-4",
                "hover:scale-[1.02] transition-transform duration-300 ease-in-out",
                "cursor-pointer",
                props.className
            )}
            role="a"
            onClick={() => router.push(`../nfts/${nft.token_data_id}`)}
                
            {...props}
        >
            <Image
                ref={ref}
                src={inView ? nft.cdn_asset_uris?.cdn_image_uri : ""}
                alt={nft.token_name}
                width={"100%"}
                height={"auto"}
                className="rounded-[16px] aspect-[360/270]"
                classNames={{
                    img: "object-cover"
                }}
                loading="lazy"
            />
            <div className="flex flex-col gap-2 w-full">
                <h6 className="text-base font-bold text-foreground-700">{nft.token_name}</h6>
                <div className="flex flex-row justify-between w-full">
                    <h6 className="text-xs text-foreground-500">Last tx</h6>
                    <p className="text-xs text-foreground-500">{formatTime(nft.last_transaction_timestamp)}</p>
                </div>
            </div>
        </div>
    );
}