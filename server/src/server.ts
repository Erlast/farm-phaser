import express, {Request, Response} from 'express'
import cors from 'cors'
import authRouter from './routes/auth'
import userRoutes from './routes/user'
import characterRoutes from './routes/character'
import levelRoutes from './routes/level'
import seedRoutes from './routes/seeds'
import questsRoutes from './routes/quests'
import {initSocket} from './socket';

import 'tsconfig-paths/register'
import dotenv from 'dotenv'
import http from "http";

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
app.use('/api/character', characterRoutes)
app.use('/api/level', levelRoutes)
app.use('/api/seeds', seedRoutes)
app.use('/api/quests', questsRoutes)
app.get('/api/health', (req: Request, res: Response) => {
    console.log(req)
    console.log(res)
})

const PORT = process.env.PORT || 4000

const server = http.createServer(app)
initSocket(server)

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))