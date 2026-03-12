import type { Metadata } from "next";
import Image from "next/image";
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "I-Lipo | Kinesvelt Casablanca",
  description: "Technologie laser lipolytique de dernière génération. 100% indolore.",
};

export default function ILipoPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Rubrique « Machines »</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6 uppercase tracking-tight">I-LIPO</h1>
            <h2 className="text-xl lg:text-2xl text-gray-400 font-medium mb-10 leading-relaxed">Technologie laser lipolytique de dernière génération</h2>

            <div className="bg-[#FAF8F7] p-6 rounded-2xl border border-gray-100 mb-10 inline-block w-fit">
              <p className="text-[#E38F75] font-medium text-[17px]">
                Traitement 100% indolore – 0 douleur – 0 aiguille – 0 éviction sociale
              </p>
            </div>

            {/* FIXED HEIGHT IMAGE CONTAINER */}
            <div className="relative w-full h-[250px] lg:h-[350px] mb-12 rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <Image 
                src="/i-lipo.jpeg" 
                alt="I-Lipo Technology" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Principe de la technologie</h3>
              <p>I-LIPO utilise un laser lipolytique basse intensité spécialement conçu pour cibler les cellules graisseuses de manière précise et sécurisée.</p>
              <p>Cette énergie stimule les adipocytes et provoque la libération des acides gras stockés. La graisse est ensuite éliminée naturellement par le système lymphatique et le métabolisme.</p>
              <p>Le traitement est totalement non invasif, confortable et ne provoque aucune douleur.</p>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Zones traitées</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Ventre & Taille</li>
                  <li>• Hanches & Cuisses</li>
                  <li>• Bras & Dos</li>
                  <li>• Genoux</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Résultats</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Réduction des centimètres rapide</li>
                  <li>• Diminution de la graisse localisée</li>
                  <li>• Affinement de la silhouette</li>
                  <li>• Qualité de peau améliorée</li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6 tracking-tight">Pourquoi une séance de 30 minutes ?</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 minutes par zone</p>
              <p className="text-gray-500 text-[17px] leading-relaxed">La durée de 30 minutes correspond au temps physiologique optimal nécessaire pour activer efficacement la libération des graisses, sans agresser les tissus ni fatiguer les cellules. Ce temps permet d’obtenir une stimulation maximale tout en garantissant un traitement sûr et parfaitement toléré.</p>
            </div>

            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-100 italic shadow-sm">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4 uppercase tracking-wider not-italic">Avantage exclusif KINESVELT</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">Chez KINESVELT, la technologie I-LIPO est intégrée dans des protocoles complets associant plusieurs technologies complémentaires afin d’optimiser l’élimination des graisses et améliorer la qualité globale de la silhouette. Cette approche permet d’obtenir des résultats plus rapides, plus visibles et plus durables.</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <AddToCartCard machineName="I-Lipo" />
          </aside>
          
        </div>
      </div>
    </section>
  );
}