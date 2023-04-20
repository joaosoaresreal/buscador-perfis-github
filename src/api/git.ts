import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/users/',
    timeout: 1000 // tempo de atraso resposta
});

export async function getUsers(nome: string) {
    const users = await api.get(nome)
    return users.data
}
