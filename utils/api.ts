// create api (axios instance with headers auth)

import axios from 'axios'
import { API_URL, API_TOKEN } from '@/config'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
})
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            // logout
        }
        return Promise.reject(error)
    }
)

const openseaApi = axios.create({
    baseURL: OPENSEA_API_KEY,
    headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY
    }
})

export default api