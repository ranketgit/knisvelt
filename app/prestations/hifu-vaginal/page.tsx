import type { Metadata } from "next";
import HifuVaginalClient from '../../components/HifuVaginalClient'; // Ajustez le chemin vers votre dossier components

export const metadata: Metadata = {
  title: "HIFU Vaginal Casablanca, Rajeunissement Intime | Kinesvelt",
  description: "HIFU vaginal à Casablanca pour retrouver tonus, confort et bien-être intime. Traitement non chirurgical supervisé par une kinésithérapeute certifiée. Bilan offert.",
  alternates: {
    canonical: "https://kinesvelt.com/prestations/hifu-vaginal"
  },
  openGraph: {
    title: "HIFU Vaginal à Casablanca – Rajeunissement Intime Sans Chirurgie | Kinesvelt",
    description: "Traitement HIFU vaginal non chirurgical à Casablanca. Raffermissement intime, réduction des fuites urinaires, consultation gratuite. Centre Kinesvelt.",
    url: "https://kinesvelt.com/prestations/hifu-vaginal",
    images: ["/new-services/19.jpeg"],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIFU Vaginal à Casablanca – Rajeunissement Intime Sans Chirurgie | Kinesvelt",
    description: "Traitement HIFU vaginal non chirurgical à Casablanca. Raffermissement intime, réduction des fuites urinaires, consultation gratuite. Centre Kinesvelt.",
    images: ["/new-services/19.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://kinesvelt.com/prestations/hifu-vaginal/#business",
      "name": "Kinesvelt",
      "description": "Centre de bien-être, minceur et soins intimes à Casablanca. Traitements HIFU vaginal, amincissement et coaching sportif.",
      "url": "https://kinesvelt.com",
      "telephone": "+212522217391",
      "email": "contact@kinesvelt.ma",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Résidence AL ANDALOUS, Taddart, Californie",
        "addressLocality": "Casablanca",
        "addressRegion": "Casablanca-Settat",
        "addressCountry": "MA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.5731,
        "longitude": -7.5898
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:30"
      },
      "priceRange": "$$"
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://kinesvelt.com/prestations/hifu-vaginal/#procedure",
      "name": "HIFU Vaginal à Casablanca",
      "alternateName": "High Intensity Focused Ultrasound vaginal",
      "procedureType": "https://schema.org/NoninvasiveProcedure",
      "howPerformed": "Application d'ultrasons focalisés de haute intensité sur les tissus vaginaux pour stimuler la production de collagène",
      "preparation": "Consultation initiale gratuite pour évaluer l'indication",
      "followup": "Reprise immédiate des activités. Résultats progressifs sur 4 à 8 semaines.",
      "bodyLocation": "Zone vaginale",
      "status": "https://schema.org/EventScheduled"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kinesvelt.com/prestations/hifu-vaginal/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://kinesvelt.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Prestations",
          "item": "https://kinesvelt.com/prestations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Prestations Intimes",
          "item": "https://kinesvelt.com/prestations/intime"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "HIFU Vaginal Casablanca",
          "item": "https://kinesvelt.com/prestations/hifu-vaginal"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://kinesvelt.com/prestations/hifu-vaginal/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Est-ce que le HIFU vaginal est efficace ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le HIFU vaginal est une technologie cliniquement validée pour le raffermissement des tissus intimes. Les résultats sont documentés : amélioration du tonus vaginal, meilleure lubrification, réduction des fuites urinaires légères. La majorité des patientes constatent une différence réelle dès les premières semaines suivant le protocole."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que la HIFU en gynécologie ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En gynécologie, le HIFU consiste à appliquer des ultrasons focalisés sur les tissus vaginaux pour déclencher la production de collagène et raffermir les parois. C'est une approche non chirurgicale, sans injection ni anesthésie, qui agit en profondeur sur les tissus. Elle est utilisée pour traiter le relâchement vaginal, la sécheresse et les fuites urinaires légères."
          }
        },
        {
          "@type": "Question",
          "name": "Quels sont les inconvénients du traitement HIFU vaginal ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le traitement est généralement bien toléré. Quelques patientes ressentent une légère chaleur ou une légère sensibilité pendant la séance, qui disparaissent rapidement. Les résultats ne sont pas immédiats : ils s'installent progressivement sur 4 à 8 semaines. Le traitement est contre-indiqué pendant la grossesse et en cas d'infection vaginale active."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de séances sont nécessaires ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le protocole comprend une cure de 3 séances. L'espacement entre les séances est défini selon les recommandations du protocole, lors de votre prise en charge chez Kinesvelt."
          }
        },
        {
          "@type": "Question",
          "name": "Le HIFU vaginal est-il douloureux ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La grande majorité des patientes décrivent une sensation de chaleur douce ou de légers picotements pendant la séance. Le traitement est réalisé sans anesthésie. Aucune douleur n'est ressentie après la séance."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre le HIFU vaginal et le laser CO2 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le HIFU vaginal agit en profondeur sur les tissus via des ultrasons focalisés pour stimuler la production de collagène et d'élastine. Le laser CO2 agit principalement en surface sur la muqueuse vaginale. Le HIFU ne nécessite aucun temps de récupération, contrairement au laser qui peut entraîner de légères irritations."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on faire le HIFU vaginal après un accouchement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le HIFU vaginal est particulièrement indiqué pour les femmes souhaitant retrouver la tonicité intime après un ou plusieurs accouchements. Un délai minimum de 3 mois après l'accouchement est recommandé avant de commencer le traitement."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps durent les résultats du HIFU vaginal ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les résultats du HIFU vaginal durent généralement entre 12 et 18 mois, selon le mode de vie et les facteurs hormonaux. Une séance d'entretien annuelle peut être recommandée pour prolonger les bénéfices du traitement."
          }
        }
      ]
    }
  ]
};

export default function HifuVaginalPage() {
  return (
    <>
      {/* JSON-LD Script pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Client Component pour l'interactivité */}
      <HifuVaginalClient />
    </>
  );
}