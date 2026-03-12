import type { Metadata } from "next";
import Image from "next/image";
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "Madérothérapie & Métallothérapie | Kinesvelt Casablanca",
  description: "Technique de remodelage corporel par instruments en bois et en métal.",
};

export default function MaderotherapiePage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Rubrique « Machines »</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6 uppercase tracking-tight">MADÉROTHÉRAPIE & MÉTALLOTHÉRAPIE</h1>
            <h2 className="text-xl lg:text-2xl text-gray-400 font-medium mb-10 leading-relaxed">Technique de remodelage corporel par instruments en bois et en métal</h2>

            {/* FIXED HEIGHT IMAGE CONTAINER */}
            <div className="relative w-full h-[250px] lg:h-[350px] mb-12 rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <Image 
                src="/maderotherapie.jpeg" 
                alt="Madérothérapie & Métallothérapie" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <p>La madérothérapie pratiquée chez KINESVELT utilise une combinaison d’instruments en bois naturel et en métal spécialement conçus pour stimuler les tissus en profondeur, activer la circulation lymphatique et remodeler la silhouette.</p>
              <p>Le bois permet un travail ciblé sur les amas graisseux et la cellulite, tandis que le métal apporte un effet drainant renforcé, améliore la circulation et favorise le raffermissement des tissus.</p>
              <p>Cette double stimulation permet d’agir efficacement sur la cellulite, la rétention d’eau et la qualité de la peau, tout en relançant les mécanismes naturels d’élimination du corps. Le traitement est totalement non invasif, confortable et 0 douleur, procurant une sensation immédiate de légèreté.</p>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Zones traitées</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Ventre & Taille</li>
                  <li>• Cuisses & Fessiers</li>
                  <li>• Bras & Dos</li>
                </ul>
                <p className="mt-4 text-[14px] text-gray-400 italic">Particulièrement efficace pour la cellulite et le manque de fermeté.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Résultats</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Réduction visible de la cellulite</li>
                  <li>• Drainage lymphatique activé</li>
                  <li>• Diminution de la rétention d’eau</li>
                  <li>• Raffermissement des tissus</li>
                  <li>• Qualité de peau améliorée</li>
                  <li>• Affinement de la silhouette</li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6 tracking-tight">Durée de la séance</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 à 45 minutes</p>
              <p className="text-gray-500 text-[17px] leading-relaxed">Cette durée permet une stimulation complète des tissus et du système lymphatique, assurant un drainage optimal et un remodelage efficace, tout en garantissant un traitement confortable et parfaitement sécurisé.</p>
            </div>

            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-100 italic shadow-sm">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4 uppercase tracking-wider not-italic">Avantage exclusif KINESVELT</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">Chez KINESVELT, la combinaison du bois et du métal permet un travail plus complet, plus précis et plus efficace, offrant des résultats optimisés sur la cellulite, le drainage et le raffermissement.</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <AddToCartCard machineName="Madérothérapie & Métallothérapie" />
          </aside>
          
        </div>
      </div>
    </section>
  );
}