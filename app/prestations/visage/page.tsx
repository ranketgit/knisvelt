import { Metadata } from 'next';
import Image from 'next/image';
import VisageServicesClient from '../../components/VisageServicesClient'; // Adjust the import path as needed

export const metadata: Metadata = {
  title: 'Prestations Visage | KINESVELT by Imane D',
  description: 'Découvrez nos soins du visage : remodelage, contouring, soins spécifiques et traitements anti-âge pour une peau éclatante.',
  alternates: {
    canonical: "/prestations/visage"
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
            alt="Prestations Visage" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-medium text-white mb-6 uppercase">
            Prestations Visage
          </h1>
          <p className="text-lg text-white/90 max-w-2xl font-medium">
            KINESVELT by Imane D
          </p>
        </div>
      </section>

      {/* Interactive Client Component */}
      <VisageServicesClient />
    </div>
  );
}