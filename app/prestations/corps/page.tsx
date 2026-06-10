import { Metadata } from 'next';
import Image from 'next/image';
import CorpsServicesClient from '../../components/CorpsServicesClient'; // Adjust path if needed

// Drop your metadata right here
export const metadata: Metadata = {
  title: 'Prestations Corps | Kinesvelt',
  description: 'Des solutions sur-mesure pour sculpter, raffermir et sublimer votre silhouette.',
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
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-medium text-white mb-6 uppercase">
            Prestations Corps
          </h1>
          <p className="text-lg text-white/90 max-w-2xl font-medium">
            Des solutions sur-mesure pour sculpter, raffermir et sublimer votre silhouette.
          </p>
        </div>
      </section>

      {/* Interactive Client Component */}
      <CorpsServicesClient />
    </div>
  );
}