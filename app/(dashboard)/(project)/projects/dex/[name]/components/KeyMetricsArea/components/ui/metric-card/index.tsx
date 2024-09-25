import clsx from "clsx";

interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function MetricCard({ ...props }: MetricCardProps) {
    return (
        <div
            className={clsx(
                "p-6 rounded-3xl bg-background-100",
                props.className
            )}
        >
            {props.children}
        </div >
    );
}