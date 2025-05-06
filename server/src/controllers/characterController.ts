import {prisma} from "../prisma/client";

export const one = async (req: any, res: any) => {
  const character = await prisma.character.findUnique({
    where: {userId: req.userId},
    include: {
      plots: {
        include: {
          seed: true
        },
        orderBy: {
          id: 'asc' // или 'desc' — если нужно по убыванию
        }
      }
    }
  })
  
  if (!character) {
    return res.status(404).json({message: 'Пользователь не найден'})
  }
  
  const currentLevelReq = await prisma.levelRequirement.findUnique({
    where: {level: character.level - 1}
  })
  
  const nextLevelReq = await prisma.levelRequirement.findUnique({
    where: {level: character.level}
  })
  
  const minXP = currentLevelReq?.xpRequired || 0
  const maxXP = nextLevelReq?.xpRequired || (minXP + 100) // запасной вариант
  
  return res.json({...character, minXP: minXP, maxXP: maxXP, plots: character.plots})
}

export const update = async (req: any, res: any) => {
  const character = await prisma.character.update({
    where: {userId: req.userId},
    data: req.body
  })
  
  return res
}

export const addXP = async (req: any, res: any) => {
  const userId = req.userId
  const {experience} = req.body
  
  if (typeof experience !== 'number') {
    return res.status(400).json({error: 'Invalid XP amount'})
  }
  
  try {
    let minXP = 0
    let maxXP = 100
    
    await prisma.$transaction(async (tx) => {
      let character = await tx.character.findUnique({
        where: {userId},
      })
      
      if (!character) {
        throw new Error('Character not found')
      }
      
      const updatedXP = character.experience + experience
      const nextLevel = character.level
      
      // Сначала обновляем XP
      await tx.character.update({
        where: {userId},
        data: {
          experience: updatedXP,
        },
      })
      
      // Получаем требуемый XP для следующего уровня
      const requirement = await tx.levelRequirement.findUnique({
        where: {level: nextLevel},
      })
      
      if (requirement && updatedXP >= requirement.xpRequired) {
        // Повышаем уровень
        character = await tx.character.update({
          where: {userId},
          data: {
            level: {increment: 1},
          },
        })
      }
      
      const currentLevelReq = await prisma.levelRequirement.findUnique({
        where: {level: character.level - 1}
      })
      
      const nextLevelReq = await prisma.levelRequirement.findUnique({
        where: {level: character.level}
      })
      
      minXP = currentLevelReq?.xpRequired || 0
      maxXP = nextLevelReq?.xpRequired || (minXP + 100) // запасной вариант
    })
    
    res.json({minXP: minXP, maxXP: maxXP})
  } catch (err) {
    res.status(500).json({error: 'Failed to update XP and level'})
  }
}

export const changeBalance = async (req: any, res: any) => {
  const {amount} = req.body
  const userId = req.userId
  
  if (typeof amount !== 'number') {
    return res.status(400).json({error: 'Invalid amount'})
  }
  
  try {
    const updated = await prisma.character.update({
      where: {userId},
      data: {
        coins: {
          increment: amount, // можно положительное или отрицательное
        }
      }
    })
    res.json({coins: updated.coins})
  } catch (err) {
    console.error(err)
    res.status(500).json({error: 'Failed to update coins'})
  }
}

export const harvest = async (req: any, res: any) => {
  const {plotIndex} = req.body;
  
  try {
    const character = await prisma.character.findUnique({
      where: {userId: req.userId},
    });
    
    if (!character) return res.status(404).json({message: 'Character not found'});
    
    const plot = await prisma.plot.findFirst({
      where: {
        characterId: character.id,
        id: plotIndex
      }
    });
    
    if (!plot) return res.status(404).json({message: 'Plot not found'});
    
    await prisma.plot.update({
      where: {id: plot.id},
      data: {
        seedId: null,
        plantedAt: null,
        state: 'DRY'
      },
    });
    
    res.json({message: 'Plot harvested successfully'});
  } catch (err) {
    console.error('Ошибка при сборе урожая:', err);
    res.status(500).json({message: 'Ошибка при сборе урожая'});
  }
}