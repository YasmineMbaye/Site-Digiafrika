import { BookText } from 'lucide-react';
import type { ReactNode } from 'react';

export default function({title, children}:{title:SectionAdministrativeProps, children:ReactNode}){
    return(
        
        
           <div className='w-200 m-auto '>
            <div className="  flex gap-25 my-18"> 
           <div className=' flex items-center'>
            {title.iconposition==='left'&&(<div> {children}
           </div>)}
           </div>
            <div>
                <div className="text-2xl font-bold text-blue-900 mb-4">{title.title}</div>
            <div className="text text-gray-600 mb-4">{title.description}</div>
            <div className="text-xl text-blue-900 mb-4">{title.soustitre}</div>
            <div className='text-gray-600 flex flex-col gap-3 text-sm'>
                <div><span className="text-green-500 ">✓</span> {title.civil}</div>
            <div><span className="text-green-500">✓</span> {title.demande}</div>
            <div><span className="text-green-500">✓</span> {title.portail}</div>
            <div><span className="text-green-500">✓</span> {title.paiement}</div>
            <div><span className="text-green-500">✓</span> {title.statut}</div>
            </div>
            
            </div>

                
            <div className=' flex items-center'>
            {title.iconposition==='right'&&(<div> {children}
           </div>)}
           </div>

           
           </div>
           <div className='border border-gray-300'></div>
           </div>
        
    )
}