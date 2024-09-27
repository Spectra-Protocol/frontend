'use client';


import { ProfilerProvider } from "../context";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { notFound } from "next/navigation";
import { getAccount } from "@/fetch-functions/profile";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Loading from "../../(project)/projects/dex/[name]/loading";
import { AccountDetailsResponse } from "@/types";

interface ProvidersProps extends React.PropsWithChildren<{}> {
}
export default function Providers({ children }: ProvidersProps) {
    const { account, isLoading } = useWallet();
    const [profile, setProfile] = React.useState<AccountDetailsResponse | null>(null);

    React.useEffect(() => {
        if (account) {
            getAccount(account.address).then((data) => {
                setProfile(data);
                console.log(data);
            }).catch((error) => {
                toast.error("Failed to fetch profile");
                console.error(error);
            });
        }
    }, [account]);

    if (isLoading) {
        return <Loading />
    }
    if(!profile) return null;

    return (
        <ProfilerProvider value={profile}>
            {children}
        </ProfilerProvider>
    );
}