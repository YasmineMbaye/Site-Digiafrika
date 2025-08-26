import type React from "react";

export default function Section({sectionProps,children, colordescription}:{sectionProps:SectionProps,children:React.ReactNode, colordescription?:string}){

        return(
            <section className={`shadow-md px-30 py-18 ${sectionProps.background || "bg-gray-100"}`}>
      <h2 className={`text-4xl font-bold text-center mb-6 ${sectionProps.color || "text-blue-900"}`} >{sectionProps.title}</h2>
      <div className= {`text-center mb-8 ${colordescription || "text-gray-700"}`} >{sectionProps.description}</div>
      <div className="flex justify-center  ">
        <div className="">{children}</div>
      </div>
      
    </section>
        )

    }
