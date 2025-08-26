export default function Titre ({titre}:{titre:TitreProps}){
    return(
        <div className="bg-blue-900 text-white py-18">
            <div className=" text-center text-4xl mb-6 font-bold">{titre.title}</div>
            <div className="text-center mx-70 text-xl ">{titre.description}</div>
        </div>
    )
}