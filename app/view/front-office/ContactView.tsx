import Footer from "~/components/ui/Footer";
import Iconereseau from "~/components/ui/Iconereseau";
import Section from "~/components/ui/Section";
import Titre from "~/components/ui/Titre";
import FormulaireCard from "~/components/ui/FormulaireCard";
import CoordonneCard from "~/components/ui/CoordonneCard";
import {contactLoader as loader} from "~/services/front-office/homeService.server"
import { useLoaderData } from "react-router";
export {loader}

export default function HomeView() {
  const data=useLoaderData<typeof loader>()
  return (
    <div>
      <Titre
        titre={{
          title:data.titre.titre,
          description:data.titre.describtion
        }}/>

        <Section 
        sectionProps={{
          background:"bg-white"
        }}>

          <div className="grid grid-cols-2 gap-50">
            <FormulaireCard
            text={{title:data.formulaire.title, nom:data.formulaire.nom, email: data.formulaire.email, organisation:data.formulaire.organisation, telephone:data.formulaire.telephone, message:data.formulaire.message, demonstration:data.formulaire.demonstration, envoyer:data.formulaire.envoyer}}/>
          <CoordonneCard
          text={{coordonne:data.coordonne.coordonne, adresse:data.coordonne.adresse, ville:data.coordonne.ville, telephone:data.coordonne.telephone, numero:data.coordonne.numero, email:data.coordonne.email, mail:data.coordonne.mail, ouverture:data.coordonne.ouverture, heure:data.coordonne.heure, google:data.coordonne.google}}/>
          </div>

        </Section>

        


        <Section
              sectionProps={{
                title:data.modernise.title
                
              }}>
        
               <Iconereseau/>
        
              </Section>

        
              <Footer/>
    </div>
  );
}
