import { Area, AreaHeader, AreaMain } from "@/app/(dashboard)/components/area";
import ShortcutCard from "@/components/dashboard/cards/ShortcutCard";
import { ReponsiveGridContainer } from "@/components/dashboard/ui/container";
import { ProfilerTagType } from "@/types";
import clsx from "clsx";
import { Cards02Icon } from "hugeicons-react";

interface CollectionsContainerProps extends React.HTMLAttributes<HTMLElement> {
}
export default function CollectionsContainerArea(props: CollectionsContainerProps) {
    return (
        <Area>
            <AreaHeader title="Collections" icon=<Cards02Icon size={24} /> />
            <AreaMain>
                <ReponsiveGridContainer
                    className={clsx(
                        "w-full",
                        props.className,
                    )}
                >
                    <ShortcutCard
                        name="John Doe"
                        description="Software Engineer"
                        avatar="https://i.seadn.io/gcs/files/152536f1bbcc5df7b40bcd1d1ec738d5.png?auto=format&dpr=1&w=384"
                        tag={ProfilerTagType.Anonymous}
                    />
                    <ShortcutCard
                        name="John Doe"
                        description="Software Engineer"
                        avatar="https://i.seadn.io/s/raw/files/e4fd50120bfb07145dfeaf5789d59ad9.png?auto=format&dpr=1&w=1000"
                        tag={ProfilerTagType.Anonymous}
                    />
                    <ShortcutCard
                        name="John Doe"
                        description="Software Engineer"
                        avatar="https://i.seadn.io/s/raw/files/e4fd50120bfb07145dfeaf5789d59ad9.png?auto=format&dpr=1&w=1000"
                        tag={ProfilerTagType.Anonymous}
                    />
                    <ShortcutCard
                        name="John Doe"
                        description="Software Engineer"
                        avatar="https://i.seadn.io/s/raw/files/e4fd50120bfb07145dfeaf5789d59ad9.png?auto=format&dpr=1&w=1000"
                        tag={ProfilerTagType.Anonymous}
                    />
                    <ShortcutCard
                        name="John Doe"
                        description="Software Engineer"
                        avatar="https://i.seadn.io/s/raw/files/e4fd50120bfb07145dfeaf5789d59ad9.png?auto=format&dpr=1&w=1000"
                        tag={ProfilerTagType.Anonymous}
                    />
                </ReponsiveGridContainer>
            </AreaMain>
        </Area>
    )
}