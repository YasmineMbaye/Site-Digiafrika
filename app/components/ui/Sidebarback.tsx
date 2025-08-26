import {
  House,
  ChartNoAxesCombined,
  MoveLeft,
  ArrowLeft,
  Grid2x2Plus,
  Map,
  ChartColumn,
  Share2,
  Users,
  UserCog,
  LandPlot,
  MessageSquare,
  Settings,
  LogOut,
  Bell,
  User,
  ChevronDown,
} from "lucide-react";
import { Form } from "react-router";


export default function Sidebar() {
  return (
    <div className="flex  w-50 flex-col bg-gradient-to-l from-blue-50/80 via-white/80 to-blue-100/80 gap-3">
      <div className="bg-gradient-to-l from-blue-50/80 via-white/80 to-blue-100/80 h-15 flex p-3 gap-4">
        <div className="bg-gradient-to-b from-blue-50 to-blue-800 w-9 rounded-2xl p-1 ">
          <ChartNoAxesCombined />
        </div>
        <div>
          <div className="font-bold text-blue-950">Site </div>
          <div className="text-blue-600 text-xs italic">DIGIAFRIKA</div>
        </div>
        <div className="bg-white shadow-2xs rounded-2xl text-blue-500 p-1">
          <ArrowLeft />
        </div>
      </div>

      <aside className="   p-4 bg-white flex-1 ">
        <nav className="">
          <div className=" flex rounded  hover:bg-blue-100 p-1 mb-2">
            {" "}
            <Users className="w-4" />
            <div>
              <a href="" className="p-1 text-xs">
                {" "}
                Users
              </a>
            </div>
          </div>
          <div className=" flex rounded  hover:bg-blue-100 p-1 mb-2">
            {" "}
            <LandPlot className="w-4" />
            <div>
              <a href="" className="p-1 text-xs">
                {" "}
                Roles
              </a>
            </div>
          </div>
        </nav>
      </aside>

      <div className="bg-white h-30 ">
        <nav className="flex flex-col p-4 h-30 gap-1 ">
          <div className="flex rounded  hover:bg-blue-100 p-1">
            {" "}
            <MessageSquare className="w-4" />{" "}
            <div>
              <a href="" className="text-xs p-1">
                Message
              </a>
            </div>
          </div>
          <div className="flex rounded  hover:bg-blue-100 p-1">
            {" "}
            <Settings className="w-4" />{" "}
            <div>
              <a href="" className="text-xs p-1">
                Paramétres
              </a>
            </div>
          </div>
          <div className="flex rounded  hover:bg-blue-100 p-1">
            <LogOut className="w-4 text-red-500" />{" "}
            <div>
              <Form  method="post" action="/logout">
                <button className="text-xs p-1 text-red-500" type="submit">
                  Deconnexion
                </button>
              </Form>
            </div>
          </div>
        </nav>
        {/*    <div className=" flex justify-center">
                    <div className="bg-blue-200 w-30 text-center text-xs p-1 rounded-2xl">version 1.0.0</div>
                </div> */}
      </div>
    </div>
  );
}
