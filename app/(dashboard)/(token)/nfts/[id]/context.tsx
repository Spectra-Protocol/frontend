import { Token } from "@/types";
import React from "react";

export type NFTContextType = Token;
export const NFTContext = React.createContext<NFTContextType | undefined>(undefined);
export const useNFT = () => {
    const context = React.useContext(NFTContext);
    if (!context) {
        throw new Error("useNFT must be used within a NFTProvider");
    }
    return context;
}
export const NFTProvider = NFTContext.Provider;
