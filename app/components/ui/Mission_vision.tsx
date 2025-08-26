import { Children, type ReactNode } from "react";

export default function({title, children}:{title:Mission_VisionProps, children:ReactNode}){
    return(
        
           <div className= {`${title.width || "w-130"}`} > 
            <div className="text-2xl font-bold text-blue-900 mb-4">{title.title}</div>
            <div className="text text-gray-600 mb-4">{title.description}</div>
            
            <div>{children}</div>
           </div>
        
    )
}