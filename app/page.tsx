import type { Metadata } from "next";
import Hero from "./components/Hero";
import ExpertSolutions from "./components/ExpertSolutions"
import ProgramsSection from "./components/ProgramsSection"
import OwnerExpertise from "./components/Onwer";
import Testimonials from "./components/Testimonials";
import Prestations from "./components/Services";
import Technologies from "./components/Technologies";
import Localisation from "./components/Localisation";
import FAQ from "./components/Faq";
import CtaFinal from "./components/CtaFinal";

export const metadata: Metadata = {
  title: "Centre d'Amincissement Casablanca | Kinesvelt",
  description: "Kinesvelt, centre d'amincissement à Casablanca depuis 16 ans. Programmes sur mesure, technologies FDA, épilation laser. Bilan gratuit sans engagement.",
  alternates: {
    canonical: "https://kinesvelt.com"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HealthClub", "LocalBusiness"],
      "@id": "https://kinesvelt.com/#business",
      "name": "Kinesvelt by Imane Daoudi",
      "alternateName": "Centre Kinesvelt Casablanca",
      "description": "Centre d'amincissement à Casablanca spécialisé en programmes minceur sur mesure, kinésithérapie, suivi nutritionnel, bien être et épilation laser. Équipements certifiés FDA.",
      "url": "https://kinesvelt.com",
      "telephone": "+212522217391",
      "email": "contact@kinesvelt.ma",
      "priceRange": "$$",
      "currenciesAccepted": "MAD",
      "paymentAccepted": "Cash, Carte bancaire",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Résidence Al Andalous, Lotissement Ouled Taleb, Parallèle Californie, Boulevard Al Qods",
        "addressLocality": "Casablanca",
        "addressRegion": "Casablanca-Settat",
        "postalCode": "20470",
        "addressCountry": "MA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.5331875",
        "longitude": "-7.6166875"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "15:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Casablanca" },
        { "@type": "AdministrativeArea", "name": "Maarif, Casablanca" },
        { "@type": "AdministrativeArea", "name": "Oulfa, Casablanca" },
        { "@type": "AdministrativeArea", "name": "Sidi Maarouf, Casablanca" },
        { "@type": "AdministrativeArea", "name": "Bouskoura, Casablanca" },
        { "@type": "AdministrativeArea", "name": "Ain Sebaa, Casablanca" },
        { "@type": "AdministrativeArea", "name": "Dar Bouazza, Casablanca" },
        { "@type": "City", "name": "Mohammedia" }
      ],
      "founder": {
        "@type": "Person",
        "name": "Imane Daoudi",
        "jobTitle": "Kinésithérapeute et nutrithérapeute"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Prestations Kinesvelt Casablanca",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Programme d'amincissement sur mesure",
              "url": "https://kinesvelt.com/le-centre"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Épilation laser définitive Casablanca",
              "url": "https://kinesvelt.com/prestations/epilation-laser"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Soins du visage",
              "url": "https://kinesvelt.com/prestations/visage"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Prestations corps",
              "url": "https://kinesvelt.com/prestations/corps"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Soins capillaires",
              "url": "https://kinesvelt.com/prestations/capillaires"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "200",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Mounia Bouzobaa" },
          "reviewBody": "Accueil chaleureux, professionnalisme, objectif atteint en un mois et vingt jours."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Imane Moussaoui" },
          "reviewBody": "Meilleur soin de visage à Casablanca, centre très propre, la praticienne est très professionnelle, je recommande vivement."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Nouhaila Ouahdani" },
          "reviewBody": "Je suis très satisfaite des résultats obtenus en si peu de temps, l'équipe est très professionnelle. Je recommande Kinesvelt."
        }
      ],
      "sameAs": [
        "https://www.instagram.com/imane.d/",
        "https://www.facebook.com/Kinesvelt/"
      ],
      "hasMap": "https://www.google.com/maps/place/KINESVELT+BY+IMANE+DAOUDI/@33.5331875,-7.6166875,14z"
    },
    {
      "@type": "WebSite",
      "@id": "https://kinesvelt.com/#website",
      "url": "https://kinesvelt.com",
      "name": "Kinesvelt",
      "inLanguage": "fr-MA",
      "publisher": {
        "@id": "https://kinesvelt.com/#business"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://kinesvelt.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quel est le meilleur centre d'amincissement à Casablanca ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kinesvelt est reconnu parmi les meilleurs centres d'amincissement à Casablanca grâce à ses 16 ans d'expertise, ses équipements certifiés FDA et ses programmes 100 % personnalisés. Chaque programme est encadré par Imane Daoudi, kinésithérapeute et nutrithérapeute certifiée."
          }
        },
        {
          "@type": "Question",
          "name": "Le centre Kinesvelt est-il accessible depuis le Maarif et l'Oulfa ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Kinesvelt est situé au quartier Californie à Casablanca, facilement accessible depuis le Maarif, l'Oulfa, Sidi Maarouf, Bouskoura, Ain Sebaa et Dar Bouazza. Adresse : Résidence Al Andalous, Lotissement Ouled Taleb, Boulevard Al Qods."
          }
        },
        {
          "@type": "Question",
          "name": "Quels programmes d'amincissement propose Kinesvelt à Casablanca ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kinesvelt propose des programmes minceur personnalisés combinant suivi nutritionnel, équipements certifiés FDA (cryolipolyse, lipocavitation, radiofréquence, pressothérapie) et coaching. Chaque programme débute par un bilan corporel gratuit et sans engagement."
          }
        },
        {
          "@type": "Question",
          "name": "Kinesvelt propose-t-il l'épilation laser à Casablanca ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Kinesvelt propose l'épilation laser définitive à Casablanca avec une triple technologie Alexandrite, Diode et Nd:YAG adaptée à tous les phototypes, y compris les peaux mates et foncées les plus courantes au Maroc."
          }
        },
        {
          "@type": "Question",
          "name": "Le bilan corporel est-il gratuit chez Kinesvelt ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Kinesvelt offre un bilan corporel complet gratuit et sans engagement à chaque nouvelle personne. Ce bilan inclut une analyse par impédancemètre et une consultation avec Imane Daoudi pour définir le programme adapté à vos objectifs."
          }
        },
        {
          "@type": "Question",
          "name": "Kinesvelt accueille-t-il les hommes et les femmes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le centre d'amincissement Kinesvelt à Casablanca accueille les femmes et les hommes pour l'ensemble des programmes minceur, bien être et épilation laser. Les boxes privés garantissent confort et confidentialité à chaque séance."
          }
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <Hero />
    <OwnerExpertise />
    <ExpertSolutions />
    <ProgramsSection />
    <Testimonials />
    <Prestations />
    <Technologies />
    <Localisation />
    <FAQ />
    <CtaFinal />
    </>
  );
}
