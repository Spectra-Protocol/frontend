"use client";

import { notFound, useRouter } from "next/navigation";

import { useWallet } from "@aptos-labs/wallet-adapter-react";

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