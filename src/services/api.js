import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ponto-online-back.herokuapp.com/'
})

export default api;