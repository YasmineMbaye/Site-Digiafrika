import Card from "~/components/ui/ServiceCard";
import Banner from "~/components/ui/Banner";
import Section from "~/components/ui/Section";
import Button from "~/components/ui/Button";
import { index } from "@react-router/dev/routes";
import { ScoreCardData, ServiceCardIcons, VignetteCardData } from "~/utils/constantes";
import { ScoreCard } from "~/components/ui/ScoreCard";
import VignetteCard from "~/components/ui/VignetteCard";
import PartenaireCard from "~/components/ui/PartenaireCard";
import AppelContact from "~/components/ui/AppelContact";
import Footer from "~/components/ui/Footer";
import Fonctionalite from "~/components/ui/Fonctionalite";
import {homeLoader as loader } from "~/services/front-office/homeService.server";
import { useLoaderData } from "react-router";

export { loader}
 
export default function HomeView() {
  const data =useLoaderData<typeof loader>() 
  return (
    <div className=" h-screen bg-gradient-to-r from-blue-900 to-blue-900/90 text-white  ">
      

      <Banner
      title= {data.banner.title}
      describtion={data.banner.describtion}
      actionlabel={data.banner.actionlabel}
      actionpath={data.banner.actionpath}
      subtitle={data.banner.subtitle}
      />

      <Section
        sectionProps={{
        title: data.reatingsection.title,
        
      }}
      >
        <div className="w-full grid grid-cols-3 gap-5">
         {data.reatingsection.cards.map((card)=>(
          <ScoreCard
          key={card.id}
          score={{chiffre:card.score,description:card.describtion}}/>
         ))}
        </div>

              </Section>

      <Section
        sectionProps={{
        title: data.servicesection.title,
        description: data.servicesection.describtion,
        background: "bg-white"
      }}
      >
         <div className=" w-full grid grid-cols-3 gap-5 ">
         {data.servicesection.cards.map((card)=>(
          <Card
          key={card.id}
          text={{title:card.title, description:card.describtion, icon:card.id==1? ServiceCardIcons.digitalisationIcon: card.id==2? ServiceCardIcons.plateformeIcon: ServiceCardIcons.refonteIcon}}/>
         ))}
        </div>
        <Button  text={{
          nom:data.servicesection.actionlabel
        }}
        actionpath={data.servicesection.actionpath}/>
      </Section>

      <Section
      sectionProps={{
        title:data.projetsection.title,
        description:data.projetsection.describtion,
      }}>
        
          <div className="grid grid-cols-3 gap-5 mb-10">
            {data.projetsection.cards.map((card)=>(
            <VignetteCard
            key={card.id}
            vignette={{title:card.title, description:card.describtion, nom:card.subtitle}}>
              
            </VignetteCard>
          )
          )}
          </div>
        
        <Button text={{
          nom:data.projetsection.actionlabel
        }}
        actionpath={data.projetsection.actionpath}/>

      </Section>
      
    <Section 
    sectionProps={{
      title:data.partenairesection.title,
      background:"bg-blue-900",
      color:"text-white"
    }}>

      {data.partenairesection.card.map((item)=>
      <PartenaireCard
      
      soustitle={item.soustitle}
      textcontent={item.textcontent}
      describtion={item.describtion}

      />
      )}
      

    </Section>

     
    <Section 
    sectionProps={{ 
      background:"bg-white",
    }}>
      <AppelContact
      title={data.modernisersection.title}
       describtion={data.modernisersection.describtion}
        actionlabel={data.modernisersection.actionlabel}
         actionpath={data.modernisersection.actionpath}
      />

    </Section>
      
      <Footer/>
      
      
    </div>
  );
}
