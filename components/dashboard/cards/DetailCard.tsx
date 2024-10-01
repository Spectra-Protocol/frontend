import { Tooltip } from "@nextui-org/react";
import clsx from "clsx";

interface DetailCardProps extends React.PropsWithChildren<{}> {
    title: string;
    value: any;
    description?: string;
    icon?: React.ReactNode;
    className?: string;
    classNames?: {
        wrapper?: string;
        title?: string;
        description?: string;
        value?: string;
        icon?: string;
    }
}
export function DetailCard(props: DetailCardProps) {
    const { title, value, icon } = props;

    return (
        <div className={clsx(
            "w-fit h-fit py-3 px-4 rounded-[16px] bg-foreground-100 shadow flex flex-row gap-2",
            props.classNames?.wrapper
        )}>
            <div className="w-fit flex flex-col">
                <p className={
                    clsx(
                        "text-lg font-bold text-foreground-900",
                        props.classNames?.value
                    )
                }>
                    {value}
                </p>
                <Tooltip content={props.description} placement="top" color="primary">
                    <h6 className={clsx(
                        "text-sm font-medium text-foreground-500 w-fit text-nowrap",
                        "cursor-pointer",
                        props.classNames?.title
                    )}>
                        {title}
                    </h6>
                </Tooltip>
            </div>
            {icon && <div className={clsx(
                "rounded-[12px] bg-foreground-200 text-foreground-500 p-2 w-fit h-fit",
                props.classNames?.icon
            )}>
                {icon}
            </div>}
        </div>
    )
}