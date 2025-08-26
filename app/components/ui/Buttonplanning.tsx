import { Calendar } from "lucide-react";
import { NavLink } from "react-router";

export default function Buttonplanning({ text, actionpath }: { text?: string, actionpath:string }) {
  return (
    <div className="bg-green-500 text-white rounded p-2 flex w-75 text-sm gap-2 h-10">
            <div>
              {" "}
              <Calendar />
            </div>
            <NavLink to={actionpath} ></NavLink>
            <a href="" className="flex items-center">{text}</a>
          </div>
  );
}
