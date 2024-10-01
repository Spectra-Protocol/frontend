import { Favicon } from "@/components/icons";
import { APP_VERSION } from "@/config";

export default function Copyright() {
    return (
        <div className='flex flex-row gap-2 items-center w-full'>
            <Favicon size={24} />
            <div className="flex flex-col gap-0 items-start w-full">
                <p className='text-xs text-default-500'>
                    Copyright by Spectra - 2024
                </p>
                <p className="text-xs text-foreground-500 font-semibold">Version {APP_VERSION}</p>
            </div>
        </div>
    )
}