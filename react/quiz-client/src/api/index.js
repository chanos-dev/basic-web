import axios from 'axios'

export const BASE_URL = 'https://localhost:44331/';

export const ENDPOINTS = {
    participant : 'participant',
}

export const createAPIEndpoint = endpoint => {
    let url = BASE_URL + 'api/' + endpoint + '/';

    return {
        get: () => axios.get(url),
        gethById: (id) => axios.get(url + id),
        post: (newRecord) => axios.post(url, newRecord),
        put: (id, updateRecord) => axios.put(url + id, updateRecord),
        delete: (id) => axios.delete(url + id),
    }
}