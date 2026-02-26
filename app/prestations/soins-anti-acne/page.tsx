import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Soins & Anti-Acné | Kinesvelt Casablanca",
  description: "Des protocoles purifiants et apaisants conçus pour réguler le sébum et réduire visiblement les imperfections.",
};

export default function AntiAcnePage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Visage - Soins Spécifiques</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Soins & Anti-Acné</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100">
               {/* <Image src="/images/anti-acne.jpg" alt="Soins Anti-Acné" fill className="object-cover" /> */}
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>L'acné ne touche pas que les adolescents ; elle peut persister à l'âge adulte et laisser des traces tenaces. Notre soin anti-acné profond est élaboré pour assainir l'épiderme, calmer l'inflammation et purifier les pores encrassés.</p>
              <p>Nous procédons à un nettoyage minutieux, suivi de l'application de protocoles hautement purifiants et apaisants. Ce traitement aide à réduire les rougeurs, assécher les imperfections actives et prévenir l'apparition de nouveaux boutons, pour retrouver une peau saine et unifiée.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Diminution visible des boutons et de l'inflammation</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Régulation durable de la production de sébum</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Prévention et atténuation des cicatrices pigmentaires d'acné</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Soins & Anti-Acné" />
        </div>
      </div>
    </div>
  );
}