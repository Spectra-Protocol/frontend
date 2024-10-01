"use client";

import { Chip } from "@nextui-org/react";
import { Clock05Icon } from "hugeicons-react";
import React from "react";

function Time() {
    const [currentTime, setCurrentTime] = React.useState('');

    const getCurrentTime = () => {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'UTC',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedDate = formatter.format(now);

        return formattedDate.replace(',', ' -');
    };

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="text-foreground-500 flex flex-row items-center gap-4 w-fit">
            <Clock05Icon size={16} />
            <p className="text-sm">{currentTime}</p>
            <Chip color="primary" radius="full" size="sm">UTC</Chip>
        </div>
    );
} 
export default function Header() {
    return(
        <header className="w-full flex flex-row gap-6 items-center justify-between">
            <div className="flex flex-col items-start">
                <h1 className="text-base text-foreground ">Welcom to Spectra</h1>
                <p className="text-2xl font-semibold text-primary">Dashboard</p>
            </div> 
            <Time />
        </header>
    )
} 