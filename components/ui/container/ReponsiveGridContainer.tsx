import clsx from "clsx";

interface ReponsiveGridContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}
export function ReponsiveGridContainer({ ...props }: ReponsiveGridContainerProps) {
    return (
        <div className={clsx(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
            props.className
        )}>
            {props.children}
        </div>
    );
}