"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Avatar, Button } from "@nextui-org/react";
import { LogoutCircle02Icon } from "hugeicons-react";
import { truncateAddress } from "@/lib";
import dynamic from "next/dynamic";

const WalletSelector = dynamic(() => import("../wallet/WalletSelector"), { ssr: false });

interface WalletProps extends React.HTMLAttributes<HTMLDivElement> {
}
export default function Wallet({ ...props }: WalletProps) {
    const { account, connected, wallet, disconnect } = useWallet()
    if (!connected) {
        return (
            <WalletSelector />
        )
    }
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between w-full gap-4">
                <div className="flex flex-row gap-2 items-center">
                    <Avatar
                        src={wallet?.icon}
                        radius="full"
                    />
                    <p className="text-foreground-900 text-sm font-semibold">
                        {truncateAddress(account?.address!, "start")}
                    </p>
                </div>
                <Button
                    size="sm"
                    radius="full"
                    className="bg-default-500 text-white"
                    endContent={<LogoutCircle02Icon size={16} className="text-foreground-300" />}
                    onClick={() => {
                        disconnect()
                    }}
                >
                    Disconnect
                </Button>
            </div>
        </div>
    );
}