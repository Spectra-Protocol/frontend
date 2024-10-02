"use client";

import { Collection } from "@/types";
import React from "react";

export type CollectionContextType = Collection;
export const CollectionContext = React.createContext<CollectionContextType>({} as CollectionContextType);
export const useCollection = () => React.useContext(CollectionContext);
export const CollectionProvider = CollectionContext.Provider;