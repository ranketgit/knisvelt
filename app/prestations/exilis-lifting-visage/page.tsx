import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Exilis Lifting Visage | Kinesvelt Casablanca",
  description: "La technologie de radiofréquence et ultrasons reconnue FDA pour raffermir la peau et redessiner les contours du visage. Expertise Kinesvelt by Imane D.",
};

export default function ExilisLiftingVisagePage() {
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
            EXILIS LIFTING VISAGE
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            La technologie de radiofréquence et ultrasons reconnue FDA utilisée dans les centres esthétiques internationaux pour raffermir la peau et redessiner les contours du visage
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Main Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/new-services/14.jpeg" 
                 alt="Exilis Lifting Visage" 
                 fill 
                 className="object-cover" 
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-8">
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Description</h3>
                <p>
                  Le Exilis est une technologie esthétique avancée qui combine radiofréquence et ultrasons afin de chauffer les couches profondes de la peau et stimuler la production naturelle de collagène.
                  Ce traitement permet de raffermir la peau, améliorer l’élasticité cutanée et redessiner l’ovale du visage sans chirurgie ni injection.
                </p>
              </section>

              <div className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-6">Bienfaits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Raffermissement de la peau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Amélioration de l’élasticité cutanée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Redéfinition de l’ovale du visage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Réduction du relâchement cutané</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Stimulation du collagène</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Peau plus lisse et plus tonique</span>
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
                  <p>Technologie combinant radiofréquence et ultrasons, reconnue par la FDA, permettant de stimuler le collagène et améliorer la fermeté cutanée.</p>
                </div>
              </div>

              <section>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Résultat</h3>
                <p>
                  La peau apparaît progressivement plus ferme plus tonique et plus lisse, avec un visage visiblement raffermi.
                </p>
              </section>

              <div className="bg-[#2A2A2A] p-8 rounded-[2rem] text-white">
                <h3 className="text-xl font-medium mb-4">Signature KINESVELT</h3>
                <p className="opacity-90 leading-relaxed italic">
                  Chez KINESVELT by Imane D, le traitement Exilis est réalisé selon un protocole expert afin d’obtenir un raffermissement naturel du visage et une amélioration visible de la qualité de la peau.
                </p>
              </div>
            </div>
          </div>

          <BookingForm serviceName="Exilis Lifting Visage" />
          
        </div>
      </div>
    </div>
  );
}