import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Contouring Ovale du Visage | Kinesvelt Casablanca",
  description: "Redéfinissez les contours de votre visage pour une mâchoire plus nette, ferme et parfaitement sculptée.",
};

export default function ContouringOvalePage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Visage - Remodelage</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Contouring Ovale du Visage</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
            

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>Avec le temps ou les variations de poids, l'ovale du visage a tendance à se relâcher et à perdre de sa définition. Le contouring médical esthétique permet de restructurer le bas du visage sans passer par la case chirurgie.</p>
              <p>En utilisant des technologies avancées qui stimulent profondément les tissus et retendent la peau, nous redessinons la ligne de la mâchoire (jawline) pour vous offrir un profil plus net, ferme, et un visage visiblement rajeuni et harmonieux.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Redéfinition nette de la ligne de la mâchoire</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Effet tenseur et lifting naturel sans chirurgie</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Réduction visible du relâchement cutané sur le bas du visage</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Contouring Ovale du Visage" />
        </div>
      </div>
    </div>
  );
}