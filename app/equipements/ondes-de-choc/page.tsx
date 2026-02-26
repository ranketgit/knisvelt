import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "Ondes de Choc X-Wave Expert | Kinesvelt Casablanca",
  description: "Technologie de stimulation mécanique profonde et restructuration tissulaire.",
};

export default function OndesDeChocPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Rubrique « Machines »</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6">ONDES DE CHOC X-WAVE EXPERT</h1>
            <h2 className="text-xl lg:text-2xl text-gray-500 font-medium mb-10 leading-relaxed">Technologie de stimulation mécanique profonde et restructuration tissulaire</h2>

            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <p>Les ondes de choc utilisent des impulsions mécaniques à haute énergie qui pénètrent les tissus et créent une stimulation intense au niveau des fibres et des tissus conjonctifs.</p>
              <p>Contrairement aux technologies thermiques ou aux ultrasons, les ondes de choc agissent par stimulation mécanique directe, ce qui permet de relancer l’activité cellulaire et de restructurer les zones fibreuses responsables de l’aspect cellulite.</p>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Action spécifique</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Fragmentation des amas fibreux de la cellulite</li>
                  <li>Stimulation intense de la microcirculation</li>
                  <li>Activation du drainage naturel</li>
                  <li>Amélioration de l’oxygénation des tissus</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Zones traitées</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Cuisses</li>
                  <li>Fesses</li>
                  <li>Hanches</li>
                  <li>Ventre</li>
                  <li>Zones fibreuses résistantes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Résultats</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Amélioration visible de la qualité de peau</li>
                  <li>Réduction de l’aspect capitonné</li>
                  <li>Peau plus souple et plus homogène</li>
                  <li>Amélioration du contour corporel</li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6">Durée de la séance</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 minutes par zone</p>
              <p className="text-gray-500 text-[17px] leading-relaxed">Ce temps permet une stimulation mécanique complète des tissus ciblés et une activation optimale des processus de régénération naturelle.</p>
            </div>

            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-50">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">Spécificité KINESVELT</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">Les ondes de choc sont particulièrement efficaces sur les cellulites fibreuses et résistantes, et sont utilisées chez KINESVELT dans des protocoles combinés pour maximiser les résultats minceur et restructuration tissulaire.</p>
            </div>
          </div>

          <AddToCartCard machineName="Ondes de Choc X-Wave Expert" />
        </div>
      </div>
    </section>
  );
}