-- CreateTable
CREATE TABLE "Seed" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "texture" TEXT NOT NULL,
    "growTime" INTEGER NOT NULL,
    "xp" INTEGER NOT NULL,

    CONSTRAINT "Seed_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Seed_key_key" ON "Seed"("key");
