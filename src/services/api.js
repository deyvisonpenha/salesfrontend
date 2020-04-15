import axios from 'axios';

const api = axios.create({
    baseURL: 'https://salesforall.herokuapp.com'
});

export default api;