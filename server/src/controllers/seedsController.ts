import {prisma} from "../prisma/client";

export const seeds = async (req: any, res: any) => {
  try {
    const seeds = await prisma.seed.findMany()
    return res.json(seeds)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Failed to fetch seeds'})
  }
}