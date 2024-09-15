'use client';

import { Project } from "@/types";
import { ProjectProvider } from "./context";

interface ProvidersProps extends React.PropsWithChildren<{}> {
    project: Project;
}
export default function Providers({ children, project }: ProvidersProps) {
    return (
        <ProjectProvider value={project}>
            {children}
        </ProjectProvider>
    );
}