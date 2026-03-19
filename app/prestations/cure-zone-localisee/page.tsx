import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Cure Minceur Zone Localisée | Kinesvelt Casablanca",
  description: "Ciblez spécifiquement les amas graisseux rebelles avec notre cure minceur localisée.",
};

export default function CureZoneLocaliseePage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Corps - Amincissement</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Cure Zone Localisée</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
          

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>Même avec une bonne hygiène de vie et du sport, certaines zones du corps stockent la graisse de manière récalcitrante (poignées d'amour, culotte de cheval, ventre, intérieur des cuisses).</p>
              <p>Grâce à des technologies comme la lipocavitation ou le laser I-Lipo, nous ciblons et détruisons directement les adipocytes de la zone qui vous complexe, permettant une perte de centimètres rapide là où vous le souhaitez vraiment.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Action ultra-ciblée sur les zones rebelles</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Destruction des cellules graisseuses résistantes au sport</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Perte de centimètres mesurable rapidement</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Cure Zone Localisée" />
        </div>
      </div>
    </div>
  );
}