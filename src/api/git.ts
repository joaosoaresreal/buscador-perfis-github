import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/users/',
    timeout: 1000 // tempo de atraso resposta
});

export default api;
