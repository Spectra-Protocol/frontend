import { Collection, TokenActivity } from "@/types";
import { aptosClient } from "@/utils/aptos";

export async function getCollection(id: string) {
    try {
        if (!id) throw new Error('Invalid collection id')
        const query = `
            query MyQuery($id: String = "") {
                current_collections_v2(where: {collection_id: {_eq: $id}}) {
                    collection_properties
                    max_supply
                    mutable_description
                    mutable_uri
                    table_handle_v1
                    total_minted_v2
                    description
                    current_supply
                    creator_address
                    collection_name
                    collection_id,
                    uri
                    cdn_asset_uris {
                        cdn_image_uri
                        asset_uri
                    } 
                    
                }
            }
            `
        const res = await aptosClient().queryIndexer<{
            current_collections_v2: Collection[]
        }>({
            query: {
                query,
                variables: {
                    id
                }
            }
        })

        const collection = res.current_collections_v2[0]

        return collection as Collection;
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching collection')
    }
}

export async function getCollections(limit: number = 10, offset: number = 0, keyword: string) {
    try {
        const query = `
            query MyQuery($limit: Int = 10, $offset: Int = 10, $keyword: String = "") {
                current_collections_v2(
                limit: $limit, offset: $offset
                where: {
                    collection_name: {_ilike: $keyword},
                    cdn_asset_uris: {cdn_image_uri: {_is_null: false}}
                }
                ) {
                    collection_properties
                    max_supply
                    mutable_description
                    mutable_uri
                    table_handle_v1
                    total_minted_v2
                    description
                    current_supply
                    creator_address
                    collection_name
                    collection_id
                    uri
                    cdn_asset_uris {
                        cdn_image_uri
                        asset_uri
                    }               
                }
            }
            `
        const res = await aptosClient().queryIndexer<{
            current_collections_v2: Collection[]
        }>({
            query: {
                query,
                variables: {
                    limit,
                    offset,
                    keyword: `%${keyword}%`
                }
            }
        })

        const collections = res.current_collections_v2

        return collections as Collection[];
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching collections')
    }
}

export async function getCollectionActivities(collectionId: string, limit: number = 10, offset: number = 0) {
    try {
        if (!collectionId) throw new Error('Invalid collection id')
        const query = `
        query MyQuery($id: String = "", $limit: Int = 10, $offset: Int = 0) {
            token_activities_v2(
                    where: {current_token_data: {collection_id: {_eq: $id}}}
                    limit: $limit
                    offset: $offset
            ) {
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
                current_token_data {
                    token_name
                    token_uri
                }                
            }
        }
        `
        const res = await aptosClient().queryIndexer<{
            token_activities_v2: TokenActivity[]
        }>({
            query: {
                query,
                variables: {
                    id: collectionId,
                    limit,
                    offset
                }
            }
        })
        return res.token_activities_v2
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching token activities')
    }
}

export async function getCollectionsOnSui() {

}