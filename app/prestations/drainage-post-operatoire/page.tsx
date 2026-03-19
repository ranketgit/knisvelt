import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Drainage Post-Opératoire | Kinesvelt Casablanca",
  description: "Accélérez votre récupération et réduisez les œdèmes après une chirurgie avec notre drainage lymphatique.",
};

export default function DrainagePostOpPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Corps - Drainage</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Drainage Lymphatique Post-Opératoire</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
           

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>Après une intervention chirurgicale (liposuccion, abdominoplastie, chirurgie esthétique ou réparatrice), le corps réagit souvent par une inflammation, des ecchymoses et une rétention de liquides importante.</p>
              <p>Le drainage lymphatique post-opératoire est une étape cruciale recommandée par les chirurgiens. Par des manœuvres douces et précises, nous aidons le corps à évacuer les toxines et les fluides excédentaires, soulageant la douleur et garantissant un résultat final optimal.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Réduction rapide des œdèmes et des gonflements</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Accélération du processus de cicatrisation et de récupération</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Prévention de la fibrose cutanée après une chirurgie</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Drainage Lymphatique Post-Opératoire" />
        </div>
      </div>
    </div>
  );
}