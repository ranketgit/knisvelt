import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';
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
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6">LIPOCAVITATION</h1>
            <h2 className="text-xl lg:text-2xl text-gray-500 font-medium mb-10 leading-relaxed">Technologie avancée de réduction de la graisse localisée</h2>

            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <p>La lipocavitation est une technologie non invasive utilisant des ultrasons basse fréquence pour cibler les cellules graisseuses en profondeur.</p>
              <p>Ces ultrasons provoquent une désintégration des cellules graisseuses, qui sont ensuite éliminées naturellement par le système lymphatique.</p>
              <p>Cette technologie permet une réduction progressive des volumes sans chirurgie, sans douleur et sans éviction sociale.</p>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Indications</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Graisse localisée</li>
                  <li>Amas graisseux résistants</li>
                  <li>Affinement de la silhouette</li>
                  <li>Complément idéal dans un protocole minceur</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Zones traitées</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Ventre & Poignées d’amour</li>
                  <li>Cuisses & Hanches</li>
                  <li>Dos & Bras</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Réduction progressive des volumes</li>
                  <li>Affinement visible de la silhouette</li>
                  <li>Amélioration du contour corporel</li>
                  <li>Résultats naturels et progressifs</li>
                  <li>Traitement non invasif et sécurisé</li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6">Durée de la séance</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 minutes par zone</p>
              <p className="text-gray-500 text-[17px] leading-relaxed">Cette durée permet aux ultrasons de pénétrer efficacement les tissus graisseux et d’obtenir une stimulation optimale, tout en respectant la physiologie naturelle du corps.</p>
            </div>

            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-50">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">L’expertise KINESVELT</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">Chez KINESVELT, la lipocavitation est intégrée dans des protocoles personnalisés combinant plusieurs technologies afin d’optimiser l’élimination des graisses et d’obtenir des résultats visibles et durables.</p>
            </div>
          </div>

          <AddToCartCard machineName="Lipocavitation" />
        </div>
      </div>
    </section>
  );
}