

export default function Card({ text, width }: { text: ServiceProps, width?:string }) {
  return (
    
      <div className={`mb-10 bg-white shadow-xl rounded-xl ${width || "w-80"}`}>

      <div className="bg-green-500 rounded-t-xl h-1 "></div>
      
      <div className=" px-4 py-6 "> 

        <div className='bg-green-100 mb-4 w-12 h-12 rounded-full flex justify-center items-center shadow-2xl'>{text.icon}</div>
        <div className="mb-3 text-blue-900 text-xl font-bold">{text.title}</div>
        <div className="text-gray-600 text-sm">{text.description}</div>
      </div>
    </div>
  );
}
