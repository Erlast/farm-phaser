import {prisma} from '../prisma/client'
import bcrypt from 'bcrypt'
import {generateToken} from "../services/jwt/main";

export const register = async (req: any, res: any) => {
    const {username, password} = req.body

    if (!username || !password) {
        return res.status(400).json({message: 'Все поля обязательны'})
    }

    const candidate = await prisma.user.findUnique({
        where: {username}
    })

    if (candidate) {
        return res.status(400).json({message: 'Пользователь уже существует'})
    }

    const hashPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
        data: {
            username,
            password: hashPassword
        }
    })

    return res.status(201).json({message: 'Регистрация успешна'})
}

export const login = async (req: any, res: any) => {
    const {username, password} = req.body

    if (!username || !password) {
        return res.status(400).json({message: 'Введите username и password'})
    }

    const user = await prisma.user.findUnique({
        where: {username}
    })

    if (!user) {
        return res.status(400).json({message: 'Пользователь не найден'})
    }

    const isPassEquals = await bcrypt.compare(password, user.password)

    if (!isPassEquals) {
        return res.status(400).json({message: 'Неверный пароль'})
    }
    const token = generateToken(user.id)

    return res.status(200).json({message: 'Авторизация успешна', token})
}