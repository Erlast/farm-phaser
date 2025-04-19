import {PrismaClient} from "./generated/prisma/client";

const prisma = new PrismaClient()

async function main() {
    const levels = [
        { level: 2, xpRequired: 100 },
        { level: 3, xpRequired: 300 },
        { level: 4, xpRequired: 600 },
        { level: 5, xpRequired: 1000 }
        // и так далее
    ]

    for (const lvl of levels) {
        await prisma.levelRequirement.upsert({
            where: { level: lvl.level },
            update: {},
            create: lvl,
        })
    }

    console.log('Level requirements seeded.')

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
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(() => prisma.$disconnect())