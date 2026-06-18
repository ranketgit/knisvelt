import { Metadata } from 'next';
import Image from 'next/image';
import VisageServicesClient from '../../components/VisageServicesClient'; // Ajustez le chemin si nécessaire

// Métadonnées optimisées SEO
export const metadata: Metadata = {
  title: 'Soins & Prestations Visage Casablanca | Kinesvelt',
  description: 'Prestations visage à Casablanca : HIFU, Hydrafacial, microneedling et anti-âge. Supervisées par une kinésithérapeute certifiée. Bilan peau offert.',
  alternates: {
    canonical: "https://kinesvelt.com/prestations/visage"
  }
};

// Schema Markup JSON-LD pour les Rich Snippets Google
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BeautySalon",
      "@id": "https://kinesvelt.com/#business",
      "name": "Kinesvelt",
      "url": "https://kinesvelt.com",
      "description": "Centre de prestations visage et amincissement à Casablanca. HIFU, Hydrafacial, microneedling, radiofréquence. Supervisé par une kinésithérapeute certifiée.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Résidence Al Andalous, Taddart, Californie",
        "addressLocality": "Casablanca",
        "addressCountry": "MA"
      },
      "telephone": "+212522217391",
      "openingHours": "Mo-Fr 09:00-19:30",
      "priceRange": "MAD"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quels sont les différents types de soins visage proposés chez Kinesvelt ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chez Kinesvelt, les prestations visage couvrent 3 catégories : remodelage & contouring (LPG, contouring ovale, double menton), soins spécifiques (Hydrafacial, microneedling, traitement acné, mésothérapie), et anti-âge & lifting (HIFU, radiofréquence fractionnée, Exilis BTL). Chaque protocole est sélectionné après un bilan peau gratuit."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le soin visage le plus efficace pour l'anti-âge ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le HIFU lifting visage est le traitement anti-âge non chirurgical le plus puissant. Il agit sur les couches profondes du visage sans bistouri. L'Exilis BTL et la radiofréquence fractionnée complètent les résultats progressivement."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le meilleur soin pour rajeunir le visage sans chirurgie ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le HIFU lifting visage reste la référence. Le Pack Anti-Âge combine plusieurs technologies selon le bilan peau. Une séance de HIFU par an suffit pour maintenir les résultats."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le prix d'un Hydrafacial à Casablanca chez Kinesvelt ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le tarif varie selon le protocole choisi. Un bilan peau gratuit permet d'établir un devis personnalisé selon votre type de peau et vos objectifs."
          }
        }
      ]
    }
  ]
};

export default function PrestationsVisagePage() {
  return (
    <div className="bg-[#FAF8F7] min-h-screen">
      {/* Injection du JSON-LD pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Static Server-Rendered Hero Section */}
      <section className="relative w-full h-[400px] lg:h-[500px]">
        <div className="absolute inset-0 bg-gray-200">
          <Image 
            src="/visage.jpg" 
            alt="Prestations Visage Casablanca" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl lg:text-[3.5rem] font-medium text-white mb-6 uppercase max-w-5xl leading-tight">
            Prestations visage à Casablanca — soins avancés, résultats naturels
          </h1>
          <p className="text-lg lg:text-xl text-white/95 max-w-3xl font-medium leading-relaxed">
            HIFU, Hydrafacial, microneedling, contouring et anti-âge. Supervisés par une kinésithérapeute certifiée depuis 16 ans. Bilan peau offert.
          </p>
        </div>
      </section>

      {/* Interactive Client Component */}
      <VisageServicesClient />
    </div>
  );
}