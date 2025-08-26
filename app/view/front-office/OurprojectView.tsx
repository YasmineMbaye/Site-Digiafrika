import Button from "~/components/ui/Button";
import Buttonplanning from "~/components/ui/Buttonplanning";
import Fonctionalite from "~/components/ui/Fonctionalite";
import Footer from "~/components/ui/Footer";
import Section from "~/components/ui/Section";
import Titre from "~/components/ui/Titre";
import VignetteCard from "~/components/ui/VignetteCard";
import { VignetteCardData } from "~/utils/constantes";
import {projectLoader as loader } from "~/services/front-office/homeService.server"
import { useLoaderData } from "react-router";
export {loader}

export default function HomeView() {
  const data=useLoaderData<typeof loader>()
  return (
    <div>
      

<Titre
    titre={{
      title:data.titre.titre,
      description:data.titre.describtion,
    }}/>


      <Section
      sectionProps={{
        
      }}>

       <div className="grid grid-cols-2 gap-12">
         {data.button.label.map((button)=>
        <Button
        key={button.id}
        color={button.id==2? "text-gray-600":undefined}
         border={button.id==2? "none":undefined}
         background={button.id==2? "border-none":undefined}
        actionpath={button.actionpath}
        text={{nom:button.actionlabel,
          
         }}
         
         
    />
        
        )}
       </div>

      

      </Section>

      <Section
      sectionProps={{
        background:"bg-white",
        
      }}>

       <div className="grid grid-cols-3 gap-10">
                   {data.sectionsvignettes.map((card)=>(
                   <VignetteCard
                   key={card.id}
                   vignette={{prenom:card.prenom, nom:card.nom, date:card.date, title:card.title, description:card.description}}
                   background="bg-blue-400">
                   
                   <Fonctionalite
                   key={card.id}
                   vignette={{civil:card.civil, demande:card.demande, portail:card.portail, paiement:card.paiement}} />
 
                   </VignetteCard>
                 )
                 )}
      </div>

                 

      

      </Section>

      <Section
            sectionProps={{
              title:data.modernise.title,
              description:data.modernise.description
            
      
            }}>
      
              
                <Buttonplanning
                text={data.modernise.actionlabel}
                actionpath={data.modernise.actionpath}/>
      
              
              
      
            </Section>

            <Footer/>
      
    </div>
  );
}
