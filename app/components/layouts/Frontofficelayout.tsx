import {Outlet} from "react-router"
import Header from "../ui/Header"


export default function Frontofficelayout(){
    return(
        <main >
            <Header/>
            
            <Outlet/>
        </main>
    )
}