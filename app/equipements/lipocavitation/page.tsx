import type { Metadata } from "next";
import Image from "next/image";
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "Lipocavitation | Kinesvelt Casablanca",
  description: "Technologie avancée de réduction de la graisse localisée par ultrasons.",
};

export default function LipocavitationPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Rubrique « Machines »</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6 uppercase tracking-tight">LIPOCAVITATION</h1>
            <h2 className="text-xl lg:text-2xl text-gray-400 font-medium mb-10 leading-relaxed">Technologie avancée de réduction de la graisse localisée</h2>

            {/* FIXED HEIGHT IMAGE CONTAINER */}
            <div className="relative w-full h-[250px] lg:h-[350px] mb-12 rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <Image 
                src="/lipo.jpeg" 
                alt="Lipocavitation Technology" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <p>La lipocavitation est une technologie non invasive utilisant des ultrasons basse fréquence pour cibler les cellules graisseuses en profondeur.</p>
              <p>Ces ultrasons provoquent une désintégration des cellules graisseuses, qui sont ensuite éliminées naturellement par le système lymphatique.</p>
              <p>Cette technologie permet une réduction progressive des volumes sans chirurgie, sans douleur et sans éviction sociale.</p>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Indications</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Graisse localisée</li>
                  <li>• Amas graisseux résistants</li>
                  <li>• Silhouette affinée</li>
                  <li>• Complément minceur</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Zones traitées</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Ventre & Taille</li>
                  <li>• Cuisses & Hanches</li>
                  <li>• Dos & Bras</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Bienfaits</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Volume réduit</li>
                  <li>• Silhouette sculptée</li>
                  <li>• Contour amélioré</li>
                  <li>• Action non invasive</li>
                  <li>• Résultat progressif</li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6 tracking-tight">Durée de la séance</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 minutes par zone</p>
              <p className="text-gray-500 text-[17px] leading-relaxed">Cette durée permet aux ultrasons de pénétrer efficacement les tissus graisseux et d’obtenir une stimulation optimale, tout en respectant la physiologie naturelle du corps.</p>
            </div>

            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-100 italic shadow-sm">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4 uppercase tracking-wider not-italic">L’expertise KINESVELT</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">Chez KINESVELT, la lipocavitation est intégrée dans des protocoles personnalisés combinant plusieurs technologies afin d’optimiser l’élimination des graisses et d’obtenir des résultats visibles et durables.</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <AddToCartCard machineName="Lipocavitation" />
          </aside>
          
        </div>
      </div>
    </section>
  );
}