import { Button } from "@/components";
import { Chip } from "@nextui-org/react";
import clsx from "clsx";

export default function ExtraCard() {
    return (
        <div className={clsx(
            "w-full h-full flex flex-col gap-2 items-center justify-center p-4 rounded-2xl",
            "bg-gradient-to-tr from-[#DC7EDE] to-[#A355F2]",
        )}
        >
            <Chip color="secondary" radius="full">
                What 's new ?
            </Chip>
            <h6 className="text-base font-bold"> 
                Decentralized
            </h6>
            <p className="text-xs text-center">
                Unexpected is a decentralized application
            </p>
            <Button radius="md" fullWidth>
                Explore
            </Button>
        </div>
    );
}