import { useWallet, truncateAddress } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@nextui-org/button";
import { Skeleton, Avatar } from "@nextui-org/react";
import { LogoutCircle02Icon } from "hugeicons-react";
import dynamic from "next/dynamic";
import React from "react";
import { toast } from "react-toastify";

import { MyToastContent } from "@/components/toaster";

const WalletSelector = dynamic(() => import('../wallet/WalletSelector'), { ssr: false });

export default function ProfileAccorditionCard() {
    const { connected, account, wallet, disconnect, isLoading } = useWallet();
    if (isLoading) return <Skeleton className='w-full h-16 rounded-lg' />;
    if (!connected) return <WalletSelector />

    const handleDisconnet = () => {
        try {
            disconnect();
            toast.success('Disconnected successfully');
        } catch (error) {
            toast.error(<MyToastContent title='Error' message={"Failed to disconnect"} />);
        }
    }

    return (
        <div className='flex flex-row gap-2 items-end w-full rounded-[32px] bg-foreground-50 border-t-1 border-default/50 py-4 px-5'>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-2 w-full">
                    <Avatar
                        src={wallet?.icon}
                        size="sm"
                        alt={wallet?.name}
                        radius='full'
                        classNames={{
                            base: 'h-full aspect-square bg-transparent',
                        }}
                    />
                    <h4 className='text-sm font-semibold w-full break-words text-foreground-900'>
                        {truncateAddress(account?.address)}
                    </h4>
                </div>
                <div>
                    <h6 className="text-xs text-foreground-500">Balance</h6>
                    <p className='text-4xl font-semibold text-foreground-900'>
                        3000 <span className="text-xs font-normal">Aptos</span>
                    </p>
                </div>
            </div>
            <div>
                <Button
                    size='sm'
                    variant='solid'
                    className='bg-foreground-900 text-foreground-50'
                    radius='md'
                    onClick={handleDisconnet}
                    endContent={
                        <LogoutCircle02Icon size={16} className="text-foreground-500" />
                    }
                >
                    Disconnect
                </Button>
            </div>
        </div>
    )
}