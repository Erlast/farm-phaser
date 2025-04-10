import express, {Request, Response} from 'express'
import cors from 'cors'
import authRouter from './routes/auth'
import userRoutes from './routes/user'

import 'tsconfig-paths/register'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors(
    {
        origin: 'http://localhost:5173', // адрес твоего фронтенда
        credentials: true,               // если нужны cookie / сессии
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
))
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/user', userRoutes)
app.get('/api/health', (req: Request, res: Response) => {
    console.log(req)
    console.log(res)
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))