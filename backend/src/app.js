
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const authRoutes = require('../src/routes/auth.routes')
const foodRoutes = require('../src/routes/food.routes')

const app = express()

// Robust CORS configuration to allow frontend to call API with cookies
const defaultOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:4173', // vite preview
  'http://127.0.0.1:4173'
]
const allowedOrigins = [process.env.FRONTEND_ORIGIN, ...defaultOrigins].filter(Boolean)

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin) return callback(null, true)
    if (allowedOrigins.includes(origin)) return callback(null, true)
    return callback(new Error('Not allowed by CORS'))
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/food-item', foodRoutes)

// Health check
app.get('/', (req, res) => {
  res.send('API is running')
})

module.exports = app
