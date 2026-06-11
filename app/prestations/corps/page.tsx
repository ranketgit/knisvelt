import { Metadata } from 'next';
import Image from 'next/image';
import CorpsServicesClient from '../../components/CorpsServicesClient'; // Ajustez le chemin si nécessaire

// Métadonnées optimisées SEO
export const metadata: Metadata = {
  title: 'Soins Corps & Lipocavitation Casablanca | Kinesvelt',
  description: 'Lipocavitation, LPG, EMS Neo et bodycontouring à Casablanca. Programmes corps sur mesure supervisés par une kinésithérapeute certifiée. Bilan offert.',
  alternates: {
    canonical: "/prestations/corps"
  }
};

export default function PrestationsCorpsPage() {
  return (
    <div className="bg-[#FAF8F7] min-h-screen">
      {/* Static Server-Rendered Hero Section */}
      <section className="relative w-full h-[400px] lg:h-[500px]">
        <div className="absolute inset-0 bg-gray-200">
         <Image 
            src="/corp.png" 
            alt="Prestations Corps" 
            fill 
            className="object-cover" 
            priority 
         />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl lg:text-[3.5rem] font-medium text-white mb-6 uppercase max-w-5xl leading-tight">
            Soins corps et lipocavitation à Casablanca — programmes sur mesure
          </h1>
          <p className="text-lg lg:text-xl text-white/95 max-w-3xl font-medium leading-relaxed">
            Amincissement localisé, remodelage corporel, traitement cellulite : chaque programme est construit après un bilan morphologique complet. Résultats visibles dès la 3e séance.
          </p>
        </div>
      </section>

      {/* Interactive Client Component (contient les onglets, pourquoi nous, faq et cta) */}
      <CorpsServicesClient />
    </div>
  );
}