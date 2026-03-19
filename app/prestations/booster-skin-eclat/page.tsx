import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Booster Skin Éclat | Kinesvelt Casablanca",
  description: "Un véritable coup de fouet revitalisant pour réveiller les teints ternes et fatigués.",
};

export default function BoosterSkinEclatPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Visage - Soins Spécifiques</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Booster Skin Éclat</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
           

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>Pollution, stress, fatigue, tabac ou manque de sommeil : notre peau subit de nombreuses agressions quotidiennes qui brouillent le teint et lui font perdre sa luminosité naturelle. Le Booster Skin Éclat est la solution "glow" par excellence.</p>
              <p>Ce protocole vitaminé et profondément hydratant agit comme une perfusion de vitalité pour votre épiderme. En exfoliant en douceur les cellules mortes et en infusant la peau d'actifs antioxydants, nous ravivons instantanément la lumière de votre visage.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Coup d'éclat immédiat, idéal avant un événement important</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Élimination du voile gris et du teint terne</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Hydratation profonde et peau rebondie</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Booster Skin Éclat" />
        </div>
      </div>
    </div>
  );
}