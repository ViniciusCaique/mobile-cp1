import axios from 'axios'

const apiKey = '3f024b701f398517870c5939f1d0a2e2'

const url = `https://api.openweathermap.org/data/2.5/weather?q=s%C3%A3o%20paulo&units=metric&appid=${apiKey}`

// const nameUser2 = 'ViniciusCaique'

// const url2 = 'https://api.github.com/users/ViniciusCaique/repos'

export const api = axios.create({
    baseURL: url
})