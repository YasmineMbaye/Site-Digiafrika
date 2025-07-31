import { NavLink } from "react-router";
import Navitems from "./Navitems";
import { SITE_MAP } from "~/utils/constantes";



export default function Header() {
  return (
    <nav className="bg-gray-50 flex justify-between px-20  items-center">
      <NavLink to={"/"} className={" p-4 "}>
        logo
      </NavLink>

      <div className="flex gap-8 justify-between items-center h-full text-gray-700 font-bold">
        {SITE_MAP.map((page:NavigationProps, index) =>(
        <Navitems
        key={index}
        pageProps={page}
            /> ))}
      </div>
    </nav>
  );
}

// crerr un coposant nav item  prendre le nom de la page  et les urls

// creer un objet data  typer qui contient un objet page avec le nom l url et licon 

// ensuite l integrer un header

/* type x  {
    page:"",
    url:"",
} */ 

