import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Cure Renforcement Musculaire | Kinesvelt Casablanca",
  description: "Tonifiez votre corps et développez votre masse musculaire avec notre cure spécialisée.",
};

export default function CureRenforcementMusculairePage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Corps - Amincissement</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Cure Renforcement Musculaire</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100">
               {/* <Image src="/images/renforcement-musculaire.jpg" alt="Renforcement Musculaire" fill className="object-cover" /> */}
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>Perdre du gras est une chose, mais avoir un corps tonique et galbé en est une autre. Notre cure de renforcement musculaire utilise des technologies avancées comme l'EMSculpt Haute Intensité pour provoquer des contractions musculaires profondes.</p>
              <p>Une seule séance équivaut à des milliers d'abdominaux ou de squats, forçant le muscle à se reconstruire, à se densifier et à brûler les graisses environnantes pour fournir de l'énergie.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Développement et densification de la masse musculaire</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Galbe prononcé des abdominaux et des fessiers</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Élimination simultanée des graisses superficielles</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Cure Renforcement Musculaire" />
        </div>
      </div>
    </div>
  );
}