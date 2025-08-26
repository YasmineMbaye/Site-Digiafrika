import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook} from 'lucide-react';

export default function Rond() {
    return(
        
            
                
                <div className="flex gap-4 ">
                    <div className='bg-white  w-15 h-15 rounded-full flex justify-center items-center shadow-2xl'><Linkedin className='text-blue-900 ' /></div>
                    <div className='bg-white  w-15 h-15 rounded-full flex justify-center items-center shadow-2xl'><Twitter className='text-blue-900 '/></div>
                    <div className='bg-white  w-15 h-15 rounded-full flex justify-center items-center shadow-2xl'><Facebook className='text-blue-900 '/></div>
                    
                </div>
            
        
    )
}