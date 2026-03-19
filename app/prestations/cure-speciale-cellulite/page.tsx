import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Cure Spéciale Cellulite | Kinesvelt Casablanca",
  description: "Des protocoles intensifs pour lisser la peau, éliminer l'aspect peau d'orange et réduire la cellulite.",
};

export default function CureSpecialeCellulitePage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Corps - Amincissement</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Cure Spéciale Cellulite</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
           

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>Qu'elle soit aqueuse, adipeuse ou fibreuse, la cellulite est souvent résistante aux régimes classiques et au sport. Notre cure spéciale cellulite est une approche thérapeutique complète conçue pour casser les capitons et lisser la peau.</p>
              <p>Nous utilisons une synergie de technologies comme les Ondes de choc X-Wave, l'Emtone BTL ou l'Endosphères pour briser les amas graisseux, relancer la microcirculation et lisser visiblement la surface de la peau.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Lissage visible de l'aspect "peau d'orange"</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Casse les amas fibreux responsables de la cellulite incrustée</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Amélioration de la fermeté et de la texture cutanée</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Cure Spéciale Cellulite" />
        </div>
      </div>
    </div>
  );
}