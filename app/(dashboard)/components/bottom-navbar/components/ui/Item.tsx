import clsx from "clsx";

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    value?: any;
}

export default function Item({ ...props }: ItemProps) {
    return (
        <div
            className={clsx(
                "flex flex-row items-center gap-4 p-4",
                props.className
            )}
        >
            <div className="text-foreground-500">
                {props.icon}
            </div>
            <div className="flex flex-col gap-0">
                <h6 className="text-sm text-foreground-900 font-medium">{props.title}</h6>
                <p className="text-xs text-foreground-900">{props.description}</p>
            </div>
            <p className="text-lg text-foreground-900 font-semibold">{props.value}</p>
        </div >
    );
}