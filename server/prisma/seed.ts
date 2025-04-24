import {PrismaClient} from "./generated/prisma/client";

const prisma = new PrismaClient()

async function main() {
    // const levels = [
    //     { level: 1, xpRequired: 0 },
    //     { level: 2, xpRequired: 100 },
    //     { level: 3, xpRequired: 300 },
    //     { level: 4, xpRequired: 600 },
    //     { level: 5, xpRequired: 1000 }
    //     // и так далее
    // ]
    //
    // for (const lvl of levels) {
    //     await prisma.levelRequirement.upsert({
    //         where: { level: lvl.level },
    //         update: {},
    //         create: lvl,
    //     })
    // }

   // console.log('Level requirements seeded.')

    // await prisma.seed.deleteMany()
    //
    // await prisma.seed.createMany({
    //     data: [
    //         {
    //             key: 'carrot',
    //             name: 'Морковка',
    //             texture: 'carrot',
    //             growTime: 5000,
    //             xp: 5,
    //             buyPrice: 2,
    //             sellPrice: 5
    //         },
    //         {
    //             key: 'cucumber',
    //             name: 'Огурец',
    //             texture: 'cucumber',
    //             growTime: 8000,
    //             xp: 10,
    //             buyPrice: 3,
    //             sellPrice: 7
    //         }
    //     ]
    // })
    //
    // console.log('🌱 Seed data inserted successfully.')
    const carrot = await prisma.seed.findUnique({ where: { key: 'carrot' } });
    const cucumber = await prisma.seed.findUnique({ where: { key: 'cucumber' } });

    if (!carrot || !cucumber) {
        throw new Error('Carrot or cucumber seed not found. Make sure they are in the database.');
    }

    await prisma.quest.create({
        data: {
            title: 'Сбор урожая I',
            description: 'Собери 5 морковок и 3 огурца',
            recommendedLevel: 1,
            rewardXP: 100,
            rewardCoins: 50,
            steps: {
                create: [
                    {
                        type: 'HARVEST',
                        targetSeedId: carrot.id,
                        targetAmount: 5
                    },
                    {
                        type: 'HARVEST',
                        targetSeedId: cucumber.id,
                        targetAmount: 3
                    }
                ]
            }
        }
    });

    await prisma.quest.create({
        data: {
            title: 'Посадка новичка',
            description: 'Посади 4 морковки',
            recommendedLevel: 1,
            rewardXP: 80,
            rewardCoins: 30,
            steps: {
                create: [
                    {
                        type: 'PLANT',
                        targetSeedId: carrot.id,
                        targetAmount: 4
                    }
                ]
            }
        }
    });

    await prisma.quest.create({
        data: {
            title: 'Расширь ферму',
            description: 'Купи дополнительную грядку',
            recommendedLevel: 2,
            rewardXP: 150,
            rewardCoins: 100,
            steps: {
                create: [
                    {
                        type: 'BUY_PLOT',
                        targetAmount: 1
                    }
                ]
            }
        }
    });

    console.log('Quests created!');
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(() => prisma.$disconnect())