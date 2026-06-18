import { Metadata } from 'next';
import Image from 'next/image';
import VisageServicesClient from '../../components/VisageServicesClient'; // Ajustez le chemin si nécessaire

// Métadonnées optimisées SEO avec canonical corrigée
export const metadata: Metadata = {
  title: 'Soins Visage Casablanca – Anti-Âge, HIFU & Hydrafacial | Kinesvelt',
  description: 'Soins visage médicaux à Casablanca : HIFU lifting, Hydrafacial, microneedling, radiofréquence, LPG Kobido. Supervisés par une kinésithérapeute certifiée. Bilan peau offert.',
  alternates: {
    canonical: "https://kinesvelt.com/prestations/visage"
  }
};

export default function PrestationsVisagePage() {
  return (
    <div className="bg-[#FAF8F7] min-h-screen">
      {/* Static Server-Rendered Hero Section */}
      <section className="relative w-full h-[400px] lg:h-[500px]">
        <div className="absolute inset-0 bg-gray-200">
          <Image 
            src="/visage.jpg" 
            alt="Soins Visage Casablanca" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl lg:text-[3.5rem] font-medium text-white mb-6 uppercase max-w-5xl leading-tight">
            Soins visage à Casablanca — résultats médicaux, sans chirurgie
          </h1>
          <p className="text-lg lg:text-xl text-white/95 max-w-3xl font-medium leading-relaxed">
            17 protocoles visage sur mesure, supervisés par une kinésithérapeute certifiée depuis 16 ans. Bilan peau offert.
          </p>
        </div>
      </section>

      {/* Interactive Client Component */}
      <VisageServicesClient />
    </div>
  );
}