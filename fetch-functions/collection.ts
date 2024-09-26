export async function getCollection(id: string) {
    try {
        if (!id) throw new Error('Invalid collection id')

        return {}
    } catch (error) {
        throw new Error('Error fetching collection')
    }
}