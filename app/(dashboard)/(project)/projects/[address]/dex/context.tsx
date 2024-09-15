import React from "react"

export type ProjectDexAggregatorContextType = Partial<any>
export const ProjectDexAggregatorContext = React.createContext<ProjectDexAggregatorContextType>({})
export const ProjectDexAggregatorProvider = ProjectDexAggregatorContext.Provider;
export const useProjectDexAggregator = () => React.useContext(ProjectDexAggregatorContext)