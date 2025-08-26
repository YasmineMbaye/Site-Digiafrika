import data from "~/models/api/home-page.json"
import dataabout from "~/models/api/about.page.json"
import dataservice from "~/models/api/service.page.json"
import dataproject from "~/models/api/projet.page.json"
import dataactuality from "~/models/api/actuality.page.json"
import datacontact from "~/models/api/contact.page.json"

export   const homeLoader= async ()=>{
    return data;
}

export const aboutLoader= async()=>{
    return dataabout;
}

export const serviceLoader= async()=>{
    return dataservice;
}

export const projectLoader= async()=>{
    return dataproject;
}

export const actualityLoader=()=>{
    return dataactuality;
}

export const contactLoader=async()=>{
    return datacontact;
}