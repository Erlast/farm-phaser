import {prisma} from "../prisma/client";

export const me = async (req: any, res: any) => {
    const user = await prisma.user.findUnique({
        where: {id: req.userId},
        select: {username: true}
    })

    if (!user) {
        return res.status(404).json({message: 'Пользователь не найден'})
    }

    return res.json(user)
}