import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Pack Anti-Âge | Kinesvelt Casablanca",
  description: "Prévenez et traitez les premiers signes du vieillissement avec des soins repulpants et hautement ciblés.",
};

export default function PackAntiAgePage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Visage - Anti-Âge</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Pack Anti-Âge</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>Le vieillissement cutané se manifeste par l'apparition de ridules, une perte de densité et un affinement de la peau. Notre Pack Anti-Âge est conçu pour freiner ce processus en stimulant la régénération cellulaire de l'intérieur.</p>
              <p>Ce programme sur-mesure combine des peelings doux, de la radiofréquence ou des soins repulpants à base d'acide hyaluronique pour combler les rides de l'intérieur, relancer la production naturelle de collagène et préserver le capital jeunesse de votre peau.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Atténuation visible des rides et des ridules d'expression</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Redensification de l'épiderme pour une peau repulpée</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Stimulation durable de l'élastine et du collagène</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Pack Anti-Âge" />
        </div>
      </div>
    </div>
  );
}