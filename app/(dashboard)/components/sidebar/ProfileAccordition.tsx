'use client';

import { MyToastContent } from '@/components/toaster';
import { truncateAddress, useWallet } from '@aptos-labs/wallet-adapter-react';
import { Avatar, Button, Chip, Skeleton } from '@nextui-org/react';
import { Coins01Icon, LogoutCircle01Icon } from 'hugeicons-react';
import dynamic from 'next/dynamic';
import React from 'react';
import { toast } from 'react-toastify';


const WalletSelector = dynamic(() => import('../wallet/WalletSelector'), { ssr: false });

export default function ProfileAccordition() {
    const { connected, account, wallet, disconnect, isLoading } = useWallet();
    if (isLoading) return <Skeleton className='w-full h-16 rounded-lg' />;
    if (!connected) return <WalletSelector />
     
    const handleDisconnet = React.useCallback(() => {
        try {
            disconnect();
            toast.success('Disconnected successfully');
        } catch (error) {
            toast.error(<MyToastContent title='Error' message={"Failed to disconnect"} />);
        }
    }, [disconnect]);

    return (
        <div className='flex flex-row gap-2 items-center w-full h-fit rounded-[16px] px-4 py-3 bg-foreground-50'>
            <Avatar
                src={wallet?.icon}
                size="lg"
                alt="Profile"
                radius='full'
                classNames={{
                    base: 'h-full aspect-square',
                }}
            />
            <div className='w-full'>
                <h4 className='text-sm font-semibold w-full break-words text-foreground-900'>
                    {truncateAddress(account?.address)}
                </h4>
                <Chip
                    startContent={<Coins01Icon size={16} />}
                    radius='full'
                    className='text-default-500'
                    variant='light'
                    size='sm'
                >
                    {account?.ansName || '-'}
                </Chip>
            </div>
            <div>
                <Button
                    size='sm'
                    variant='light'
                    className='text-default-500 data-[hover=true]:bg-default-50'
                    radius='full'
                    isIconOnly
                    onClick={handleDisconnet}
                >
                    <LogoutCircle01Icon size={24} />
                </Button>
            </div>
        </div>
    )
}