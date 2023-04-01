import axios from 'axios'

const url = `https://api.openweathermap.org/data/2.5/weather?`

export const api = axios.create({
    baseURL: url
})