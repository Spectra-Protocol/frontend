"use client";

import { notFound, useRouter } from "next/navigation";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import EmptyContent from "@/components/empty";
import { Suspense } from "react";

export default function Page() {
    const { account, } = useWallet();
    const router = useRouter();

    if (account) {
        router.push("../profiles/" + account.address);
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="h-screen w-full">
                <EmptyContent
                    description="Please connect to view profile!"
                />
            </div>
        </Suspense>
    )
};