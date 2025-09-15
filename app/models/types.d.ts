
/***
 * @type Props de navigation
 * @property name :string  nom de l url
 * @property url :string chemein relatuf
 * @example 
 * 
 */

type HeaderbackProps = {
  name: string; // ou "User" si tu as un type défini
}

type Credentials={
    username:string;
    password:string;
}

type SessionData={
    id:string;
    username:string;
    role:string
    mustchangepassword?: boolean

}

type SessionFlash={
    error:string

}

type NavigationProps={
    name: string;
    url:string;
}

type SectionProps={
    title?:string;
    description?:string;
    background?: string;
    color?:string;
    icon?:ReactNode;
}

type ServiceProps={
    
    title:string;
    description:string;
   icon:ReactNode;
   
}

type ScoreProps={
    chiffre:string;
    description:string;
}
type VignetteProps={
    title?:string;
    description?:string;
    prenom?:string;
    nom?:string;
    date?:string;
    soustitre?:string;
    civil?:string;
    demande?:string;
    portail?:string;
    paiement?:string;
    statut?:string;
    icon?:ReactNode;
}
type PartenaireProps={
    title:string;
}
type TitreProps={
    title:string;
    description:string;
}
type Mission_VisionProps={
    title:string;
    description: string;
    width?:string;
    
}

type ValeurCardProps={
    
    title:string;
    description:string;
   icon:ReactNode;
   
}
type EquipeCardProps={
    
    title:string;
    soustitle:string;
    description:string;
   icon?:ReactNode;
   
}

type EquipeProps={

    prenom:string,
    nom:string;
    description:string;
   icon?:ReactNode;
   
}
type ButtonProps={
    nom:string;
    
}

type SectionAdministrativeProps={
    title:string;
    description: string;
    soustitre:string;
    civil:string;
    demande:string;
    portail:string;
    paiement:string;
    statut:string;
    width?:string;
    iconposition:string;
    icon?:ReactNode;
    
}

type FormulaireProps={
    title:string;
    nom:string;
    email:string;
    organisation:string;
    telephone:string;
    message:string;
    
    demonstration:string;
    envoyer:string;
}
type Coordonne={
    coordonne:string;
    adresse:string;
    ville:string;
    telephone:string;
    numero:string;
    email:string;
    mail:string;
    ouverture:string;
    heure:string;
    google:string;
    
}

type  ActualityProps={
    title?:string;
    description?:string;
    nom?:string;
    date?:string;
    realise:string;
    lire?: string;
    icon?:ReactNode;
}

