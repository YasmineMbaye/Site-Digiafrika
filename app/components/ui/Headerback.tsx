import {
  Bell,
  User,
  ChevronDown,
} from "lucide-react";





export default function Headerback({ user }:{user:SessionData}){
    

    return(
        <div>
            <header className="bg-gradient-to-l from-blue-50/80 via-white/80 to-blue-100/80 p-1 font-bold text-blue-950 flex justify-between">
          <div className="flex items-center">Tableau de bord</div>
          <div className="flex gap-4">
            <div className="flex items-center">
              <div className="rounded-2xl bg-white w-10 h-8 items-center flex justify-center">
                <Bell className="text-blue-500 w-5" />
              </div>
            </div>
            <div className="flex bg-white rounded gap-1 p-1">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-2xl bg-gradient-to-b from-blue-50 to-blue-800 flex justify-center items-center">
                  <User className="w-4 text-white" />
                </div>
              </div>
              <div>
                <div className="text-blue-800 text-sm">{user.username}</div>{" "}
                <div className="text-blue-400 text-xs">{user.role}</div>
              </div>
              <div className="flex items-center">
                <ChevronDown className="text-blue-500" />
              </div>
            </div>
          </div>
        </header>
        </div>
    )
}