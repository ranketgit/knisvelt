import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Pack Lifting Full Face | Kinesvelt Casablanca",
  description: "Un effet tenseur global pour redonner fermeté, élasticité et jeunesse à l'ensemble de votre visage.",
};

export default function PackLiftingPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Visage - Anti-Âge</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Pack Lifting Full Face</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100">
               {/* <Image src="/images/lifting-full-face.jpg" alt="Lifting Full Face" fill className="object-cover" /> */}
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>Lorsque le relâchement cutané est plus prononcé et que le visage perd sa structure globale (pommettes affaissées, plis d'amertume, regard lourd), le Pack Lifting Full Face offre une solution complète et non invasive de rajeunissement.</p>
              <p>En associant les technologies les plus puissantes (comme les ultrasons focalisés ou la radiofréquence multipolaire), nous agissons sur les couches profondes de la peau et des muscles faciaux. Ce protocole crée un véritable maillage tenseur qui remonte les traits, défroisse la peau et sculpte l'ensemble du visage.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Effet tenseur global sur l'ensemble du visage, du cou et de l'ovale</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Alternative puissante, sûre et naturelle au lifting chirurgical</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Restauration des volumes perdus et lissage profond des rides</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Pack Lifting Full Face" />
        </div>
      </div>
    </div>
  );
}