export default function FormulaireCard({text}:{text:FormulaireProps}){
    return(
        <div className="shadow-xl px-8 py-12 w-142">
            <div className=" ">
                <div className="text-blue-900 text-2xl font-bold mb-8">{text.title}</div>
                <div className="flex gap-6 mb-8 ">
                <div className="flex flex-col">
                    <label htmlFor="" className="text-sm text-gray-800">{text.nom} <span className="text-red-500">*</span></label>
                    <input type="text" className="w-60 border border-gray-300 py-2 px-4 rounded outline-green-400" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-sm text-gray-800">{text.email} <span className="text-red-500">*</span></label>
                    <input type="text" className="w-60 border border-gray-300 py-2 px-4 rounded outline-green-400" />
                </div>
                </div>

                <div className="flex gap-6 ">
                <div className="flex flex-col">
                    <label htmlFor="" className="text-sm text-gray-800">{text.organisation} </label>
                    <input type="text" className="w-60 border border-gray-300 py-2 px-4 rounded outline-green-400" />
                </div>
                <div className="flex flex-col mb-8">
                    <label htmlFor="" className="text-sm text-gray-800">{text.telephone}</label>
                    <input type="text" className="w-60 border border-gray-300 py-2 px-4 rounded outline-green-400" />
                </div>
                </div>

                <div className="flex flex-col mb-8">
                    <label htmlFor="" className="text-sm text-gray-800">{text.message}<span className="text-red-500">*</span></label>
                    <textarea name="" id="" className=" border border-gray-300 py-2 px-4 rounded outline-green-400"></textarea>
                </div>
                
               
                <div className="flex gap-3 mb-8">
                    <input type="checkbox" className="w-4" />
                    <div className="text-sm text-gray-800">{text.demonstration}</div>
                </div>
                <div className="bg-green-400 text-center py-2 rounded-xl text-white"><button>{text.envoyer}</button></div>

            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}