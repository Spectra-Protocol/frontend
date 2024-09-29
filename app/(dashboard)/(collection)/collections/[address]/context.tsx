import { Collection } from "@/types";
import React from "react";

export type CollectionContextType = Collection;
export const CollectionContext = React.createContext<CollectionContextType>({});
export const useCollection = () => React.useContext(CollectionContext);
export const CollectionProvider = CollectionContext.Provider;