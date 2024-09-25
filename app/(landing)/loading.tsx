import { Logo } from "@/components/icons";
import { Spinner } from "@nextui-org/react";

export default function Loading() {
    return(
        <div className="w-screen h-screen">
            <div className="mx-auto my-auto flex flex-row items-center justify-center gap-4">
                <Logo size={32} />
                <p className="text-lg lg:text-2xl font-semibold text-foreground">
                    <span className="text-primary">Spectra</span> is loading
                </p>
                <Spinner size="md" color="primary"/>
            </div>
        </div>
    )
}