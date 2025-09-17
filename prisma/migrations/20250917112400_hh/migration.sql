/*
  Warnings:

  - You are about to drop the column `rolename` on the `User` table. All the data in the column will be lost.
  - Added the required column `roleid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_rolename_fkey";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "rolename",
ADD COLUMN     "roleid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_roleid_fkey" FOREIGN KEY ("roleid") REFERENCES "public"."Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
