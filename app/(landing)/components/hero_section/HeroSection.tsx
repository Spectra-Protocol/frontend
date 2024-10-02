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
            <p className="text-foreground-500 text-lg">Welcome to <b>Spectra</b></p>
            <h1 className="lg:text-6xl font-semibold text-foreground-800 z-20">
                Collect, analyze and
            </h1>
            <div className="lg:text-6xl font-semibold flex flex-row gap-4 items-center justify-center w-fit h-fit">
                <h1 className="text-foreground-800">aggregate</h1>
                <div className="h-fit w-fit flex relative">
                    <h1 className="py-2 px-3 rounded-2xl bg-secondary-200 text-secondary-foreground z-0 absolute left-0 rotate-[24deg]">
                        data
                    </h1>
                    <h1 className="py-2 px-3 rounded-2xl bg-secondary-400 text-secondary-foreground z-10 ">
                        data
                    </h1>
                    <h1 className="py-2 px-3 rounded-2xl bg-secondary-300 text-secondary-foreground absolute z-0 left-0 rotate-[12deg]">
                        data
                    </h1>
                </div>
            </div>
            <div className="w-fit flex flex-row gap-4 items-center">
                <Button
                    color="primary"
                    className="font-medium shadow"
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