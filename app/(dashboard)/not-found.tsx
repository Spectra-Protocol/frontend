"use client";
import { Favicon } from "@/components/icons";
import { Link } from "@nextui-org/react";
import { ArrowTurnBackwardIcon } from "hugeicons-react";

export default function Loading() {
    return (
        <div className="w-screen h-screen">
            <div className="flex flex-col items-center justify-center mx-auto my-auto h-full w-full">
                <div className="flex flex-row items-center justify-center gap-4">
                    <Favicon size={32} />
                    <p className="text-lg lg:text-2xl font-semibold text-foreground">
                        <span className="text-primary font-bold">Spectra</span> return 404
                    </p>
                </div>
                <Link color="foreground" href="../dashboard" className="gap-2" showAnchorIcon anchorIcon={<ArrowTurnBackwardIcon size={16} className="text-foreground-300"/>}>
                    Back to dashboard
                </Link>

            </div>
        </div>
    )
}