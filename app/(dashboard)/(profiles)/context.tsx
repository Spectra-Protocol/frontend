import { AccountDetailsResponse, Profiler } from "@/types";
import React from "react"

export type ProfilerContextType = Partial<AccountDetailsResponse> | AccountDetailsResponse;
export const ProfilerContext = React.createContext<ProfilerContextType>({})
export const ProfilerProvider = ProfilerContext.Provider;
export const useProfiler = () => React.useContext(ProfilerContext)