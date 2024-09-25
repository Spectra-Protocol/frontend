'use client';

import { Chip } from "@nextui-org/react";
import dynamic from "next/dynamic";

const GetstartedButton = dynamic(() => import("../../../../components/GetStartedButton"));

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="w-full flex flex-row items-center justify-between h-full"
        >
            <div className="flex flex-col gap-8 items-start justify-center sm:max-w-screen-sm h-full">
                <div>
                    <Chip color="default" variant="bordered">
                        <span className="text-primary font-semibold">Spectra</span> | On the Aptos Blockchain
                    </Chip>
                </div>
                <div className="w-full">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground w-full break-words">
                        Decentralized Indexer for a Super Data Warehouse
                    </h1>
                    <p className="text-base text-default-500 w-full max-w-[95%] sm:max-w-[75%] mt-4">
                        Spectra is a decentralized indexer for the Aptos blockchain. Allowing you to query data from the Aptos blockchain in a decentralized way.
                    </p>
                </div>
                <div>
                    <GetstartedButton />
                </div>
            </div>
            <div className="relative" />
        </section>
    )
}