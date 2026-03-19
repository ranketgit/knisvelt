import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Cure Bodycontouring Full Body | Kinesvelt Casablanca",
  description: "Un remodelage complet de votre silhouette grâce à notre cure bodycontouring full body.",
};

export default function CureBodycontouringPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Corps - Amincissement</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Cure Bodycontouring Full Body</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
           

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>Le Bodycontouring Full Body est la solution ultime pour une transformation globale. Plutôt que de cibler une seule zone, ce protocole complet prend en charge l'ensemble de votre silhouette pour un résultat harmonieux et proportionné.</p>
              <p>Nous utilisons une combinaison de nos meilleures machines (LPG, Radiofréquence, Endosphères) pour lisser, sculpter, raffermir et déstocker l'ensemble de votre corps en simultané.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Transformation globale et harmonieuse de la silhouette</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Combinaison de l'amincissement et du raffermissement cutané</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Amélioration globale de la texture de la peau sur tout le corps</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Cure Bodycontouring Full Body" />
        </div>
      </div>
    </div>
  );
}