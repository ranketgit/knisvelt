import type { Metadata } from "next";
import Image from "next/image";
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "Endosphères | Kinesvelt Casablanca",
  description: "Technologie de micro-vibration compressive pour le drainage et remodelage avancé.",
};

export default function EndospheresPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Rubrique « Machines »</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6 uppercase tracking-tight">ENDOSPHÈRES</h1>
            <h2 className="text-xl lg:text-2xl text-gray-400 font-medium mb-10 leading-relaxed">Technologie de micro-vibration compressive – Drainage et remodelage avancé</h2>

            {/* FIXED HEIGHT IMAGE CONTAINER */}
            <div className="relative w-full h-[250px] lg:h-[350px] mb-12 rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <Image 
                src="/endospheres.jpeg" 
                alt="Endosphères Technology" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <p>ENDOSPHÈRES est une technologie innovante qui utilise un applicateur composé de multiples sphères rotatives en silicone spécialement conçues pour exercer des micro-compressions contrôlées sur les tissus.</p>
              <p>Ces micro-vibrations agissent en profondeur sur la circulation sanguine et lymphatique, favorisant le drainage des liquides, la stimulation des tissus et l’amélioration de la qualité de la peau.</p>
              <p>Ce traitement permet de relancer les mécanismes naturels du corps, améliorer l’aspect de la cellulite, raffermir les tissus et affiner la silhouette. Le traitement est totalement non invasif, confortable et 0 douleur, procurant une sensation de massage profond.</p>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Zones traitées</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Jambes & Cuisses</li>
                  <li>• Fessiers</li>
                  <li>• Ventre & Taille</li>
                  <li>• Bras & Dos</li>
                </ul>
                <p className="mt-4 text-[14px] text-gray-400 italic">Particulièrement efficace pour les problèmes de cellulite et de rétention d’eau.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Résultats</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Réduction visible de la cellulite</li>
                  <li>• Diminution de la rétention d’eau</li>
                  <li>• Raffermissement des tissus</li>
                  <li>• Qualité de peau améliorée</li>
                  <li>• Silhouette plus légère</li>
                </ul>
                <p className="mt-4 text-[14px] text-gray-400 italic">Les résultats sont visibles progressivement dès les premières séances.</p>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6 tracking-tight">Durée de la séance</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 à 45 minutes</p>
              <p className="text-gray-500 text-[17px] leading-relaxed">Cette durée permet une stimulation complète du système lymphatique et des tissus, assurant un drainage optimal et une efficacité maximale, tout en garantissant un traitement confortable et parfaitement sécurisé.</p>
            </div>

            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-100 italic shadow-sm">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4 uppercase tracking-wider not-italic">Avantage exclusif KINESVELT</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">Chez KINESVELT, la technologie ENDOSPHÈRES est intégrée dans des protocoles personnalisés associant plusieurs technologies complémentaires afin d’optimiser les résultats et offrir un remodelage global de la silhouette.</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <AddToCartCard machineName="Endosphères" />
          </aside>
          
        </div>
      </div>
    </section>
  );
}