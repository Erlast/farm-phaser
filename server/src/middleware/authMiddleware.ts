import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export interface AuthRequest extends Request {
    userId?: number
}

export const authMiddleware = (req: AuthRequest, res: any, next: any) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ message: 'Нет токена' })
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Нет токена' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number }
        req.userId = decoded.userId
        next()
    } catch (e) {
        return res.status(401).json({ message: 'Неверный токен' })
    }
}