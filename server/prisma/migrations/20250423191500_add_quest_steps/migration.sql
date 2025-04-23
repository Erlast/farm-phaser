/*
  Warnings:

  - You are about to drop the column `targetAmount` on the `Quest` table. All the data in the column will be lost.
  - You are about to drop the column `targetSeedId` on the `Quest` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Quest` table. All the data in the column will be lost.
  - You are about to drop the column `progress` on the `QuestProgress` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Quest" DROP CONSTRAINT "Quest_targetSeedId_fkey";

-- AlterTable
ALTER TABLE "Quest" DROP COLUMN "targetAmount",
DROP COLUMN "targetSeedId",
DROP COLUMN "type";

-- AlterTable
ALTER TABLE "QuestProgress" DROP COLUMN "progress";

-- CreateTable
CREATE TABLE "QuestStep" (
    "id" SERIAL NOT NULL,
    "questId" INTEGER NOT NULL,
    "type" "QuestType" NOT NULL,
    "targetSeedId" INTEGER,
    "targetAmount" INTEGER NOT NULL,

    CONSTRAINT "QuestStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestStepProgress" (
    "id" SERIAL NOT NULL,
    "stepId" INTEGER NOT NULL,
    "current" INTEGER NOT NULL DEFAULT 0,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "progressId" INTEGER NOT NULL,

    CONSTRAINT "QuestStepProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuestStepProgress_progressId_stepId_key" ON "QuestStepProgress"("progressId", "stepId");

-- AddForeignKey
ALTER TABLE "QuestStep" ADD CONSTRAINT "QuestStep_questId_fkey" FOREIGN KEY ("questId") REFERENCES "Quest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestStep" ADD CONSTRAINT "QuestStep_targetSeedId_fkey" FOREIGN KEY ("targetSeedId") REFERENCES "Seed"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestStepProgress" ADD CONSTRAINT "QuestStepProgress_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "QuestStep"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestStepProgress" ADD CONSTRAINT "QuestStepProgress_progressId_fkey" FOREIGN KEY ("progressId") REFERENCES "QuestProgress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
