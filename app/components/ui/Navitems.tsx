import { NavLink } from "react-router";


export default function Navitems({pageProps}:{pageProps:NavigationProps}){

        return(
            <NavLink to={pageProps.url}  className={ ({isActive})=>`h-full px-2 justify-center items-center text-center  text-sm ${isActive&&' font-bold'}` }>
                {pageProps.name}
            </NavLink>

        )

    }
