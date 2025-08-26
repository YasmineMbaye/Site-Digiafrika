
export default function Card({ text, width }: { text: ValeurCardProps, width:string }) {
  return (
    
      <div className={`bg-white shadow-xl rounded-xl ${width || "w-80"}`}>

    
      <div className=" px-8 py-6 flex gap-4">
        <div>{text.icon}</div>
        <div>
          <div className="mb-3 text-blue-900 text-xl font-bold">{text.title}</div>
        <div className="text-gray-600 text-sm">{text.description}</div>
        </div>
      </div>
    </div>
  );
}
