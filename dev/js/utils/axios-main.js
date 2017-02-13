import axios from 'axios';
import { API_REF_DOMAIN, API_REF_BASE } from './api-ref';

export const AXIOS_MAIN = axios.create({
    baseURL: API_REF_DOMAIN + API_REF_BASE,
    method: 'POST',
    timeout: 1000,
});
