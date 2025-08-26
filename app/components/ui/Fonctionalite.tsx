import { Check } from "lucide-react";

export default function fonctionalite({vignette}:{vignette: VignetteProps;}){
    return(
    <div>
            <div className=" text-blue-900 mb-4">{vignette.soustitre}</div>
        <div className='text-gray-600 flex flex-col gap-3 text-sm'>
            <div className="flex gap-1 "><div className="text-green-500 "> <Check />,</div> <div>{vignette.civil}</div></div>
            <div className="flex gap-2"><div className="text-green-500"> <Check />, </div><div>{vignette.demande}</div></div>
            <div className="flex gap-1"><span className="text-green-500 "> <Check />, </span><div>{vignette.portail}</div></div>
            <div  className="flex gap-1"><span className="text-green-500"> <Check />,</span> <div>{vignette.paiement}</div></div>
            
        </div>
    </div>
    )
}