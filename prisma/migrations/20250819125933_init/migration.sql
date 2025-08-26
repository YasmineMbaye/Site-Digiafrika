-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "alias" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
