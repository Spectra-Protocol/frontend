"use client";

import { Profile } from "@/components/dashboard/profile";
import { useNFT } from "../../context";

export default function Index() {
    const nft = useNFT();

    return (
        <div className="flex flex-col gap-4">
            <Profile
                name={nft.name}
                address={nft.address}
                classNames={{
                    avatar: "hidden",
                    title: "lg:text-3xl"

                }}
            />
            <p className="text-base text-foreground-500">{nft.description}</p>
        </div>
    );
}