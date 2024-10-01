'use client';

import dynamic from 'next/dynamic';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import ThemeSwitch  from '@/components/theme-switch';
import { Favicon } from '@/components/icons';
import { AreaHeader, AreaWrapper } from '../area';

const ProfileAccorditionCard = dynamic(() => import('./ProfileAccorditionCard'), { ssr: false });

interface TopNavbarProps extends React.HTMLAttributes<HTMLElement> {
}

export default function TopNavbar({ className }: TopNavbarProps) {
    const pathname = usePathname();

    return (
        <header className={clsx(
            "flex flex-col gap-4 py-2 w-full",
            className
        )}>
            <div className="flex items-center gap-4">
                <Favicon size={48} />
                <div className='w-full'>
                    <h1 className="font-semibold text-foreground-900 w-fit">Welcome back</h1>
                    <p className='capitalize text-lg font-semibold text-primary'>
                        {pathname.split('/').pop()}
                    </p>
                </div>
                <ThemeSwitch />
            </div>
            <AreaWrapper>
                <AreaHeader name='Wallet' subtitle={''} icon={undefined} />
                <ProfileAccorditionCard />
            </AreaWrapper>
        </header>
    )
}