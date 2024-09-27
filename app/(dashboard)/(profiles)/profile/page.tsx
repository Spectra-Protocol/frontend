"use client";

import { Metadata } from "next";
import { notFound, useRouter } from "next/navigation";

import { useWallet } from "@aptos-labs/wallet-adapter-react";

export const metadata: Metadata = {
    title: "Profile",
    description: "Explore the profile of a user",
}

export default async function Page() {
    const { account, } = useWallet();
    const router = useRouter();

    if (account) {
        router.push("../profiles/" + account.address);
    } else {
        notFound();
    }
    return (
        <></>
    )
};