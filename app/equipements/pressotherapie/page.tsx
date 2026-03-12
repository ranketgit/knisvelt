import type { Metadata } from "next";
import Image from "next/image";
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "Pressothérapie | Kinesvelt Casablanca",
  description: "Technologie avancée de drainage et stimulation circulatoire.",
};

export default function PressotherapiePage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Rubrique « Machines »</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6 uppercase tracking-tight">PRESSOTHÉRAPIE</h1>
            <h2 className="text-xl lg:text-2xl text-gray-400 font-medium mb-10 leading-relaxed">Technologie avancée de drainage et stimulation circulatoire</h2>

            {/* FIXED HEIGHT IMAGE CONTAINER */}
            <div className="relative w-full h-[250px] lg:h-[350px] mb-12 rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <Image 
                src="/presto.jpeg" 
                alt="Pressothérapie Technology" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <p>La pressothérapie est une technologie utilisant des pressions d’air contrôlées exercées à travers des bottes ou manchons spécifiques.</p>
              <p>Ces pressions reproduisent le drainage lymphatique naturel et stimulent la circulation, permettant d’éliminer les liquides stagnants et les toxines accumulées dans les tissus.</p>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Action & Indications</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Drainage lymphatique</li>
                  <li>• Rétention d’eau</li>
                  <li>• Jambes lourdes</li>
                  <li>• Cellulite aqueuse</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Zones traitées</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Jambes</li>
                  <li>• Cuisses</li>
                  <li>• Ventre</li>
                  <li>• Bras</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Bienfaits</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Affinement visible</li>
                  <li>• Moins de gonflements</li>
                  <li>• Légèreté immédiate</li>
                  <li>• Élimination toxines</li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6 tracking-tight">Durée de la séance</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 minutes</p>
              <p className="text-gray-500 text-[17px] leading-relaxed">Cette durée permet une stimulation complète du système lymphatique et une élimination efficace des liquides accumulés.</p>
            </div>

            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-100 italic shadow-sm">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4 uppercase tracking-wider not-italic">Spécificité KINESVELT</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">Chez KINESVELT, la pressothérapie est une étape essentielle des protocoles minceur car elle optimise les résultats, améliore le drainage et favorise l’élimination naturelle des déchets métaboliques.</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <AddToCartCard machineName="Pressothérapie" />
          </aside>
          
        </div>
      </div>
    </section>
  );
}