import type { Metadata } from "next";
import EmtoneClient from '../../components/EmtoneClient'; // Ajustez le chemin vers votre Client Component si nécessaire

export const metadata: Metadata = {
  title: "EMTONE BTL Casablanca, Traitement Cellulite | Kinesvelt",
  description: "EMTONE BTL à Casablanca : radiofréquence et ondes de choc pour traiter les 5 causes de la cellulite. Résultats visibles dès les premières séances. Bilan offert.",
  alternates: {
    canonical: "https://kinesvelt.com/equipements/emtone-btl"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "name": "Kinesvelt",
      "url": "https://kinesvelt.com",
      "description": "Centre de traitement cellulite et amincissement à Casablanca. EMTONE BTL, LPG, EMS Neo et soins corps supervisés par une kinésithérapeute certifiée.",
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
          "name": "Qu'est-ce que le traitement EMTONE BTL ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'EMTONE BTL combine radiofréquence monopolaire et ondes de pression mécanique pour traiter les 5 causes de la cellulite simultanément. Non invasif, sans injection, sans temps de récupération."
          }
        },
        {
          "@type": "Question",
          "name": "L'EMTONE BTL est-il dangereux ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. L'EMTONE BTL est une technologie non invasive, cliniquement testée, sans effets secondaires significatifs. La sensation est une chaleur douce combinée à un massage profond. Aucune récupération n'est nécessaire."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le prix d'une séance EMTONE à Casablanca ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le tarif varie selon les zones et le protocole. Un bilan offert chez Kinesvelt permet d'obtenir un devis personnalisé selon votre profil et vos objectifs."
          }
        },
        {
          "@type": "Question",
          "name": "Quels sont les avis sur l'EMTONE BTL ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les retours sont généralement positifs : réduction visible de la cellulite, peau plus ferme et texture lissée. Les résultats varient selon le profil et le nombre de séances réalisées."
          }
        }
      ]
    }
  ]
};

export default function EmtonePage() {
  return (
    <>
      {/* Script JSON-LD injecté côté serveur pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Rendu du Client Component */}
      <EmtoneClient />
    </>
  );
}