import {prisma} from "../prisma/client";

export const getRequirementsByLevel = async (req: any, res: any) => {
    const {id} = req.params
    const levelId = parseInt(id, 10)

    if (isNaN(levelId)) {
        return res.status(400).json({error: 'Invalid level id'})
    }
    const levelRequirement = await prisma.levelRequirement.findUnique({
        where: {level: levelId}
    })

    if (!levelRequirement) {
        return res.status(404).json({message: 'информация не получена'})
    }

    return res.json(levelRequirement)
}