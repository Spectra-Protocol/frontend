import { ReponsiveGridContainer } from "./ReponsiveGridContainer"
import { LinearContainer } from "./LinearContainer"

interface DynamicContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'list' | 'grid';
    space?: 'sm' | 'md' | 'lg';
}

export function DynamicContainer({ variant = 'list', space = "md", ...props }: DynamicContainerProps) {
    return variant === 'list' ? <LinearContainer direction="column" space={space} {...props} /> : <ReponsiveGridContainer {...props} />
}
