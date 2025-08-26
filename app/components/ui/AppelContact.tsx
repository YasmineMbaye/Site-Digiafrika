import { Calendar, ShieldCheck  } from "lucide-react";
import { NavLink } from "react-router";

export default function AppelContact({title, describtion, actionlabel, actionpath}:{title:string, describtion:string, actionlabel:string, actionpath:string}){
    return(
        
            <div className=" w-4xl  m-auto flex justify-between bg-blue-900 rounded-xl p-15">
        <div className="flex-1 ">
          <div className="font-bold text-3xl mb-6">
           {title}
          </div>
          <div className="mb-6 ">
           {describtion}
          </div>
          <div className="bg-amber-50 text-blue-600 rounded p-2 flex w-73 text-sm gap-2">
            <div>
              {" "}
              <Calendar />
            </div>
            <NavLink to={actionpath} className="flex items-center">{actionlabel}</NavLink>

           
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          
            <div className="bg-blue-800 w-70 h-50 rounded-xl flex justify-center items-center">

              <ShieldCheck className="w-20 h-20" />
            
          </div>
        </div>
      </div>
        
    )

}