import { NavLink } from "react-router";
import { SITE_MAP } from "~/utils/constantes";
import Navitems from "./Navitems";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook} from 'lucide-react';

export default function Footer(){
    return(
        <div className="bg-blue-900 flex p-10 text-white">
            <div className="flex-1 p-4">
                <div className="mb-4"><NavLink to={"/"} className={" p-4  font-bold text-2xl"}>
        <span className="text-green-500">Digi</span>Afrika
      </NavLink></div>

                <div>Spécialiste de la digitalisation des systèmes administratifs, juridiques et fiscaux en Afrique.</div>
            </div>
            <div className="flex-1 p-4">
                <div className="mb-4 font-bold text-xl">Liens rapides</div>
                <div className="flex flex-col gap-3">
                    {SITE_MAP.map((page,index)=>
                    <Navitems
                    key={index}
                    pageProps={page}
                    />
                    )}
                </div>
                    
                
            </div>
            <div className="flex-1 p-4">
                <div className="mb-4 font-bold text-xl">Contact</div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-2">
                        <div><MapPin className="text" /></div>
                      <div> Dakar, Sénégal</div>
                    </div>
                    <div className="flex gap-2">
                        <div><Phone className="text" /></div>
                     <div>+221 77 733 95 55 / +221 78 169 67 09</div>
                    </div>
                    <div className="flex gap-2">
                        <div><Mail className="text" /></div>
                        <div>contact@digiafrika.com</div>
                    </div>
                    
                </div>
            </div>
            <div className="flex-1 p-4">
                <div className="mb-4 font-bold text-xl">Suivez-nous</div>
                <div className="flex gap-4 ">
                    <div><Linkedin /></div>
                    <div><Twitter /></div>
                    <div><Facebook /></div>
                    
                </div>
            </div>
        </div>
    )

}