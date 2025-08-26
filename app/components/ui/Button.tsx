import { NavLink } from "react-router";

export default function Button({ text, actionpath, color, background, hover, hovertext, border  }: { text: ButtonProps, actionpath:string, border?:string;
    color?:string;
    hover?:string;
    hovertext?:string;
    background?:string; }) {
  return (
    <div className="flex justify-center   ">
      
       <NavLink 
       to={actionpath}
       
       className={  ({ isActive }) =>
        `  text-center px-2 py-2 rounded-sm border text-sm ${background || "bg-white"} ${border || "border-blue-800"} ${color || "text-blue-800"}  ${hover || "hover:bg-blue-900"} ${hovertext || "hover:text-white"} ${
          isActive && ` text-blue-900 border border-blue-900`
         } ` 
      }>

         <div className={` `}>
          {text.nom}
        </div>
       </NavLink>
        
      
    </div>
  );
}
