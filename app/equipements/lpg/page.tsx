import type { Metadata } from "next";
import Image from "next/image";
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "LPG | Kinesvelt Casablanca",
  description: "Technologie parfaitement conçue pour le bodycontouring et le remodelage global de la silhouette.",
};

export default function LpgPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Machines Premium</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6 uppercase tracking-tight">LPG</h1>
            
            <blockquote className="border-l-4 border-[#E38F75] pl-6 italic text-gray-500 text-xl mb-8">
              “Technologie parfaitement conçue pour le bodycontouring et le remodelage global de la silhouette.”
            </blockquote>

            <h2 className="text-xl lg:text-2xl text-[#2A2A2A] font-medium mb-10 leading-relaxed">
              Technologie internationale de stimulation mécanique cellulaire – Remodelage et raffermissement
            </h2>

            {/* FIXED HEIGHT IMAGE CONTAINER */}
            <div className="relative w-full h-[250px] lg:h-[350px] mb-12 rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <Image 
                src="/lpg.jpeg" 
                alt="LPG Technology" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <p>LPG est une technologie internationale reconnue et utilisée dans les centres esthétiques les plus avancés au monde pour le remodelage du corps et l’amélioration de la qualité de la peau.</p>
              <p>Cette machine utilise un système exclusif de rouleaux motorisés combinés à une aspiration contrôlée permettant de stimuler les tissus en profondeur et de relancer l’activité cellulaire. Cette stimulation agit directement sur la circulation sanguine et lymphatique, favorisant l’élimination des graisses, la réduction de la cellulite et le raffermissement des tissus.</p>
              <p>Le traitement est totalement non invasif, confortable et 0 douleur, procurant une sensation de massage profond et stimulant.</p>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Zones traitées</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Ventre & Taille</li>
                  <li>• Cuisses & Fessiers</li>
                  <li>• Bras & Dos</li>
                  <li>• Genoux</li>
                </ul>
                <p className="mt-4 text-[14px] text-gray-400 italic">Particulièrement efficace pour améliorer la fermeté.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Résultats</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Résultats visibles dès la 1ère séance</li>
                  <li>• Réduction de la cellulite</li>
                  <li>• Drainage lymphatique amélioré</li>
                  <li>• Raffermissement des tissus</li>
                  <li>• Élasticité de la peau</li>
                  <li>• Silhouette harmonieuse</li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6 tracking-tight">Durée de la séance</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 minutes</p>
              <p className="text-gray-500 text-[17px] leading-relaxed">Cette durée permet une stimulation optimale des tissus et de l’activité cellulaire, assurant un remodelage efficace et une amélioration visible de la qualité de la peau, tout en garantissant un traitement confortable et parfaitement sécurisé.</p>
            </div>

            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-100 italic shadow-sm">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4 uppercase tracking-wider not-italic">Avantage exclusif KINESVELT</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">Chez KINESVELT, la technologie LPG est intégrée dans des protocoles complets et personnalisés afin d’optimiser les résultats et offrir un remodelage global et harmonieux de la silhouette.</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <AddToCartCard machineName="LPG" />
          </aside>
          
        </div>
      </div>
    </section>
  );
}