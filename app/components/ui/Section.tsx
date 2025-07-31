import type React from "react";

export default function Sectionitems({sectionProps,children}:{sectionProps:SectionProps,children:React.ReactNode}){

        return(
            <section className=" bg-gray-100 shadow-md px-30 py-18">
      <h2 className="text-4xl font-bold text-blue-950 text-center mb-6">{sectionProps.title}</h2>
      <div className="text-gray-700 text-center mb-8">{sectionProps.description}</div>
      <div className="flex justify-center mb-6">
        <div className="mb-6">{children}</div>
      </div>
      
    </section>
        )

    }
