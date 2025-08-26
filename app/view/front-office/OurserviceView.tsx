import Button from "~/components/ui/Button";
import Buttonplanning from "~/components/ui/Buttonplanning";
import Footer from "~/components/ui/Footer";
import Mission_vision from "~/components/ui/Mission_vision";
import Rond from "~/components/ui/Rond";
import Section from "~/components/ui/Section";
import SectionAdministrative from "~/components/ui/SectionAdministrative";
import Titre from "~/components/ui/Titre";
import Traitvert from "~/components/ui/Traitvert";
import {  SectionAdministrativeIcons } from "~/utils/constantes";
import { serviceLoader as loader } from "~/services/front-office/homeService.server";
import { useLoaderData } from "react-router";
export {loader}
export default function HomeView() {
  const data= useLoaderData<typeof loader>()
  return (
    <div className="">
      <Titre
      titre={{
        title:data.titre.titre,
        description:data.titre.describtion
      }}/>

      
      {data.digitalisation.card.map((card)=>

<SectionAdministrative
key={card.id}
title={{title:card.title, description:card.describtion, soustitre:card.soustitre,civil:card.civil, demande:card.demande, portail:card.portail, paiement:card.paiement, statut:card.statut, iconposition:card.iconposition}}> 
<Rond
key={card.id}
icon={card.id==1? SectionAdministrativeIcons.digitalisationIcon: card.id==2? SectionAdministrativeIcons.plateformeIcon: card.id==3? SectionAdministrativeIcons.refonteIcon: card.id==4? SectionAdministrativeIcons.conseilIcon: SectionAdministrativeIcons.infraIcon }/>


</SectionAdministrative>
)}


<Section
      sectionProps={{
        title:data.modernise.title,
        description:data.modernise.description,
      
      

      }}>

        <div className="grid grid-cols-2 ">
          <Buttonplanning
          text={data.modernise.actionlabel}
          actionpath={data.modernise.actionpath}/>

        <Button
        border="border-blue-900"
        background="bg-blue-900"
        hover="hover:bg-blue-800"
        hovertext="hover:text-white"
        color="text-white"
        actionpath={data.modernise.actionbuttonpath}
        text={{nom:data.modernise.actionbuttonlabel,

        }
        
          
        }/>
        </div>

      </Section>

      <Footer/>

      
    </div>

  );
}
