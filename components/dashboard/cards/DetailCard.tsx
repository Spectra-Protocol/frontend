
interface DetailCardProps extends React.PropsWithChildren<{}> {
    title: string;
    value: any;
    description?: string;
    icon?: React.ReactNode;
    className?: string;
}
export function DetailCard(props: DetailCardProps) {
    const { title, value, icon } = props;

    return (
        <div className="w-fit h-fit py-3 px-4 rounded-[16px] bg-foreground-50 shadow flex flex-row gap-2">
            <div className="w-fit flex flex-col">
                <p className="text-lg font-bold text-foreground-900">{value}</p>
                <h6 className="text-sm font-medium text-foreground-500">{title}</h6>
            </div>
            {icon && <div className="rounded-[12px] bg-foreground-200 text-foreground-500 p-2 w-fit h-fit">
                {icon}
            </div>}
        </div>
    )
}