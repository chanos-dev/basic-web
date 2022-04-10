import axios from 'axios'

export const BASE_URL = 'https://192.168.0.101:5001/';

export const ENDPOINTS = {
    participant : 'participant',
    question : 'question',
    getAnswers : 'question/getanswers'
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