import { Token } from "@/types";
import { Image } from "@nextui-org/react";
import clsx from "clsx";
import numeral from "numeral";
import React from "react";
import { useInView } from "react-intersection-observer";

interface NFTCardProps extends React.HTMLAttributes<HTMLDivElement> {
    nft: Token;
}

export function NFTCard(props: NFTCardProps) {
    const { nft } = props;
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
                props.className
            )}
            {...props}
        >
            <Image
                ref={ref}
                src={inView ? nft.image : ""}
                alt={nft.name}
                width={"100%"}
                height={"auto"}
                className="rounded-[16px] aspect-[360/270]"
                loading="lazy"
            />
            <div className="flex flex-col gap-2 w-full">
                <h6 className="text-base font-bold text-foreground-700">{nft.name}</h6>
                <div className="flex flex-row justify-between w-full">
                    <h6 className="text-xs text-foreground-500">Last sale</h6>
                    <p className="text-xs text-foreground-500">{numeral(nft.lastPrice).format("$0,0.00")}</p>
                </div>
            </div>
        </div>
    );
}