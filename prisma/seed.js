

import { PrismaClient } from "@prisma/client";
import { equal } from "assert";
import bcrypt from "bcrypt";
import { connect } from "http2";
//const prisma = new PrismaClient();
const prisma = new PrismaClient
async function main() {
  
  //sinon creer  lelement
const defaulthashpassword = await bcrypt.hash("mdp", 10);

// Vérifier si des rôles existent
const existingRoles = await prisma.role.findMany();

if (existingRoles.length === 0) {
  await prisma.role.createMany({
    data: [
      { name: "ADMINE" },
      { name: "SUPERADMINE" },
      { name: "USER" },
      { name: "CLIENT" },
      { name: "STAGIAIRE" },
    ],
  });
}

// Récupérer le rôle SUPERADMINE
const superAdminRole = await prisma.role.findFirst({
  where: { name: "SUPERADMINE" },
});

// Vérifier si un utilisateur SUPERADMINE existe déjà
const superAdminUser = await prisma.user.findFirst({
  where: { roleid: superAdminRole?.id },
});

if (!superAdminUser && superAdminRole) {
  await prisma.user.create({
    data: {
      username: "fatouuuuuu",
      alias: "oumou",
      password: defaulthashpassword,
      role: {
        connect: {
          id: superAdminRole.id,
        },
      },
    },
  });
}

  console.log("🍃Seed terminé !");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
