import type { Metadata } from "next";
import HifuVaginalClient from '../../components/HifuVaginalClient'; // Ajustez le chemin vers votre dossier components

export const metadata: Metadata = {
  title: "HIFU Vaginal Casablanca, Rajeunissement Intime | Kinesvelt",
  description: "HIFU vaginal à Casablanca pour retrouver tonus, confort et bien-être intime. Traitement non chirurgical supervisé par une kinésithérapeute certifiée. Bilan offert.",
  alternates: {
    canonical: "https://kinesvelt.com/prestations/hifu-vaginal"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "name": "Kinesvelt",
      "url": "https://kinesvelt.com",
      "description": "Centre de rajeunissement intime et amincissement à Casablanca. HIFU vaginal, soins corps et visage supervisés par une kinésithérapeute certifiée.",
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
          "name": "Est-ce que le HIFU vaginal est efficace ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le HIFU vaginal est cliniquement validé pour le raffermissement des tissus intimes. Les résultats incluent une amélioration du tonus vaginal, une meilleure lubrification et une réduction des fuites urinaires légères dès le premier protocole de 3 séances."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que la HIFU en gynécologie ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En gynécologie, le HIFU consiste à appliquer des ultrasons focalisés sur les tissus vaginaux pour stimuler la production de collagène. Alternative non chirurgicale au rajeunissement vaginal, sans injection ni anesthésie."
          }
        },
        {
          "@type": "Question",
          "name": "Quels sont les inconvénients du traitement HIFU vaginal ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le HIFU vaginal est bien toléré. Légère chaleur ou sensibilité possible pendant la séance, qui disparaissent rapidement. Les résultats s'installent sur 4 à 8 semaines. Contre-indiqué pendant la grossesse et en cas d'infection vaginale active."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de séances de HIFU vaginal sont nécessaires ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le protocole comprend une cure de 3 séances, espacées selon les recommandations cliniques. L'espacement est défini lors de votre prise en charge chez Kinesvelt."
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