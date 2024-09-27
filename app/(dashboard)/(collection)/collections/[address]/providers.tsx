"use client";

import React from "react";
import { CollectionContextType, CollectionProvider } from "./context";


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