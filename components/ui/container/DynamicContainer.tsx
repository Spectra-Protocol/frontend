import { ReponsiveGridContainer } from "./ReponsiveGridContainer"
import { LinearContainer } from "./LinearContainer"

interface DynamicContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'list' | 'grid';
}

export function DynamicContainer({ variant = 'list', ...props }: DynamicContainerProps) {
    return variant === 'list' ? <LinearContainer direction="column" {...props} /> : <ReponsiveGridContainer {...props} />
}
