"use client";

import { Profile } from "@/components/dashboard/profile";
import { useNFT } from "../../context";

export default function Index() {
    const nft = useNFT();

    return (
        <div className="flex flex-col gap-4">
            <Profile
                name={nft.token_name}
                address={nft.token_data_id}
                classNames={{
                    avatar: "hidden",
                    title: "lg:text-3xl"

                }}
            />
            <p className="text-base text-foreground-500">{nft.description}</p>
        </div>
    );
}