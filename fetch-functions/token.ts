import { Token, TokenActivity } from "@/types";
import { aptosClient } from "@/utils/aptos";

export async function getToken(tokenId: string): Promise<Token> {
    try {
        if (!tokenId) throw new Error('Invalid token id')
        const query = `
        query MyQuery($_eq: String = "") {
            current_token_datas_v2(where: {token_data_id: {_eq: $_eq}}) {
                collection_id
                cdn_asset_uris {
                cdn_image_uri
                }
                token_name
                token_data_id
                token_uri
                description
                decimals
            }
        }
        `
        const res = await aptosClient().queryIndexer<{
            current_token_datas_v2: Token[]
        }>({
            query: {
                query,
                variables: {
                    _eq: tokenId
                }
            }
        })

        const token = res.current_token_datas_v2[0]

        return token as Token
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching token')
    }
}

export async function getTokenActivities(tokenId: string) {
    try {
        if (!tokenId) throw new Error('Invalid token id')
        const query = `
            query MyQuery($_eq: String = "") {
                token_activities_v2(where: {current_token_data: {token_data_id: {_eq: $_eq}}}) {
                    after_value
                    before_value
                    entry_function_id_str
                    from_address
                    to_address
                    is_fungible_v2
                    to_address
                    transaction_timestamp
                    transaction_version
                    token_amount
                }
            }
        `
        const res = await aptosClient().queryIndexer<{
            token_activities_v2: TokenActivity[]
        }>({
            query: {
                query,
                variables: {
                    _eq: tokenId
                }
            }
        })
        return res.token_activities_v2
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching token activities')
    }
}

export async function getTokensByCollection(collectionId: string) {
    try {
        if (!collectionId) throw new Error('Invalid collection id')
        const query = `
        query MyQuery($_eq: String = "") {
            current_token_datas_v2(where: {collection_id: {_eq: $_eq}}) {
                collection_id
                cdn_asset_uris {
                cdn_image_uri
                }
                token_name
                token_data_id
                token_uri
                description
                decimals
                last_transaction_timestamp
                last_transaction_version
            }
        }
        `
        const res = await aptosClient().queryIndexer<{
            current_token_datas_v2: Token[]
        }>({
            query: {
                query,
                variables: {
                    _eq: collectionId
                }
            }
        })

        return res.current_token_datas_v2
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching tokens by collection')
    }
}