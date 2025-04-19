-- CreateTable
CREATE TABLE "Plot" (
    "id" SERIAL NOT NULL,
    "characterId" INTEGER NOT NULL,
    "seedId" INTEGER,
    "plantedAt" TIMESTAMP(3),
    "isReady" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Plot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Plot" ADD CONSTRAINT "Plot_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plot" ADD CONSTRAINT "Plot_seedId_fkey" FOREIGN KEY ("seedId") REFERENCES "Seed"("id") ON DELETE SET NULL ON UPDATE CASCADE;
