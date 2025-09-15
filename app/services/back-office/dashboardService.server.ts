import { redirect,  } from "react-router";
import { haslogin, loginUser, logout, protectRoute } from "./loginService.server";
import type { Route } from "../../+types/root";
import {getSession} from "../../services/back-office/loginService.server"



export const dashboardLoader= async({ request }:Route.LoaderArgs)=> {
  
  return  await protectRoute(request)
}

export const loginLoader= async({request}:Route.LoaderArgs)=>{
     const session = await getSession(request.headers.get("Cookie"));
  const error = session.get("error"); // lit le flash
  return { error }; 
}

export const deconnectLoader= async({ request }:Route.LoaderArgs)=> {
  return  await logout(request)
}

export const logineLoader = async ({ request }: any) => {
 return  await haslogin(request)

};