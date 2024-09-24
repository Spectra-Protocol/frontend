import { DexDataResponse } from "@/types";
import React from "react"

export type ProjectDexAggregatorContextType = Partial<DexDataResponse>
export const ProjectDexAggregatorContext = React.createContext<ProjectDexAggregatorContextType>({})
export const ProjectDexAggregatorProvider = ProjectDexAggregatorContext.Provider;
export const useProjectDexAggregator = () => React.useContext(ProjectDexAggregatorContext)