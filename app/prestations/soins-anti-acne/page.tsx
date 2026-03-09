import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Traitement Acné | Kinesvelt Casablanca",
  description: "Un protocole expert pour purifier la peau et réduire durablement les imperfections. Découvrez l'expertise Kinesvelt by Imane D.",
};

export default function TraitementAcnePage() {
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
            TRAITEMENT ACNÉ
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            Un protocole expert pour purifier la peau et réduire durablement les imperfections
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Main Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/new-services/5.jpeg" 
                 alt="Traitement Acné" 
                 fill 
                 className="object-cover" 
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-8">
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Description</h3>
                <p>
                  Le traitement acné KINESVELT est un protocole complet conçu pour purifier la peau en profondeur, réguler l’excès de sébum et réduire les imperfections.
                  Grâce à une combinaison de soins ciblés et de technologies esthétiques avancées, ce traitement aide à assainir la peau, améliorer sa texture et prévenir l’apparition de nouvelles imperfections.
                </p>
              </section>

              <div className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-6">Bienfaits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Nettoyage profond des pores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Réduction des boutons et inflammations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Régulation de l’excès de sébum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Amélioration de la texture de la peau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Atténuation des marques d’acné</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Protocole</h3>
                  <p className="text-[#E38F75] font-semibold">Pack de 4 séances</p>
                  <p className="mt-2 text-sm">Chaque séance est réalisée selon un protocole personnalisé afin d’adapter le traitement au type de peau et à l’intensité de l’acné.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Résultat</h3>
                  <p>Au fil des séances la peau devient plus nette plus équilibrée et visiblement plus saine avec une réduction progressive des imperfections.</p>
                </div>
              </div>

              <div className="bg-[#2A2A2A] p-8 rounded-[2rem] text-white">
                <h3 className="text-xl font-medium mb-4">Signature KINESVELT</h3>
                <p className="opacity-90 leading-relaxed italic">
                  Chez KINESVELT by Imane D, chaque protocole acné est réalisé avec des technologies non invasives et des actifs ciblés afin de traiter les imperfections tout en respectant l’équilibre naturel de la peau
                </p>
              </div>
            </div>
          </div>

          {/* Sticky Side Card */}
          <BookingForm serviceName="Traitement Acné (Pack de 4 séances)" />
          
        </div>
      </div>
    </div>
  );
}