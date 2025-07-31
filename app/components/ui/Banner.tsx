import { Calendar } from 'lucide-react';

export default function Section(){
    return (
        <div className=" py-20 ">
            <div className=" w-4xl  m-auto flex justify-between">
                <div className="flex-1">
                    <div className="font-bold text-5xl mb-6">DigiAfrika– <br /> L'Afrique entre dans l'ère de la digitalisation publique</div>
                    <div className="mb-6 ">Nous accompagnons les institutions africaines dans leur transformation numérique. Grâce à notre expertise, nous concevons des plateformes sur-mesure pour automatiser les démarches administratives, juridiques et fiscales.</div>
                    <div className="bg-amber-50 text-blue-600 rounded p-2 flex w-70 text-sm">
                        <div> <Calendar /></div>
                        
                        <a href="">Planifier une analyse de votre projet</a>
                    </div>      

                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className=' bg-blue-900 w-90 h-70 rounded-xl flex items-center justify-center'>
                        <div className='bg-blue-800 w-70 h-50 rounded-xl'>
                            <div><img src="assets/imgs/icon.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
    }
    