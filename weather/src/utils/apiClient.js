import axios from 'axios'

const apiClient = axios.create({baseURL:'http://api.weatherapi.com/v1/forecast.json',timeout: 5000})

export default apiClient;