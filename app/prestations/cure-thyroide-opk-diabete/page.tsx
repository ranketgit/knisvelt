import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Cure Minceur Pathologies | Kinesvelt Casablanca",
  description: "Un programme minceur strictement adapté à votre métabolisme (Thyroïde, OPK, Diabète).",
};

export default function CurePathologiesPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Corps - Amincissement</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Cure Thyroïde / OPK / Diabète</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
            

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>La perte de poids peut s'avérer extrêmement complexe lorsque le métabolisme est ralenti par des dérèglements hormonaux comme l'hypothyroïdie, le syndrome des ovaires polykystiques (OPK) ou le diabète.</p>
              <p>Chez Kinesvelt, nous comprenons ces défis. Cette cure propose une approche médicale et esthétique combinée. Nous utilisons des technologies douces qui stimulent le métabolisme cellulaire sans agresser le système endocrinien, couplées à un suivi nutritionnel hautement spécialisé.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Prise en charge respectueuse de vos contraintes médicales</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Relance le métabolisme bloqué par les variations hormonales</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Perte de poids saine et durable adaptée à votre rythme</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Cure Thyroïde / OPK / Diabète" />
        </div>
      </div>
    </div>
  );
}