import { NavLink } from "react-router";

export default function({text}:{text:EquipeProps}){
    return(
        <div className="">
            <div className="flex justify-center ">
                <div className="bg-blue-900 h-45 rounded-full text-white text-2xl w-45 mb-4 flex justify-center items-center"><div>{text.prenom}</div></div>
            </div>
            <div className="text-xl text-blue-900 text-center">{text.nom}</div>
            <div className="text-gray-600 text-center">{text.description}</div>
            <div className=" flex justify-center"><NavLink to={"/"} className={""}>{text.icon}</NavLink></div>
            
        </div>
    )
}