import Card from "~/components/ui/ServiceCard";
import Banner from "~/components/ui/Banner";
import Section from "~/components/ui/Section";
import Button from "~/components/ui/Button";
import { index } from "@react-router/dev/routes";
import { ServiceCardData } from "~/utils/constantes";

 
export default function HomeView() {
  return (
    <div className=" h-screen bg-gradient-to-r from-blue-900 to-blue-900/90 text-white  ">
      

      <Banner/>

      <Section
        sectionProps={{
        title: "Nos chiffres clés "  
      }}
      >
        <div className="w-full grid grid-cols-3 gap-5">
         {ServiceCardData.map((card, index)=>(
          <Card
          key={index}
          text={card}/>
         ))}
        </div>
      </Section>

      <Section
        sectionProps={{
        title: "Nos Services",
        description: "DigiAfrika accompagne les institutions africaines dans leur transformation numérique avec des solutions adaptées.",
      }}
      >
         <div className="w-full grid grid-cols-3 gap-5">
         {ServiceCardData.map((card, index)=>(
          <Card
          key={index}
          text={card}/>
         ))}
        </div>
        <Button text="my btn"/>
      </Section>

      
      
      
      
    </div>
  );
}
