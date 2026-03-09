import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Soin Luxury ADN Saumon | Kinesvelt Casablanca",
  description: "Un soin régénérant d’exception pour revitaliser intensément la peau et restaurer son éclat naturel. Découvrez l'expertise Kinesvelt by Imane D.",
};

export default function LuxuryADNSaumonPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Visage</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-4">
            SOIN LUXURY ADN SAUMON
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            Un soin régénérant d’exception pour revitaliser intensément la peau et restaurer son éclat naturel
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Main Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/new-services/7.jpg" 
                 alt="Soin Luxury ADN Saumon" 
                 fill 
                 className="object-cover" 
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-8">
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Description</h3>
                <p>
                  Le Soin Luxury ADN Saumon est un traitement visage haut de gamme reconnu pour ses propriétés régénérantes et anti-âge.
                  Grâce à des actifs riches en ADN de saumon, ce protocole stimule le renouvellement cellulaire, améliore la qualité de la peau et aide à restaurer sa fermeté et son élasticité.
                </p>
              </section>

              <div className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-6">Bienfaits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Régénération intense de la peau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Amélioration de l’élasticité cutanée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Hydratation profonde</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Réduction des signes de fatigue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Peau plus ferme et plus lumineuse</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Durée de la séance</h3>
                  <p className="text-[#E38F75] font-semibold">1 heure</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Résultat</h3>
                  <p>La peau apparaît plus lisse plus ferme et visiblement revitalisée. Le teint retrouve éclat fraîcheur et vitalité.</p>
                </div>
              </div>

              <div className="bg-[#2A2A2A] p-8 rounded-[2rem] text-white">
                <h3 className="text-xl font-medium mb-4">Signature KINESVELT</h3>
                <p className="opacity-90 leading-relaxed italic">
                  Chez KINESVELT by Imane D, ce soin est réalisé selon un protocole expert afin de stimuler la régénération de la peau et révéler un teint lumineux et rajeuni.
                </p>
              </div>
            </div>
          </div>

          {/* Sticky Side Card */}
          <BookingForm serviceName="Soin Luxury ADN Saumon" />
          
        </div>
      </div>
    </div>
  );
}