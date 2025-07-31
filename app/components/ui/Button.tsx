
export default function Button({text}:{text:string}) {
  return (
    <div className="flex justify-center mt-5 ">
        <div className=" text-center w-50 py-2 rounded-sm border border-blue-800 text-blue-800 text-sm hover:bg-blue-900 hover:text-white">{text}</div>
      </div>
  )
}
