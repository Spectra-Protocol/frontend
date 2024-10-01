import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface LinearContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'column';
    space?: 'sm' | 'md' | 'lg';
}

export function LinearContainer({ direction = 'row', className, ...props }: LinearContainerProps) {
    return (
        <div
            className={twMerge(
                clsx(
                    'flex w-full h-full',
                    {
                        'flex-row': direction === 'row',
                        'flex-col': direction === 'column',
                    },
                    {
                        'gap-2': props.space === 'sm',
                        'gap-4': props.space === 'md',
                        'gap-6': props.space === 'lg',
                    },
                ),
                className
            )}
            {...props}
        >
            {props.children}
        </div >
    )
}