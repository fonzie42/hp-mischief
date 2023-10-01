import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://hp-api.onrender.com/api',
  timeout: 5000,
})