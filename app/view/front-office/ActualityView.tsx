import Button from "~/components/ui/Button";
import Buttonplanning from "~/components/ui/Buttonplanning";
import Fonctionalite from "~/components/ui/Fonctionalite";
import Footer from "~/components/ui/Footer";
import Input from "~/components/ui/Input";
import RealisationCard from "~/components/ui/Realisationcard";
import Section from "~/components/ui/Section";
import Titre from "~/components/ui/Titre";
import VignetteCard from "~/components/ui/VignetteCard";
import { ActualityCardData, VignetteCardData } from "~/utils/constantes";
import {actualityLoader as loader } from "~/services/front-office/homeService.server"
import { useLoaderData } from "react-router";
export {loader}

export default function ActualityView() {
  const data= useLoaderData<typeof loader>()
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

       <div className="grid grid-cols-4 ">
         {data.button.map((button)=>
        <Button
        key={button.id}
        text={{nom:button.actionlabel}}
        actionpath={button.actionpath}
        color={button.id!==1? "text-gray-600":undefined}
        background={button.id!==1? "bg-gray-100":undefined}
        border={button.id!==1? "border-none":undefined}

      />
        
        )}
       </div>

       
      

      </Section>

      <Section
       sectionProps={{
        background:"bg-white"
       }}>

        <div className="grid grid-cols-3 gap-8 mb-15">
          {data.vignette.card.map((card)=>
        <VignetteCard
        
        key={card.id}
        vignette={{nom:card.nom, date:card.date, title:card.title, description:card.title}}
        backgroundcard="bg-white"
        colornom="text-green-500"
        colordate="text-gray-500"
        padding="p-2"
        height="h-50"
        text={card.photo}>

          <RealisationCard
                             key={card.id}
                             text={{realise:card.realise, lire:card.lire}} />
          

        </VignetteCard>
        )}
        </div>

        <Button
        text={{
          nom:data.vignette.button.nom
        }}
        actionpath={data.vignette.button.acttionpath}
        />

        

       </Section>


      <Section
      sectionProps={{
        title:data.modernise.title,
        description:data.modernise.description
        
      }}>

       <div className="flex gap-4">
        <Input/>
       <Button 
            text={{
                nom:data.modernise.actionlabel,
                
            }}
            background="bg-green-400"
            border="border-none"
            color="text-white"
            actionpath={data.modernise.actionpath}/>
            
       </div>
       


      </Section>

      

            <Footer/>
      
    </div>
  );
}
