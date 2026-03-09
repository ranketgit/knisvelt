import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Épilation Laser | Kinesvelt Casablanca",
  description: "La solution durable pour une peau parfaitement lisse grâce aux technologies laser de dernière génération. Expertise Kinesvelt by Imane D.",
};

export default function EpilationLaserPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-4 uppercase">
            ÉPILATION LASER
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            La solution durable pour une peau parfaitement lisse grâce aux technologies laser de dernière génération
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Main Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/new-services/18.jpeg" 
                 alt="Épilation Laser" 
                 fill 
                 className="object-cover" 
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-8">
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Description</h3>
                <p>
                  L’épilation laser est une technologie esthétique avancée permettant de réduire durablement la pilosité en ciblant le follicule pileux grâce à une énergie lumineuse précise.
                  Chez KINESVELT, nous utilisons une machine de dernière génération combinant les trois technologies laser les plus performantes, permettant d’adapter le traitement à chaque type de peau et de poil pour une efficacité optimale.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6">Les 3 technologies laser</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="border-l-2 border-[#E38F75] pl-4">
                    <h4 className="font-medium text-[#2A2A2A]">Laser Alexandrite</h4>
                    <p className="text-sm">Idéal pour les peaux claires et les poils foncés. Il permet une épilation rapide et très efficace.</p>
                  </div>
                  <div className="border-l-2 border-[#E38F75] pl-4">
                    <h4 className="font-medium text-[#2A2A2A]">Laser Diode</h4>
                    <p className="text-sm">Convient à la majorité des types de peau. Il permet de cibler efficacement le follicule pileux tout en assurant un traitement confortable.</p>
                  </div>
                  <div className="border-l-2 border-[#E38F75] pl-4">
                    <h4 className="font-medium text-[#2A2A2A]">Laser Nd:YAG</h4>
                    <p className="text-sm">Particulièrement adapté aux peaux mates à foncées. Il agit en profondeur tout en respectant la pigmentation de la peau.</p>
                  </div>
                </div>
              </section>

              <div className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-6">Bienfaits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Réduction durable de la pilosité</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Peau plus lisse et plus nette</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Repousse plus lente et plus fine</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Réduction des poils incarnés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Traitement adapté à tous les types de peau</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">Zones traitées</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>Visage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>Aisselles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>Bras</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>Jambes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>Maillot</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>Dos</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Durée de la séance</h3>
                  <p className="text-[#E38F75] font-semibold">Variable selon la zone traitée.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Technologie</h3>
                  <p>Machine laser triple longueur d’onde (Alexandrite – Diode – Nd:YAG) de dernière génération permettant un traitement performant, précis et adapté à tous les phototypes.</p>
                </div>
              </div>

              <section>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Résultat</h3>
                <p>
                  Au fil des séances, la pilosité diminue progressivement et la peau devient plus douce plus nette et durablement lisse.
                </p>
              </section>

              <div className="bg-[#2A2A2A] p-8 rounded-[2rem] text-white">
                <h3 className="text-xl font-medium mb-4">Signature KINESVELT</h3>
                <p className="opacity-90 leading-relaxed italic">
                  Chez KINESVELT by Imane D, nous avons sélectionné une technologie laser de dernière génération afin d’offrir des traitements efficaces, sécurisés et adaptés à chaque type de peau
                </p>
              </div>
            </div>
          </div>

          <BookingForm serviceName="Épilation Laser" />
          
        </div>
      </div>
    </div>
  );
}