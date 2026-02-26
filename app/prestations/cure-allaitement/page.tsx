import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Cure Minceur Allaitement | Kinesvelt Casablanca",
  description: "Un protocole minceur doux et 100% sécurisé, parfaitement compatible avec l'allaitement.",
};

export default function CureAllaitementPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Corps - Amincissement</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Cure Allaitement</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100">
               {/* <Image src="/images/cure-allaitement.jpg" alt="Cure Allaitement" fill className="object-cover" /> */}
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>L'allaitement requiert des précautions particulières. Il est essentiel de ne pas brusquer l'organisme tout en amorçant une perte de poids et un remodelage corporel en toute sécurité pour la maman et le bébé.</p>
              <p>Notre cure d'allaitement utilise des méthodes strictement sélectionnées pour être non systémiques. Nous privilégions le drainage lymphatique, la pressothérapie et des soins mécaniques doux pour relancer votre métabolisme sans interférer avec la lactation.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Protocole 100% compatible et sans danger pour l'allaitement</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Soulagement de la sensation de jambes lourdes</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Amorce en douceur de la perte de volume</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Cure Allaitement" />
        </div>
      </div>
    </div>
  );
}