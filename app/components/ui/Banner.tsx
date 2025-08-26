import { Calendar, Circle } from "lucide-react";
import { NavLink } from "react-router";

export default function Section({title, describtion, actionlabel, actionpath, subtitle}:{title:string, describtion:string, actionlabel:string, actionpath:string, subtitle:string}) {
  return (
    <div className=" py-20 ">
      <div className=" w-250  m-auto flex justify-between ">
        <div className="flex-1">
          <div className="font-bold text-5xl mb-6">
            {title}
          </div>
          <div className="mb-6  animate ">
            {describtion}
          </div>
          <div className="bg-amber-50 text-blue-600 rounded p-2 flex w-73 text-sm gap-2">
            <div>
              {" "}
              <Calendar className="animate animate-bounce" />
            </div>
            <NavLink to={actionpath} className={"flex items-center"}>{actionlabel}</NavLink>
            
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className=" bg-blue-900 w-110 h-90 rounded-xl flex items-center justify-center">
            <div className="bg-blue-800 w-86 h-60 rounded-xl flex justify-center items-center px-8">
              <div>
                <div className="flex justify-center mb-4"><div className="bg-blue-900 p-4 rounded-full"><Circle className="font-bold h-8 w-8 animate animate-bounce" /></div></div>
                <div className="text-xl font-bold">{subtitle}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
