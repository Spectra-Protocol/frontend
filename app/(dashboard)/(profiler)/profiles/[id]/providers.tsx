'use client';


import { Profiler } from "@/types";
import { ProfilerProvider } from "./context";

interface ProvidersProps extends React.PropsWithChildren<{}> {
    Profiler: Profiler;
}
export default function Providers({ children, Profiler }: ProvidersProps) {
    return (
        <ProfilerProvider value={Profiler}>
            {children}
        </ProfilerProvider>
    );
}