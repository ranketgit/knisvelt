import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "EMSculpt Haute Intensity | Kinesvelt Casablanca",
  description: "Technologie avancée de renforcement musculaire et remodelage corporel.",
};

export default function EmsculptPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Rubrique « Machines »</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6">EMSCULPT HAUTE INTENSITY</h1>
            <h2 className="text-xl lg:text-2xl text-gray-500 font-medium mb-10 leading-relaxed">Technologie avancée de renforcement musculaire et remodelage corporel</h2>

            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <p>EMSculpt utilise des impulsions électromagnétiques focalisées de haute intensité pour provoquer des contractions musculaires profondes impossibles à obtenir volontairement.</p>
              <p>Ces contractions stimulent intensément les muscles, renforcent leur structure et favorisent simultanément la réduction de la graisse localisée.</p>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Action & Indications</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Renforcement musculaire profond</li>
                  <li>Tonification et galbe corporel</li>
                  <li>Ventre relâché & Manque de tonicité</li>
                  <li>Affinement de la silhouette</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Zones traitées</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Ventre</li>
                  <li>Fessiers</li>
                  <li>Cuisses</li>
                  <li>Bras</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Muscles plus fermes et plus toniques</li>
                  <li>Silhouette plus sculptée</li>
                  <li>Amélioration du tonus musculaire</li>
                  <li>Ventre plus plat et plus ferme</li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6">Durée de la séance</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 minutes</p>
              <p className="text-gray-500 text-[17px] leading-relaxed">En 30 minutes, la technologie provoque l’équivalent de milliers de contractions musculaires profondes, permettant une stimulation musculaire intense et efficace.</p>
            </div>

            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-50">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">Spécificité KINESVELT</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">EMSculpt est une technologie idéale pour remodeler le corps, renforcer les muscles et améliorer la tonicité globale, et constitue une étape essentielle dans les protocoles de transformation corporelle chez KINESVELT.</p>
            </div>
          </div>

          <AddToCartCard machineName="EMSculpt Haute Intensity" />
        </div>
      </div>
    </section>
  );
}