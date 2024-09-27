import { Token } from "@/types";

export async function getToken(tokenId: string): Promise<Token> {
    return await fetch(`/api/tokens/${tokenId}`).then((res) => res.json());
}