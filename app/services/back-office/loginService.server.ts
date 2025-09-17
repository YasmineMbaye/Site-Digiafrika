import { redirect } from "react-router";
import { redirectDocument } from "react-router";

import type { Route } from "../../+types/root";
import data from "../../models/api/user.json";

import bcrypt from "bcrypt";
import { createCookieSessionStorage } from "react-router";
import type { User } from "@prisma/client";
import { PrismaClient } from "~/generated/prisma/client";
const UserRepository = new PrismaClient();

export const loginAction = async ({ request }: Route.ActionArgs) => {
  //const users=  await UserRepository.findAll()

  return loginUser(request);
};

export const changePasswordAction = async ({ request }: Route.ActionArgs) => {
  //const users=  await UserRepository.findAll()

  return changePassword(request);
};

export const deconnectAction = async ({ request }: Route.ActionArgs) => {
  return logout(request);
};

/*const fakeData = [
  {
    id: "345DFULKJHGJ764",
    username: "fatou",
    password: "toot",
    role: "admin",
  },
  {
    id: "245DFULKJHGJ764",
    username: "maria",
    password: "toot",
    role: "user",
  },
  {
    id: "145DFULKJHGJ764",
    username: "yacine",
    password: "toot",
    
    role: "superadmin",
  },
]; */

// On configure le cookie pour stocker la session
export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlash>({
    cookie: {
      name: "__session", // nom du cookie
      httpOnly: true, // non accessible en JS côté client
      maxAge: 60 * 60 * 24, // 1 jour
      path: "/",
      sameSite: "lax",
      secure: true, // à mettre true si HTTPS
      secrets: ["s3cret1"], // secret pour signer le cookie
    },
  });

//creer une session lors de la l'authentification de l'utilisateur
export const loginUser = async (request: Request) => {
  const data = await request.formData();
  const session = await getSession(request.headers.get("Cookie"));
  let userCredential: Credentials = {
    username: data.get("name") as string,
    password: data.get("mdp") as string,
  };

  const user = await UserRepository.user.findUnique({
    where: {
      username: userCredential.username,
    },
  });
  console.log("Utilisateur trouvé :", user);

  if (user) {
    const isPasswordValid = await bcrypt.compare(
      userCredential.password,
      user.password
    );
    if (isPasswordValid ) {
      const { password, ...UserData } = user;
      session.set("id", UserData.id),
        session.set("username", UserData.roleid),
        session.set("role", UserData.username),
        session.set("mustchangepassword", UserData.mustchangepassword);

        
      return redirect("/dashboard", {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      });
    }
    
    session.flash("error", "email mot de passe incorrect");

    return redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }
  session.flash("error", "cette utilisateur n exixte pas");

  return redirect("/login", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });


};

/*export const loginUser = async (request: Request) => {
  const data = await request.formData();
  const session = await getSession(request.headers.get("Cookie"));
  let userCredential: Credentials = {
    username: data.get("name") as string,
    password: data.get("mdp") as string,
  };
  
  const user = fakeData.find((User) => {
    if (
      User.username == userCredential.username &&
      User.password == userCredential.password
    ) {
      const { password, ...UserData } = User;
      return UserData;
    }
  });

  if (user) {
    session.set("id", user.id),
      session.set("username", user.username),
      session.set("role", user.role);
    return redirect("/dashboard", {
      headers: {
        "Set-Cookie": await commitSession(session),
        
      },
    });
  }
  session.flash("error", "email mot de passe incorrect");
  
  return redirect("/login", {
    
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}; */

//recuperer la session si l'utilisateur est connecter

export const protectRoute = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));
  console.log(session.has("id"));
  if (session.has("id")) {
    const user: SessionData = {
      id: session.get("id") as string,
      username: session.get("username") as string,
      role: session.get("role") as string,
      mustchangepassword: session.get("mustchangepassword") as boolean
    };
    return user;
  }

  session.flash("error", "veillez vous authentidier dabord");
  console.log(session.data);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
    // status: 403,
    status: 302,
    statusText: "Accés non autorisé",
  });
};

//detruire la session lorsque l'utilisateur se deconnecte
export const logout = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};

export const haslogin = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("id")) {
    // utilisateur déjà connecté → redirection vers dashboard
    return redirect("/dashboard");
  }

  const message = {
    error: session.get("error"),
  };

  return message; // utilisateur non connecté → peut accéder à la page login
};

export const changePassword = async (request: Request) => {
  const formData = await request.formData();
  const newPassword = formData.get("newPassword") as string;
   const confirmPassword = formData.get("confirm") as string;


  // Récupérer la session
  const session = await getSession(request.headers.get("Cookie"));
  const username = session.get("username");
  
   if(newPassword==confirmPassword){
     const hashedPassword = await bcrypt.hash(newPassword, 10);
    await UserRepository.user.update({
    where: { username: username },
    data: {
      password: hashedPassword,
      mustchangepassword: false,
    },
  });
  session.set("mustchangepassword", false);
  
  console.log("valeur de la session ",session.get( "mustchangepassword"))
   return redirectDocument("/login", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
    
  });
   }
  
   
  
}