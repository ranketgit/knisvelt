import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Alma PrimeX Visage | Kinesvelt Casablanca",
  description: "Une technologie avancée pour raffermir la peau et redessiner les contours du visage sans chirurgie. Expertise Kinesvelt by Imane D.",
};

export default function AlmaPrimexVisagePage() {
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
            ALMA PRIMEX – LIFTING VISAGE
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            Une technologie avancée pour raffermir la peau et redessiner les contours du visage sans chirurgie
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Main Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/new-services/16.jpeg" 
                 alt="Alma PrimeX Lifting Visage" 
                 fill 
                 className="object-cover" 
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-8">
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Description</h3>
                <p>
                  Le Alma PrimeX est une plateforme esthétique de dernière génération combinant ultrasons guidés et radiofréquence médicale afin de stimuler le collagène et améliorer la fermeté de la peau.
                  Ce traitement permet de raffermir le visage, lisser les rides et redéfinir l’ovale tout en restant totalement non invasif.
                </p>
                <p>
                  Grâce à cette combinaison d’énergies, la peau est chauffée en profondeur, ce qui stimule la production naturelle de collagène et d’élastine, responsables de la fermeté et de la jeunesse cutanée.
                </p>
              </section>

              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">Zones traitées</h3>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>Ovale du visage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>Bajoues</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>Joues</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>Double menton</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>Cou</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-6">Bienfaits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Effet lifting naturel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Raffermissement visible de la peau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Amélioration de l’élasticité cutanée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Redéfinition des contours du visage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Réduction des rides et du relâchement cutané</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Durée de la séance</h3>
                  <p className="text-[#E38F75] font-semibold">20 minutes</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Technologie</h3>
                  <p>Association ultrasons guidés + radiofréquence unipolaire, chauffant les couches profondes de la peau.</p>
                </div>
              </div>

              <section>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Résultat</h3>
                <p>
                  La peau devient progressivement plus ferme, plus lisse et visiblement liftée, avec un visage redessiné et des contours plus définis.
                </p>
              </section>

              <div className="bg-[#2A2A2A] p-8 rounded-[2rem] text-white">
                <h3 className="text-xl font-medium mb-4">Signature KINESVELT</h3>
                <p className="opacity-90 leading-relaxed italic">
                  Chez KINESVELT by Imane D, Alma PrimeX est intégré dans un protocole expert afin d’obtenir un lifting naturel du visage sans chirurgie ni éviction sociale.
                </p>
              </div>
            </div>
          </div>

          <BookingForm serviceName="Alma PrimeX Visage" />
          
        </div>
      </div>
    </div>
  );
}