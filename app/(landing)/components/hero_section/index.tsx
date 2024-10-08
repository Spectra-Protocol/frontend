'use client';

import { Button, Chip, Divider } from "@nextui-org/react";
import { DiscoverCircleIcon, GoogleDocIcon } from "hugeicons-react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
    title: "Spectra | Indexer Protocol",
    description: "Collect, analyze and aggregate data",
};
export default function HeroSection() {
    const router = useRouter();

    return (
        <section
            id="hero"
            className="w-full flex flex-col gap-6 items-center justify-between h-full z-10"
        >
            <div
                className="p-[2px] rounded-full bg-gradient-to-b from-[#FAFAFA] via-[#9D9D9D] to-[#FFFFFF] shadow-2xl"
            >
                <Chip
                    color="default"
                    className="shadow-2xl bg-foreground-200 text-foreground-900 text-base font-medium py-2 h-fit"
                >
                    On the Aptos blockchain
                </Chip>
            </div>
            <div className="max-w-4xl w-full flex flex-col items-center gap-4">
                <h1 className="text-4xl lg:text-6xl font-semibold text-foreground-800 z-20 text-center [text-shadow:0_2px_4px_0_rgba(0,0,0,0.2)]">
                    Collect, analyze and aggregate data
                </h1>
                <p className="text-base font-medium text-foreground-400 text-center w-3/4">
                    <b>Spectra</b> is positioned to become the leading analytics platform for reliable, transparent, and actionable insights across the decentralized finance (DeFi) ecosystem
                </p>
            </div>
            <div className="w-fit flex flex-row gap-4 items-center">
                <Button
                    color="primary"
                    className="font-medium shadow-2xl shadow-primary"
                    endContent={<DiscoverCircleIcon className="text-primary-300" />}
                    onClick={() => router.push("../dashboard")}
                >
                    Get Started
                </Button>
                <Button
                    className="shadow bg-foreground-100 text-foreground-900 font-medium"
                    endContent={<GoogleDocIcon className="text-foreground-500" />}
                    onClick={() => router.push("../dashboard")}
                >
                    Docs
                </Button>
            </div>
        </section>
    )
}