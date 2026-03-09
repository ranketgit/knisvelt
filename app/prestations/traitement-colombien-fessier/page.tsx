import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Traitement Colombien Fessier | Kinesvelt Casablanca",
  description: "La technique colombienne pour galber et lifter les fessiers naturellement sans chirurgie. Expertise Kinesvelt by Imane D.",
};

export default function TraitementColombienFessierPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Corps</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-4 uppercase">
            TRAITEMENT COLOMBIEN FESSIER
          </h1>
          <h2 className="text-xl text-[#E38F75] font-medium leading-relaxed max-w-3xl mb-2">
            Dernière génération
          </h2>
          <p className="text-lg text-gray-500">
            La technique colombienne pour galber et lifter les fessiers naturellement sans chirurgie
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Main Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/new-services/20.jpg" 
                 alt="Traitement Colombien Fessier Vacuum Therapy" 
                 fill 
                 className="object-cover" 
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-8">
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Description</h3>
                <p>
                  Le traitement colombien des fessiers, aussi appelé vacuum therapy, est une technique esthétique utilisant un système de ventouses et d’aspiration contrôlée afin de stimuler les tissus et remodeler les fesses.
                </p>
                <p>
                  Ce traitement permet de rehausser les fessiers, améliorer leur galbe et raffermir la peau tout en stimulant la circulation sanguine et la production de collagène.
                </p>
              </section>

              <div className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-6">Bienfaits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Effet lifting naturel des fessiers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Fessiers plus galbés et plus fermes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Amélioration de l’élasticité de la peau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Amélioration de la circulation sanguine</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Silhouette plus harmonieuse</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Durée de la séance</h3>
                  <p className="text-[#E38F75] font-semibold">30 à 45 minutes</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Technologie</h3>
                  <p>Technique de vacuum therapy de dernière génération permettant de stimuler les tissus et remodeler les fessiers sans chirurgie ni injection.</p>
                </div>
              </div>

              <section>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Résultat</h3>
                <p>
                  Les fessiers apparaissent plus galbés, plus fermes et visiblement rehaussés, avec une peau plus lisse.
                </p>
              </section>

              <div className="bg-[#2A2A2A] p-8 rounded-[2rem] text-white">
                <h3 className="text-xl font-medium mb-4">Signature KINESVELT</h3>
                <p className="opacity-90 leading-relaxed italic">
                  Chez KINESVELT by Imane D, ce traitement est réalisé selon un protocole expert afin d’obtenir un galbe naturel et harmonieux des fessiers
                </p>
              </div>
            </div>
          </div>

          <BookingForm serviceName="Traitement Colombien Fessier" />
          
        </div>
      </div>
    </div>
  );
}