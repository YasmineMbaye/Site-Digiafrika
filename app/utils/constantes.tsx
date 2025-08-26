import {
  Linkedin,
  BookText,
  CircleDollarSign,
  ShieldBan,
  Siren,
  Users,
  ShieldCheck,
  Scale,
  Database,
  GalleryVerticalEnd,
  Check,
  ArrowRight,
} from "lucide-react";

export const SITE_MAP: NavigationProps[] = [
  {
    name: "Acceuil",
    url: "/",
  },
  {
    name: "A propos",
    url: "/about",
  },
  {
    name: "Services",
    url: "/service",
  },
  {
    name: "Projets réalisés",
    url: "/project",
  },
  {
    name: "Actualités",
    url: "/actuality",
  },

  {
    name: "Contact",
    url: "/contact",
  },
];

export const ServiceCardIcons = 
  {
    digitalisationIcon: <BookText className="text-green-500 h-5" />,

    plateformeIcon: <CircleDollarSign className="text-green-500 h-5" />,

    refonteIcon: <ShieldBan className="text-green-500 h-5" />,
  };

export const ScoreCardData: ScoreProps[] = [
  {
    chiffre: "+10",
    description: "Plateformes développées",
  },
  {
    chiffre: "+3",
    description: "Pays partenaires",
  },
  {
    chiffre: "+200000",
    description: "Usagers connectés",
  },
];

export const VignetteCardData: VignetteProps[] = [
  {
    title: "e-Timbre",
    description:
      "Dématérialisation de l'achat et vérification des timbres fiscaux",
    nom: "Djibouti",
  },
  {
    title: "e-Vignette",
    description: "Paiement de la vignette automobile en ligne",
    nom: "Djibouti",
  },
  {
    title: "e-Enregistrement ",
    description: "Déclaration des actes notariés et fonciers",
    nom: "Djibouti",
  },
];

export const Mission_VisionData: Mission_VisionProps[] = [
  {
    title: "Notre mission",
    description:
      "Concevoir des plateformes intelligentes qui améliorent l'efficacité des administrations publiques africaines, renforcent la transparence, et facilitent l'accès aux services pour les citoyens.",
  },
  {
    title: "Notre vision",
    description:
      "Faire de l'Afrique un continent leader dans l'administration numérique grâce à des technologies souveraines, sécurisées et centrées sur l'humain.",
  },
];

export const ValeurCardIcons = 
  {
    
    innovationIcon: <Siren className="text-green-500 h-8 w-8" />,
    impactIcon: <Users className="text-green-500 h-8 w-8" />,
    integriteIcon: <ShieldCheck className="text-green-500 h-8 w-8" />,
    souveraineteIcon: <Scale className="text-green-500 h-8 w-8" />,
      }
  
;

export const EquipeCardData: EquipeCardProps[] = [
  {
    title: "Thiécoura TRAORE",
    soustitle: "Co-Fondateur & PDG",
    description:
      "Fort d'une expertise de plus de 20 ans acquise en Europe et en Afrique, M. TRAORE est diplômé en Télécommunications de Paris. Dirigeant fondateur de DT Telecom, une entreprise sénégalaise majeure dans le secteur des télécommunications, il est également reconnu comme formateur et conférencier expert dans son domaine.",
  },
  {
    title: "Iba",
    soustitle: "Co-Fondateur & Directeur Technique",
    description:
      "Titulaire d'un Master 2 en Big Data et Machine Learning de l'IAM de Dakar, M. TOLA KOGADOU cumule les fonctions de TechLead Développeur chez MARTEE et de Développeur Full-Stack indépendant. Son expertise couvre les domaines de la Data, du DevOps, ainsi que du développement web et mobile.",
  },
  {
    title: "Eugène Rodolphe MAZAMDA TANGUEU",
    soustitle: "Co-Fondateur & Directeur des Opérations",
    description:
      "Architecte Multi-cloud chevronné, M. MAZAMDA TANGUEU dirige les équipes DevOps et Data Engineering. Expert en DevSecOps et en architecture de sécurité, il est certifié sur les principales plateformes cloud (Azure, AWS, GCP) et apporte une vision stratégique aux infrastructures de DigiAfrika.",
  },
  {
    title: "Alioune DRAME",
    soustitle: "Co-Fondateur & Directeur des Produits",
    description:
      "Ingénieur en Génie Civil de formation, M. DRAME est titulaire d'un Master en Techniques Nouvelles de Construction et de Réhabilitation des Bâtiments. Son expertise technique et sa vision analytique lui permettent de concevoir des produits numériques parfaitement adaptés aux besoins des administrations africaines.",
  },
];

