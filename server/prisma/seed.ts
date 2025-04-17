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
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(() => prisma.$disconnect())