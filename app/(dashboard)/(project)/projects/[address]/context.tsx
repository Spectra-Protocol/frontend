import { Project } from "@/types";
import React from "react"

export type ProjectContextType = Partial<Project>
export const ProjectContext = React.createContext<ProjectContextType>({})
export const ProjectProvider = ProjectContext.Provider;
export const useProject = () => React.useContext(ProjectContext)