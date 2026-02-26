import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "Exilis – BTL | Kinesvelt Casablanca",
  description: "Technologie internationale de référence conçue pour réduire la graisse et raffermir la peau simultanément.",
};

export default function ExilisPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Machines Premium</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6">EXILIS – BTL</h1>
            
            <blockquote className="border-l-4 border-[#E38F75] pl-6 italic text-gray-500 text-xl mb-8">
              “Technologie internationale de référence conçue pour réduire la graisse et raffermir la peau simultanément.”
            </blockquote>

            <h2 className="text-xl lg:text-2xl text-[#2A2A2A] font-medium mb-10 leading-relaxed">Technologie avancée combinant radiofréquence et ultrasons – Remodelage et raffermissement</h2>

            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <p>EXILIS est une technologie développée par BTL, leader international dans les technologies médico-esthétiques, utilisée dans les centres les plus avancés au monde pour le bodycontouring et le raffermissement.</p>
              <p>Cette machine combine la radiofréquence et les ultrasons afin de chauffer les tissus en profondeur de manière contrôlée, permettant de stimuler la production de collagène, raffermir la peau et réduire la graisse localisée.</p>
              <p>Cette stimulation améliore la structure de la peau, favorise la réduction des volumes et permet un remodelage progressif et naturel de la silhouette. Le traitement est totalement non invasif, confortable et 0 douleur, procurant une sensation de chaleur contrôlée et sécurisée.</p>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Zones traitées</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Ventre & Taille</li>
                  <li>Cuisses & Fessiers</li>
                  <li>Bras & Dos</li>
                  <li>Visage et cou</li>
                </ul>
                <p className="mt-4 text-[14px] text-gray-500 italic">Particulièrement efficace pour traiter le relâchement cutané et améliorer la fermeté.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Résultats</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Réduction de la graisse localisée</li>
                  <li>Raffermissement visible de la peau</li>
                  <li>Amélioration de l’élasticité cutanée et stimulation du collagène</li>
                  <li>Amélioration de la qualité globale de la peau</li>
                  <li>Silhouette plus ferme et plus harmonieuse</li>
                </ul>
                <p className="mt-4 text-[14px] text-gray-500 italic">Résultats visibles dès les premières séances avec amélioration progressive.</p>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6">Durée de la séance</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 minutes</p>
              <p className="text-gray-500 text-[17px] leading-relaxed">Cette durée permet une stimulation optimale des tissus et du collagène, assurant un raffermissement efficace et un remodelage progressif, tout en garantissant un traitement confortable et sécurisé.</p>
            </div>

            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-50">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">Avantage exclusif KINESVELT</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">Chez KINESVELT, la technologie EXILIS BTL est intégrée dans des protocoles complets et personnalisés afin d’offrir des résultats optimisés en matière de raffermissement, de réduction des volumes et de bodycontouring.</p>
            </div>
          </div>

          <AddToCartCard machineName="Exilis – BTL" />
        </div>
      </div>
    </section>
  );
}