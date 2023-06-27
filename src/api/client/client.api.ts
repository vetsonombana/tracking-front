import axios from 'axios'

console.log(import.meta.env)

export const CommandClient = axios.create({ baseURL: import.meta.env.VITE_BASE_URL })