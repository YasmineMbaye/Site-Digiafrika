import type { ReactNode } from "react";

export default function VignetteCard({
  vignette, background, children, backgroundcard, color, colornom, colordate, padding, height, text
}: {
  vignette: VignetteProps; background?:string, children?: ReactNode; backgroundcard?:string; color?:string, colornom?:string; colordate?:string; padding?:string; height?:string; text?:string;
}) {
  return (
    <div className="rounded-xl bg-white shadow-xl">
      <div className={` width-80 bg-gray-200  rounded-t-xl flex justify-center items-center ${height || ""} `}><div className="text-gray-500" >{text}</div></div>
      <div className="w-80 ">
      
      <div className={`rounded-t-xl text-sm px-4 py-2 flex justify-between  ${color || "text-white "} ${backgroundcard || " bg-blue-900 "}`}>
        <div className="flex gap-2">
          <div className=" text-xs m-auto ">{vignette.prenom}</div>
        <div className={` m-auto ${colornom || "text-white "}`} >{vignette.nom}</div>
        </div>
        <div className={` p-1 rounded ${background || " "} ${colordate || "text-white "}`}>{vignette.date}</div>
      </div>
      <div className={` px-6  ${padding || "py-8"}`}>
        <div className="text-xl font-bold text-blue-900 mb-2">
          {vignette.title}
        </div>
        <div className="text-gray-600 text-sm mb-4">{vignette.description}</div>
        <div className="">{children}</div>

        
      </div>
    </div>
    </div>
  );
}
