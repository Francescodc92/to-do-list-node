/*
  Warnings:

  - Added the required column `aspiration_date` to the `activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `activities` ADD COLUMN `aspiration_date` DATETIME(3) NOT NULL;
