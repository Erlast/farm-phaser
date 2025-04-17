-- CreateTable
CREATE TABLE "LevelRequirement" (
    "id" SERIAL NOT NULL,
    "level" INTEGER NOT NULL,
    "xpRequired" INTEGER NOT NULL,

    CONSTRAINT "LevelRequirement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LevelRequirement_level_key" ON "LevelRequirement"("level");
