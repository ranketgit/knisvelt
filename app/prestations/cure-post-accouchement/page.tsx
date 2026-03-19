import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Cure Post Accouchement | Kinesvelt Casablanca",
  description: "Retrouvez votre silhouette après l'arrivée de bébé avec notre cure minceur post-accouchement sur-mesure.",
};

export default function CurePostAccouchementPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Corps - Amincissement</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Cure Post Accouchement</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
            

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>Après la grossesse, le corps a besoin de temps, de douceur, mais aussi de soins ciblés pour retrouver sa tonicité et éliminer les kilos superflus. Notre cure post-accouchement est spécialement conçue pour répondre aux besoins physiologiques des jeunes mamans.</p>
              <p>Nous combinons des technologies de pointe non invasives pour drainer, raffermir la peau relâchée du ventre et éliminer les amas graisseux stockés pendant la grossesse, le tout dans un cadre apaisant.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Raffermissement de la sangle abdominale</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Élimination de la rétention d'eau et drainage</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Perte de centimètres progressive et respectueuse du corps</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Cure Post Accouchement" />
        </div>
      </div>
    </div>
  );
}