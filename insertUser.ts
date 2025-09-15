import { PrismaClient } from "./app/generated/prisma/client.js"; 

const prisma = new PrismaClient();

async function Ajout() {
  const newUser = await prisma.user.create({
    data: {
      username: "mbayeyasmine21@gmail.com",
      password: "123456",
      alias: "Yasmine"
    }
  });

  console.log("Utilisateur ajouté :", newUser);
}


