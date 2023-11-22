import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://bertz-hotel-api.onrender.com/api/',
    timeout: 9000
})