import clsx from "clsx";

interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
    description?: string;
    classNames?: {
        wrapper?: string;
    }
}
export function MetricCard({ ...props }: MetricCardProps) {
    return (
        <div
            className={clsx(
                "flex flex-col gap-4 shadow",
                props.classNames?.wrapper
            )}
        >
            <div className="w-fit h-fit">
                {props.name ? <h6 className="text-lg text-foreground-900 font-semibold">{props.name}</h6> : null}
                <p className="text-sm text-foreground-500">{props.description}</p>
            </div>
            <div
                className={clsx(
                    props.className
                )}
            >
                {props.children}
            </div>
        </div >
    );
}