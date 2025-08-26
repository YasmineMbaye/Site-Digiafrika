
import Button from "~/components/ui/Button";
import Buttonplanning from "~/components/ui/Buttonplanning";

import Equipe from "~/components/ui/Equipe";
import EquipeCard from "~/components/ui/EquipeCard";
import Footer from "~/components/ui/Footer";
import Mission_vision from "~/components/ui/Mission_vision";
import Rond from "~/components/ui/Rond";
import Section from "~/components/ui/Section";
import ServiceCard from "~/components/ui/ServiceCard";
import Traitvert from "~/components/ui/Traitvert";
import ValeurCard from "~/components/ui/ValeurCard";
import {EquipeIcons, Mission_VisionData, ValeurCardIcons } from "~/utils/constantes";
import { aboutLoader as loader } from "~/services/front-office/homeService.server";
import { useLoaderData } from "react-router";
import Titre from "~/components/ui/Titre";

export {loader}
export default function AboutView() {

  const data=useLoaderData<typeof loader>()
  return (

    <div>
      <Titre 
      titre={{
        title:data.titre.titre,
        description:data.titre.describtion,
        
      }}
      />

        <Section
        sectionProps={{
          background:"bg-white"
        }}>

          <div className="grid grid-cols-2 gap-20 justify-center">
            {data.missionvision.cards.map((card)=>
              <Mission_vision
              key={card.id}
              title={{title:card.title, description:card.subtitle}}
              
              > <Traitvert/>
              

              
              
               </Mission_vision>
              
              )}
              

              
          </div>

          
          
        </Section>

        <Section
        sectionProps={{
          title:data.valeur.title,
          description: data.valeur.describtion
        }}
        >
          <div className="grid grid-cols-2 gap-20">
            {data.valeur.cards.map((card)=>
             <ValeurCard
             key={card.id}
             text={{title:card.title, description:card.describtion, icon:card.id==1? ValeurCardIcons.innovationIcon: card.id==2? ValeurCardIcons.impactIcon: card.id==3? ValeurCardIcons.integriteIcon: ValeurCardIcons.souveraineteIcon}}
             width="w-130"
          />
            )}
          </div>
         

        </Section>

        <Section
        sectionProps={{
          title: data.equipe.titre,
          description:data.equipe.describtion,
          background:"bg-white"
          
        }}>
          <div className="grid grid-cols-2 gap-10 ">
            {data.equipe.cards.map((card)=>
            <EquipeCard
            key={card.id}
            text={{title:card.title, soustitle:card.soustitle, description:card.description}}
            width="w-120"/>
            )}
          </div>

        

        </Section>
      
      <Section
      sectionProps={{
        title:data.equipecard.titre,
        description:data.equipecard.describtion,
      }}>

        <div className="grid grid-cols-3 gap-30">
            {data.equipecard.cards.map((card)=>
            <Equipe
            key={card.id}
            text={{prenom:card.prenom, nom:card.title, description:card.description, icon:card.id==1? EquipeIcons.icon: card.id==2? EquipeIcons.icon: card.id==3? EquipeIcons.icon: card.id==4? EquipeIcons.icon: card.id==5? EquipeIcons.icon: card.id==6? EquipeIcons.icon: card.id==7? EquipeIcons.icon: card.id==8? EquipeIcons.icon: card.id==9? EquipeIcons.icon: card.id==10? EquipeIcons.icon: card.id==11? EquipeIcons.icon: card.id==12? EquipeIcons.icon: card.id==13? EquipeIcons.icon:  EquipeIcons.icon }}
            />
            )}
          </div>
        

      </Section>

      <Section
      sectionProps={{
        title:data.modernise.title,
        description:data.modernise.description,
      background:"bg-white",
      color:"text-blue-900",
      

      }}>

        <div className="grid grid-cols-2">
          {data.modernise.label.map((card)=>
          <Buttonplanning
          text={card.actionlabel}
          actionpath={card.actionpath}
          />,)}
          

        {data.modernise.label.map((card)=>
        

        <Button
        actionpath={card.actionbuttonpath}
        border="border-blue-900"
          background="bg-blue-900"
          hover="hover:bg-gray-100"
          hovertext="hover:text-blue-900"
          color="text-white"
        
        text={{
          nom: card.actionbuttonlabel,
          

        }
          
        }
        />
        )}
        
        </div>

      </Section>

      <Footer/>

    </div>
  );
}
