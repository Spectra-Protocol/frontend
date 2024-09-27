"use client";

import { Image } from "@nextui-org/react";
import { useNFT } from "../../context";
import React from "react";
import { getPopularColor } from "./utils";

export default function ImageArea() {
    const nft = useNFT();
    const [color, setColor] = React.useState<string | null>(null);

    React.useEffect(() => {
        getPopularColor(nft.image || "")
            .then((color) => {
                // decrease the opacity of the color
                color = color.replace("rgb", "rgba").replace(")", ", 0.25)");
                setColor(color);
            }, (error) => {
                console.error("Failed to get popular color", error);
            })
    }, [nft.image]);

    return (
        <Image
            src={nft.image}
            alt={nft.name}
            width="100%"
            classNames={{
                img: "aspect-video rounded-[32px]",
            }}
            style={{
                boxShadow: `0px 0px 128px ${color || "rgba(0, 0, 0, 0.15)"}`,
                zIndex: 0,
            }}
        />
    )
}