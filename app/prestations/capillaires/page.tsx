import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Microneedling Cheveux | Kinesvelt Casablanca",
  description: "Soins capillaires avancés avec la technique du Microneedling pour stimuler la repousse et densifier vos cheveux.",
};

export default function PrestationsCapillairesPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">
              Prestations Capillaires
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">
            Microneedling Cheveux
          </h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Left Column: Image & Text */}
          <div className="flex flex-col gap-10">
            
            {/* Main Service Image */}
            <div className="relative w-full h-[250px] lg:h-[400px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/capill.png" 
                 alt="Microneedling Cheveux" 
                 fill 
                 className="object-cover" 
                 priority 
               />
            </div>

            {/* Service Content */}
            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>
                Un traitement ciblé qui utilise des micro-aiguilles pour stimuler la circulation sanguine du cuir chevelu et favoriser la pénétration de sérums actifs.
              </p>
              <p>
                Idéal pour freiner la chute des cheveux, stimuler la repousse naturelle et retrouver une chevelure plus dense et fortifiée. Le microneedling capillaire réveille les follicules dormants et revitalise le cuir chevelu en profondeur.
              </p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Freine efficacement la chute des cheveux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Stimule la microcirculation sanguine</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Redonne densité, force et vitalité à la chevelure</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right Column: The Reusable Booking Form */}
          <div className="lg:sticky lg:top-24">
            <BookingForm serviceName="Microneedling Cheveux" />
          </div>

        </div>
      </div>
    </div>
  );
}