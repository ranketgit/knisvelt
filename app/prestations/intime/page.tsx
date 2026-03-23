import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "HIFU Vaginal | Kinesvelt Casablanca",
  description: "Soins intimes de haute technologie HIFU vaginal pour votre bien-être et confort intime.",
};

export default function HifuVaginalPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">
              Prestations Intime
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">
            HIFU Vaginal
          </h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Left Column: Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[400px] rounded-[2rem] overflow-hidden bg-gray-100">
               <Image src="/services/3.jpg" alt="HIFU Vaginal" fill className="object-cover" />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>
                Une technologie non invasive utilisant les ultrasons focalisés de haute intensité (HIFU) pour stimuler la production de collagène et d'élastine.
              </p>
              <p>
                Ce traitement permet de restaurer la fermeté, d'améliorer l'hydratation et de traiter efficacement le relâchement, pour un confort intime retrouvé. Il agit en profondeur sans endommager les tissus environnants, offrant une alternative sûre et efficace à la chirurgie.
              </p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Restauration de la fermeté tissulaire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Amélioration de l'hydratation naturelle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Procédure 100% non invasive et sans éviction sociale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Reusable Booking Form */}
          <BookingForm serviceName="HIFU Vaginal" />

        </div>
      </div>
    </div>
  );
}