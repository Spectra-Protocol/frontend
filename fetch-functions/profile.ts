import { AccountDetailsResponse } from "@/types";
import api from "@/utils/api";

export async function getAccount(address: string): Promise<AccountDetailsResponse> {
    try {
        if (!address) {
            throw new Error("Address is required");
        }

        const profile = await api.get(`/account/address/${address}`);

        return profile.data as AccountDetailsResponse;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch profile");
    }
}