import { Coin } from "@/types";
import api from "@/utils/api";

export async function getPrice(coin_type: string): Promise<{
    decimals: number;
    price: number;
}> {
    try {
        if (!coin_type) {
            throw new Error("Coin type is required");
        }
        const data = await api.get(`/utils/price?coin_type=${coin_type}`);

        return data.data;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch coin");
    }
}