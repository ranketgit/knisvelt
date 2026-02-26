import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Traitement Double Menton | Kinesvelt Casablanca",
  description: "Éliminez la graisse localisée sous le menton pour affiner votre profil de manière non invasive.",
};

export default function DoubleMentonPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Visage - Remodelage</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Traitement Double Menton</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100">
               {/* <Image src="/images/double-menton.jpg" alt="Double Menton" fill className="object-cover" /> */}
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>Le double menton est souvent source de complexes. Il peut être dû à un amas graisseux localisé, à la génétique, ou à un relâchement cutané, et résiste généralement aux régimes stricts et à la gymnastique faciale.</p>
              <p>Grâce à nos protocoles ciblés (utilisant des technologies lipolytiques et raffermissantes adaptées au visage), nous faisons fondre les adipocytes sous-mentonniers tout en stimulant la production de collagène pour retendre la peau de cette zone délicate, empêchant ainsi l'effet "peau vide".</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Destruction ciblée de la graisse sous-mentonnière</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Affinement global du profil et du cou</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Raffermissement cutané simultané pour éviter le relâchement</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Traitement Double Menton" />
        </div>
      </div>
    </div>
  );
}