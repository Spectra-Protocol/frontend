import { Chip } from "@nextui-org/react";
import { Clock05Icon } from "hugeicons-react";
import React from "react";

export function Clock() {
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