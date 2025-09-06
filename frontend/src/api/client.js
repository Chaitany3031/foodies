import axios from 'axios'

// Configure base API URL via env or default to localhost backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // send cookies for auth
  headers: {
    'Content-Type': 'application/json',
  },
})

// Response interceptor for centralized error handling/logging
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response) {
      // Optionally add logging or toast integration here
      // console.error('API error:', err.response.status, err.response.data)
    } else {
      // console.error('Network error:', err.message)
    }
    return Promise.reject(err)
  }
)

export default api
