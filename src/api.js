import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
});

export const getUsers = () => api.get('/users');
export const createUser = (user) => api.post('/users', user);
