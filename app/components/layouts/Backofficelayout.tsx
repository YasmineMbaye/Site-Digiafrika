import { Outlet, useLoaderData, Link, useActionData } from "react-router";
import Headerback from "../ui/Headerback";
import Footer from "../ui/Footerback";
import Sidebar from "../ui/Sidebarback";


import {dashboardLoader as loader} from "../../services/back-office/dashboardService.server"
import ChangePasswordPopup from "~/view/back-office/Change";
import { useState } from "react";
export {loader}

// Loader pour vérifier si l'utilisateur est connecté


export default function Backofficelayout() {
   const  data  = useLoaderData<typeof loader>();
   const [showPopup, setShowPopup] = useState(data.mustchangepassword)
  return (
    <div>
      <main className=" h-screen flex">
        <Sidebar />

        <div className="flex flex-col bg-gray-100 flex-1">
          <Headerback user={data} />
          
          <div className="flex-1 px-10 pt-10 ">
            {showPopup && <ChangePasswordPopup onClose={() => setShowPopup(false)} />}
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
