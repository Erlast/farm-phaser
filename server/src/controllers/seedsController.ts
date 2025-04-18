import {prisma} from "../prisma/client";

export const seeds = async (req: any, res: any) => {
    try {
        const seeds = await prisma.seed.findMany()
        res.json(seeds)
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch seeds'})
    }
}