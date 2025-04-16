import {prisma} from "../prisma/client";

export const one = async (req: any, res: any) => {
    const character = await prisma.character.findUnique({
        where: {userId: req.userId}
    })

    if (!character) {
        return res.status(404).json({message: 'Пользователь не найден'})
    }

    return res.json(character)
}

export const addXP = async (req: any, res: any) => {
    const userId = req.userId
    const { experience } = req.body

    if (typeof experience !== 'number') {
        return res.status(400).json({ error: 'Invalid XP amount' })
    }

    try {
        await prisma.character.update({
            where: { userId },
            data: {
                experience: { increment: experience }
            }
        })

        res.json({ message: 'XP updated' })
    } catch (err) {
        res.status(500).json({ error: 'Failed to update XP' })
    }
}