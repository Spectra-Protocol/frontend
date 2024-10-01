"use client";

import { ViewSwitchProvider } from "@/components/dashboard/view-switch";

interface ProvidersProps extends React.PropsWithChildren {

}
export default function Providers(props: ProvidersProps) {
    return (
        <ViewSwitchProvider>
            {props.children}
        </ViewSwitchProvider>
    )
}