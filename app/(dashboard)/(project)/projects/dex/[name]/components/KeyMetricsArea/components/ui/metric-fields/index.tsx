import clsx from "clsx";

interface MetricFieldrops extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    value?: any;
    icon?: React.ReactNode;
    classNames?: {
        wrapper?: string;
        title?: string;
        value?: string;
    }
}
export function MetricField01({ title, value, icon, ...props }: MetricFieldrops) {
    return (
        <div
            className={clsx(
                "flex flex-col items-start",
                props.className
            )}
        >
            <h6 className={clsx(
                "text-base font-semibold text-foreground-500",
                props.classNames?.title
            )}>
                {title}
                <span className="ml-2">
                    {icon}
                </span>
            </h6>
            <p
                className={clsx(
                    "text-2xl font-semibold text-foreground-900",
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
                "text-base font-semibold text-foreground-500",
                props.classNames?.title
            )}>
                <span className="ml-2">
                    {icon}
                </span>
                {title}
            </h6>
            <p
                className={clsx(
                    "text-2xl font-semibold text-foreground-900",
                    props.classNames?.value
                )}
            >
                {value}
            </p>
        </div >
    );
}