import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, CircleAlert} from 'lucide-react';


export default function CoordonneCard({text}:{text:Coordonne}){
    return(
        <div>
            <div className="shadow-xl px-8 py-12 bg-gray-50 mb-10">
            
                <div className="text-blue-900 text-2xl font-bold mb-8">{text.coordonne}</div>
            
            <div className='flex gap-4 mb-8'>
                <div><div className='bg-green-100  w-12 h-12 rounded-full flex justify-center items-center shadow-2xl'><MapPin  className='text-green-500 h-5' /></div></div>
                <div>
                    <div className='text-blue-900 font-bold mb-2'>{text.adresse}</div>
                    <div className='text-gray-600 text-sm'>{text.ville}</div>
                </div>
            </div>

             <div className='flex gap-4 mb-8'>
                <div><div className='bg-green-100  w-12 h-12 rounded-full flex justify-center items-center shadow-2xl'><Phone className='text-green-500 h-5' /></div></div>
                <div>
                    <div className='text-blue-900 font-bold  mb-2'>{text.telephone}</div>
                    <div className='text-gray-600 text-sm'>{text.numero}</div>
                </div>
            </div>

             <div className='flex gap-4 mb-4'>
                <div><div className='bg-green-100  w-12 h-12 rounded-full flex justify-center items-center shadow-2xl'><Mail className='text-green-500 h-5' /></div></div>
                <div>
                    <div className='text-blue-900 font-bold mb-2'>{text.email}</div>
                    <div className='text-gray-600 text-sm'>{text.mail}</div>
                </div>
            </div>

             <div className='flex gap-4 mb-4'>
                <div><div className='bg-green-100  w-12 h-12 rounded-full flex justify-center items-center shadow-2xl'><CircleAlert className='text-green-500 h-5' /></div></div>
                <div>
                    <div className='text-blue-900 font-bold mb-2'>{text.ouverture}</div>
                    <div className='text-gray-600 text-sm'>{text.heure}</div>
                </div>
            </div>

            

            
        </div>

        <div className="shadow-xl px-8 py-20 bg-gray-100">
            <div className='flex justify-center'><MapPin className='h-16 w-10 text-gray-500' /></div>
            <div className='text-gray-500 flex justify-center'>{text.google}</div>
        </div>
        </div>

    )
}