export default function RealisationCard({text}:{text:ActualityProps}){
    return(
        <div className="flex justify-between mt-10 mb-4">
            <div className="text-sm text-gray-500">{text.realise}</div>
            <div className="flex gap-1 ">
                <div className="text-blue-900 text-sm ">{text.lire} </div>
                <div className="text-blue-900 text-sm flex items-center" >{text.icon}</div>
            </div>
        </div>
    )
}