export const EquipeIcons = 
  {
    
    icon: <Linkedin className="text-blue-900 " />,
  };

  


export const SectionAdministrativeIcons=
  {
    
    digitalisationIcon: <BookText className="text-green-500 w-20 h-10" />,
    plateformeIcon: <CircleDollarSign className="text-green-500 w-20 h-10" />,
    refonteIcon: <Database className="text-green-500 w-20 h-10" />,
    conseilIcon: <Siren className="text-green-500 w-20 h-10" />,
    infraIcon: <GalleryVerticalEnd className="text-green-500 w-20 h-10" />,
  
  
  };





export const ActualityCardData: ActualityProps[] = [
  {
    date: "Avril 2025",
    title:
      "Lancement officiel de la mutualisation des plateformes e-Timbre, e-Vignette et e-TVA à Djibouti",
    description:
      "Le gouvernement de Djibouti a officiellement lancé une interface unifiée regroupant l'ensemble des services fiscaux dématérialisés...",
    nom: "Lancement",

    realise: "Par Équipe DigiAfrika",
    lire: "lire la suite",
    icon: <ArrowRight className="w-4 h-4" />,
  },
  {
    date: "Mars 2025",
    title:
      "DigiAfrika entame un projet de digitalisation foncière en Côte d'Ivoire",
    description:
      "Notre équipe a démarré un ambitieux projet de modernisation de la gestion foncière en partenariat avec le ministère de la Construction...",
    nom: "Nouveau projet",

    realise: "Par Jean Ndiaye",
    lire: "lire la suite",
    icon: <ArrowRight className="w-4 h-4" />,
  },
  {
    date: "Février 2025",
    title:
      "Nouveau partenariat signé avec le Ministère de la Transformation Digitale du Sénégal",
    description:
      "DigiAfrika est fière d'annoncer la signature d'un nouveau partenariat stratégique avec le Ministère de la Transformation Digitale...",
    nom: "Partenariat",

    realise: "Par Omar Keita",
    lire: "lire la suite",
    icon: <ArrowRight className="w-4 h-4" />,
  },
  {
    date: "Janvier 2025",
    title:
      "La numérisation des services publics : un levier de développement pour l'Afrique",
    description:
      "Comment la transformation numérique des administrations contribue à l'efficacité des services publics et au développement économique...",
    nom: "Article",

    realise: "Par Aminata Diop",
    lire: "lire la suite",
    icon: <ArrowRight className="w-4 h-4" />,
  },
  {
    date: "Décembre 2024",
    title: "Réussir l'implémentation d'un système d'e-gouvernement en Afrique",
    description:
      "Les facteurs clés de succès et les écueils à éviter lors de la mise en place d'un système d'administration électronique...",
    nom: "Guide",

    realise: "Par Équipe DigiAfrika",
    lire: "lire la suite",
    icon: <ArrowRight className="w-4 h-4" />,
  },
  {
    date: "Novembre 2024",
    title:
      "Retour d'expérience : un an après le déploiement de la plateforme e-Timbre",
    description:
      "Bilan et enseignements tirés après une année d'utilisation de la plateforme e-Timbre par les administrés et les fonctionnaires...",
    nom: "Retour d'expérience",

    realise: "Par Jean Ndiaye",
    lire: "lire la suite",
    icon: <ArrowRight className="w-4 h-4" />,
  },
];
