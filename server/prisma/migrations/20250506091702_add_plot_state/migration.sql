/*
  Warnings:

  - You are about to drop the column `isReady` on the `Plot` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PlotState" AS ENUM ('DRY', 'TILLED', 'GROWING', 'READY');

-- AlterTable
ALTER TABLE "Plot" DROP COLUMN "isReady",
ADD COLUMN     "state" "PlotState" NOT NULL DEFAULT 'DRY';
