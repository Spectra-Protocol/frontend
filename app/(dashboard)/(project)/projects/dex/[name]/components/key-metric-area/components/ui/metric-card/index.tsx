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
                "flex flex-col gap-8 shadow",
                props.classNames?.wrapper
            )}
        >
            {props.title || props.description ?
                <div className="w-fit h-fit">
                    <h6 className="text-lg text-foreground-900 font-semibold">{props.title}</h6>
                    <p className="text-sm text-foreground-500">{props.description}</p>
                </div>
                : null
            }
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