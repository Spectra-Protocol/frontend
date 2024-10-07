"use client";

import React from "react";
import { CollectionContextType, CollectionProvider } from "./context";
import { ViewSwitchProvider } from "@/components/dashboard/view-switch";


interface ProvidersProps extends React.PropsWithChildren<{}> {
    collection: CollectionContextType;
}
export default function Providers({ children, collection }: ProvidersProps) {
    return (
        <CollectionProvider value={collection}>
            {children}
        </CollectionProvider>
    );
}