import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Hydrafacial Signature | Kinesvelt Casablanca",
  description: "Le soin iconique pour une peau parfaitement nettoyée hydratée et lumineuse. Découvrez l'expertise Kinesvelt by Imane D.",
};

export default function HydrafacialSignaturePage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Visage</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-4">
            HYDRAFACIAL SIGNATURE
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            Le soin iconique pour une peau parfaitement nettoyée hydratée et lumineuse
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/new-services/4.jpg" 
                 alt="Hydrafacial Signature" 
                 fill 
                 className="object-cover" 
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-8">
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Description</h3>
                <p>
                  Le Hydrafacial Signature est un soin visage de dernière génération qui combine nettoyage profond exfoliation douce extraction des impuretés et infusion de sérums hautement concentrés.
                  Grâce à sa technologie vortex ce traitement purifie la peau en profondeur tout en apportant une hydratation intense afin de révéler immédiatement l’éclat naturel du teint.
                </p>
              </section>

              <div className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-6">Bienfaits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Nettoyage profond des pores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Extraction des points noirs et impuretés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Exfoliation douce des cellules mortes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Hydratation intense de la peau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Amélioration visible de la texture cutanée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Teint plus lumineux et peau plus lisse</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Durée de la séance</h3>
                  <p className="text-[#E38F75] font-semibold">1 heure</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Technologie</h3>
                  <p>Technologie vortex avancée permettant de nettoyer la peau en profondeur tout en infusant des actifs hydratants et régénérants.</p>
                </div>
              </div>

              <section>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Résultat</h3>
                <p>
                  La peau est immédiatement plus nette plus fraîche et plus lumineuse.
                  Le teint retrouve un effet glow naturel avec une peau profondément purifiée et hydratée.
                </p>
              </section>

              <div className="bg-[#2A2A2A] p-8 rounded-[2rem] text-white">
                <h3 className="text-xl font-medium mb-4">Signature KINESVELT</h3>
                <p className="opacity-90 leading-relaxed italic">
                  Chez KINESVELT by Imane D, ce soin est réalisé selon un protocole expert afin d’offrir un nettoyage profond une hydratation intense et un éclat immédiat tout en respectant l’équilibre naturel de la peau.
                </p>
              </div>
            </div>
          </div>

          {/* Corrected Component Call */}
          <BookingForm serviceName="Hydrafacial Signature" />
          
        </div>
      </div>
    </div>
  );
}