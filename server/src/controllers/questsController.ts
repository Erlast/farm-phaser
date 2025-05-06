import {prisma} from "../prisma/client";

export const getAvailable = async (req: any, res: any) => {
  try {
    const character = await prisma.character.findUnique({
      where: {userId: req.userId},
      select: {level: true, id: true}
    })
    
    if (!character) return res.status(404).json({error: 'Character not found'});
    
    const availableQuests = await prisma.quest.findMany({
      where: {
        recommendedLevel: {lte: character.level},
        progresses: {
          none: {
            characterId: character.id,
            completed: true
          }
        }
      },
      include: {
        steps: {
          include: {
            targetSeed: true
          }
        }
      },
      orderBy: {
        recommendedLevel: 'asc'
      }
    });
    
    res.json(availableQuests);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Internal server error'});
  }
}