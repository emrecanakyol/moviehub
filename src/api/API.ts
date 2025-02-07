import axios from 'axios';
import { API_BASE_URL } from './EndPoints';

const API = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default API;
