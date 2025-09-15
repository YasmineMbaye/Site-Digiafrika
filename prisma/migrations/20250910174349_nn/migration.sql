-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "alias" TEXT,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "rolename" TEXT NOT NULL,
    "mustchangepassword" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "public"."Role"("name");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_rolename_fkey" FOREIGN KEY ("rolename") REFERENCES "public"."Role"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
