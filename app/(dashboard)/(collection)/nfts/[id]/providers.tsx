"use client";

import React from "react";
import { NFTContextType, NFTProvider } from "./context";


interface ProvidersProps extends React.PropsWithChildren<{}> {
    nft: NFTContextType;
}
export default function Providers({ children, nft }: ProvidersProps) {
    return (
        <NFTProvider value={nft}>
            {children}
        </NFTProvider>
    );
}