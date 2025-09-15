
import { PrismaClient } from "@prisma/client";
import { equal } from "assert";
import bcrypt from "bcrypt";
import { connect } from "http2";
const prisma = new PrismaClient();
async function main() {
  
  //sinon creer  lelement

  console.log("🍃Seed terminé !");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
