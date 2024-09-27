'use client';


import { Profiler } from "@/types";
import { ProfilerContextType, ProfilerProvider } from "./context";

interface ProvidersProps extends React.PropsWithChildren<{}> {
    profile: ProfilerContextType;
}
export default function Providers({ children, profile }: ProvidersProps) {
    return (
        <ProfilerProvider value={profile}>
            {children}
        </ProfilerProvider>
    );
}