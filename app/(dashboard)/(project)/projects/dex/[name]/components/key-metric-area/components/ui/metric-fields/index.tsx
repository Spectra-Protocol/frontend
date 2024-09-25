import { Button, Popover, PopoverContent, PopoverTrigger, Tooltip } from "@nextui-org/react";
import clsx from "clsx";
import { InformationCircleIcon } from "hugeicons-react";

interface MetricFieldrops extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    useTooltip?: boolean;
    value?: any;
    icon?: React.ReactNode;
    classNames?: {
        wrapper?: string;
        title?: string;
        value?: string;
    }
}
export function MetricField01({ ...props }: MetricFieldrops) {
    const { title, value, icon, useTooltip = false } = props;
    return (
        <div
            className={clsx(
                "flex flex-col items-start",
                props.className
            )}
        >
            <h6 className={clsx(
                "text-sm lg:text-base font-semibold text-foreground-500 flex flex-row items-center cursor-pointer",
                props.classNames?.title
            )}>
                {title}
                <Popover
                    color="primary"
                >
                    <PopoverTrigger>
                        <Button radius="full" isIconOnly variant="light" size="sm" className="text-foreground-500">
                            {icon
                                ? icon
                                : <InformationCircleIcon size={16} />
                            }
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        {props.description}
                    </PopoverContent>
                </Popover>
            </h6>
            <p
                className={clsx(
                    "text-lg lg:text-2xl font-semibold text-foreground-900",
                    props.classNames?.value
                )}
            >
                {value}
            </p>
        </div >
    );
}

export default function MetricField02({ title, value, icon, ...props }: MetricFieldrops) {
    return (
        <div
            className={clsx(
                "flex flex-row items-start justify-between",
                props.classNames?.wrapper
            )}
        >
            <h6 className={clsx(
                "text-base text-foreground-500",
                props.classNames?.title
            )}>
                <span className="ml-2">
                    {icon}
                </span>
                {title}
            </h6>
            <p
                className={clsx(
                    "text-base text-foreground-900",
                    props.classNames?.value
                )}
            >
                {value}
            </p>
        </div >
    );
}