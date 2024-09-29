"use client";
import { Favicon } from "@/components/icons";
import { Link } from "@nextui-org/react";
import { ArrowTurnBackwardIcon } from "hugeicons-react";

interface EmptyContentProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string | React.ReactNode;
    description?: string | React.ReactNode;
}
export default function EmptyContent(props: EmptyContentProps) {
    const { label, description } = props;
    return (
        <div className="w-full h-full">
            <div className="flex flex-col items-center justify-center mx-auto my-auto h-full w-full">
                <div className="flex flex-row items-center justify-center gap-4">
                    <Favicon size={32} />
                </div>
                {label}
                {description ?
                    description
                    :
                    <p className="text-sm text-foreground-500 text-center">
                        Empty content
                    </p>
                }
            </div>
        </div>
    )
}