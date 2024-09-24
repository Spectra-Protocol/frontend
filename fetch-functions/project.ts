import { API_URL } from '../config'
import { Project } from '../types'
import axios from 'axios'

export async function getProject(id: string) {
    try {
        const project = await axios.get(`${API_URL}/projects/${id}`);
        if (!project) throw new Error('Project not found')

        return project.data as Project;
    } catch (error) {
        throw new Error('Error fetching project')
    }
}
export async function getDexDataReponse(name: string) {
    try {
        const dexData = await axios.get(`${API_URL}/dex/${name}`);
        if (!dexData) throw new Error('Dex data not found')

        return dexData.data;
    } catch (error) {
        throw new Error('Error fetching dex data')
    }
}

export function getTransactions(id: string) {
    try {
        if (!id) throw new Error('Invalid project id')

        return []
    } catch (error) {
        throw new Error('Error fetching transactions')
    }
}