import { NavLink } from "react-router";
import Navitems from "./Navitems";
import { SITE_MAP } from "~/utils/constantes";

export default function Header() {
  return (
    <div>
      <div className="bg-blue-900 h-4">.  </div>
      <nav className="bg-gray-50 flex justify-between px-20  items-center">
      <NavLink to={"/"} className={" p-4 text-blue-900 font-bold text-2xl"}>
        <span className="text-green-500">Digi</span>Afrika
      </NavLink>

      <div className="flex gap-8 justify-between items-center  text-gray-700 font-bold text ">
        {SITE_MAP.map((page: NavigationProps, index) => (
          <Navitems key={index} pageProps={page} border="border-b-green-500" borderbold="border-3" />
        ))}
      </div>
    </nav>
    </div>
  );
}

// crerr un coposant nav item  prendre le nom de la page  et les urls

// creer un objet data  typer qui contient un objet page avec le nom l url et licon

// ensuite l integrer un header

/* type x  {
    page:"",
    url:"",
} */
