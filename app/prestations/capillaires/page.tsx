import type { Metadata } from "next";
import CapillairesClient from '../../components/CapillairesClient';

export const metadata: Metadata = {
  title: "Microneedling Cheveux Casablanca | Kinesvelt",
  description: "Microneedling capillaire à Casablanca pour freiner la chute des cheveux et stimuler la repousse. Supervisé par une kinésithérapeute certifiée. Bilan offert.",
  alternates: {
    canonical: "https://kinesvelt.com/prestations/capillaires"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "name": "Kinesvelt",
      "url": "https://kinesvelt.com",
      "description": "Centre de soins capillaires et amincissement à Casablanca. Microneedling cheveux supervisé par une kinésithérapeute certifiée.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Résidence Al Andalous, Taddart, Californie",
        "addressLocality": "Casablanca",
        "addressCountry": "MA"
      },
      "telephone": "+212522217391"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce que le microneedling pour cheveux ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le microneedling capillaire consiste à créer de micro-perforations dans le cuir chevelu pour stimuler la circulation sanguine, réactiver les follicules pileux et améliorer la pénétration des sérums actifs. Méthode non chirurgicale pour traiter la chute des cheveux."
          }
        },
        {
          "@type": "Question",
          "name": "Le microneedling est-il efficace pour les cheveux ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le microneedling capillaire est reconnu pour stimuler la repousse en réactivant les follicules dormants, en améliorant la microcirculation et en renforçant les racines affaiblies. Les résultats dépendent du profil capillaire et du protocole suivi."
          }
        },
        {
          "@type": "Question",
          "name": "Est-ce que le microneedling cheveux fait mal ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La sensation est légère, généralement un léger picotement. Aucune anesthésie n'est nécessaire et vous reprenez vos activités normalement après la séance."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le tarif du microneedling cheveux à Casablanca ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le tarif varie selon le protocole. Un bilan capillaire gratuit chez Kinesvelt permet d'obtenir un devis personnalisé selon votre profil et vos objectifs."
          }
        }
      ]
    }
  ]
};

export default function PrestationsCapillairesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CapillairesClient />
    </>
  );
}