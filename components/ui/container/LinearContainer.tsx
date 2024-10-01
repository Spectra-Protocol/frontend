import clsx from "clsx";

interface LinearContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'column';
}

export function LinearContainer({ direction = 'row', ...props }: LinearContainerProps) {
    return (
        <div
            className={clsx(
                'flex',
                {
                    'flex-row': direction === 'row',
                    'flex-col': direction === 'column',
                },
                props.className
            )}
            {...props}
        >
            {props.children}
        </div >
    )
}