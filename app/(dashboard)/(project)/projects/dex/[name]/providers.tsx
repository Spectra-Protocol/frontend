'use client';

import { ProjectDexAggregatorContextType, ProjectDexAggregatorProvider } from "./context";

interface ProvidersProps extends React.PropsWithChildren<{}> {
    project: ProjectDexAggregatorContextType;
}
export default function Providers({ children, project }: ProvidersProps) {
    return (
        <ProjectDexAggregatorProvider value={project}>
            {children}
        </ProjectDexAggregatorProvider>
    );
}