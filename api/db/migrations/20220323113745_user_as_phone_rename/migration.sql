/*
  Warnings:

  - You are about to drop the `UsesAsPhone` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UsesAsPhone";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "UserAsPhone" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phone" TEXT NOT NULL,
    "entry" TEXT,
    "name" TEXT,
    "refreshToken" TEXT,
    "accessKey" TEXT,
    "hashedPassword" TEXT NOT NULL DEFAULT '',
    "salt" TEXT NOT NULL DEFAULT '',
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME,
    "roles" TEXT NOT NULL DEFAULT '[]'
);

-- CreateIndex
CREATE UNIQUE INDEX "ValidatePhone.phone_unique" ON "UserAsPhone"("phone");
