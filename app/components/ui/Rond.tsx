import { BookText } from 'lucide-react';
import type { ReactNode } from 'react';

export default function Rond({icon}:{icon:ReactNode}) {
    return(
        
            <div className='bg-green-100  w-35 h-35 rounded-full flex justify-center items-center'>
            {icon}
           </div>
        
    )
}