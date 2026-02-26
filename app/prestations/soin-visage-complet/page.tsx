import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Soin Visage Complet | Kinesvelt Casablanca",
  description: "Nettoyage en profondeur, hydratation et revitalisation pour une peau éclatante de santé.",
};

export default function SoinVisageCompletPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">
              Prestations Visage
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">
            Soin Visage Complet
          </h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Left Column: Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[400px] rounded-[2rem] overflow-hidden bg-gray-100">
               {/* <Image src="/images/soin-visage.jpg" alt="Soin Visage Complet" fill className="object-cover" /> */}
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>
                Accordez à votre peau l'attention qu'elle mérite avec notre Soin Visage Complet. Ce protocole sur-mesure est conçu pour nettoyer en profondeur, purifier et revitaliser l'épiderme.
              </p>
              <p>
                En combinant extraction des impuretés, gommage doux, hydratation intense et modelage relaxant, nous redonnons à votre visage toute sa luminosité. Adapté à tous les types de peaux, ce soin permet de lutter contre le teint terne et la fatigue urbaine.
              </p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Nettoyage profond et élimination des points noirs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Hydratation intense et réparation de la barrière cutanée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Coup d'éclat immédiat et teint unifié</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Reusable Booking Form */}
          <BookingForm serviceName="Soin Visage Complet" />

        </div>
      </div>
    </div>
  );
}