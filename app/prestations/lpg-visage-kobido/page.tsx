import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "LPG Visage + Massage Kobido | Kinesvelt Casablanca",
  description: "L’alliance d’une technologie avancée et d’un massage ancestral japonais pour un effet lifting naturel. Expertise Kinesvelt by Imane D.",
};

export default function LpgKobidoPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Visage</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-4 uppercase">
            LPG VISAGE + MASSAGE KOBIDO
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            L’alliance d’une technologie avancée et d’un massage ancestral japonais pour un effet lifting naturel
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Main Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/new-services/17.jpeg" 
                 alt="LPG Visage + Massage Kobido" 
                 fill 
                 className="object-cover" 
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-8">
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Description</h3>
                <p>
                  Le LPG visage est une technologie de stimulation mécanique permettant d’activer naturellement la production de collagène, d’élastine et d’acide hyaluronique.
                  Associé au massage Kobido, un massage facial japonais reconnu pour ses effets liftants, ce protocole permet de stimuler la circulation, tonifier les muscles du visage et redonner de l’éclat à la peau.
                </p>
                <p>
                  Cette combinaison unique permet d’obtenir un effet lifting naturel tout en améliorant la qualité et la luminosité de la peau.
                </p>
              </section>

              <div className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-6">Bienfaits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Effet lifting naturel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Stimulation du collagène et de l’élastine</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Amélioration de la fermeté de la peau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Drainage et détoxification du visage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Peau plus lumineuse et revitalisée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Relaxation profonde des tensions du visage</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Durée de la séance</h3>
                  <p className="text-[#E38F75] font-semibold">45 minutes</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Technologie & Technique</h3>
                  <ul className="text-sm space-y-2">
                    <li>• LPG Endermologie visage pour stimuler la régénération naturelle de la peau</li>
                    <li>• Massage Kobido technique japonaise ancestrale reconnue pour ses effets liftants</li>
                  </ul>
                </div>
              </div>

              <section>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Résultat</h3>
                <p>
                  Le visage apparaît plus tonique, plus détendu et visiblement plus lumineux, avec des traits reposés et une peau revitalisée.
                </p>
              </section>

              <div className="bg-[#2A2A2A] p-8 rounded-[2rem] text-white">
                <h3 className="text-xl font-medium mb-4">Signature KINESVELT</h3>
                <p className="opacity-90 leading-relaxed italic">
                  Chez KINESVELT by Imane D, ce protocole combine technologie et techniques manuelles expertes afin d’offrir un lifting naturel du visage et un moment de relaxation profonde
                </p>
              </div>
            </div>
          </div>

          <BookingForm serviceName="LPG Visage + Kobido" />
          
        </div>
      </div>
    </div>
  );
}