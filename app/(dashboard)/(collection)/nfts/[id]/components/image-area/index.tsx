"use client";

import { Image } from "@nextui-org/react";
import React from "react";

import { useNFT } from "../../context";
import { getPopularColor } from "./utils";

export default function ImageArea() {
    const nft = useNFT();
    const [color, setColor] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (nft.cdn_asset_uris.cdn_image_uri) {
            getPopularColor(nft.cdn_asset_uris.cdn_image_uri || "")
                .then((color) => {
                    // decrease the opacity of the color
                    color = color.replace("rgb", "rgba").replace(")", ", 0.5)");
                    console.log("color", color);
                    setColor(color);
                }, (error) => {
                    console.error("Failed to get popular color", error);
                })
        }
    }, [nft]);

    return (
        <Image
            src={nft.cdn_asset_uris.cdn_image_uri}
            alt={nft.token_name}
            width="100%"
            classNames={{
                img: "aspect-video rounded-[32px] object-cover",
            }}
            style={{
                boxShadow: `0px 0px 128px ${color || "rgba(0, 0, 0, 0.15)"}`,
                zIndex: 0,
            }}
        />
    )
}