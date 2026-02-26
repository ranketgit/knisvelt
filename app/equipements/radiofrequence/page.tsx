import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "Radiofréquence | Kinesvelt Casablanca",
  description: "Technologie avancée de raffermissement et régénération cutanée. Découvrez nos séances de radiofréquence chez Kinesvelt.",
};

export default function RadiofrequencePage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Rubrique « Machines »</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6">RADIOFRÉQUENCE</h1>
            <h2 className="text-xl lg:text-2xl text-gray-500 font-medium mb-10 leading-relaxed">Technologie avancée de raffermissement et régénération cutanée</h2>

            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <p>La radiofréquence est une technologie esthétique non invasive qui utilise des ondes électromagnétiques pour chauffer les couches profondes de la peau de manière contrôlée.</p>
              <p>Cette stimulation thermique active la production naturelle de collagène et d’élastine, améliorant ainsi la fermeté, la tonicité et la qualité de la peau.</p>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Indications</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Raffermissement cutané</li>
                  <li>Relâchement de la peau</li>
                  <li>Cellulite</li>
                  <li>Amélioration de la texture cutanée</li>
                  <li>Prévention du vieillissement cutané</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Zones traitées</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Visage & Cou</li>
                  <li>Ventre</li>
                  <li>Bras</li>
                  <li>Cuisses & Fesses</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>Stimulation intense du collagène</li>
                  <li>Amélioration de la fermeté et de l’élasticité</li>
                  <li>Amélioration de la qualité de peau</li>
                  <li>Réduction visible du relâchement</li>
                  <li>Activation de la microcirculation</li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6">Durée de la séance</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 minutes par zone</p>
              <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
                <p>Cette durée est optimale pour atteindre la température thérapeutique nécessaire à la stimulation du collagène sans agresser les tissus.</p>
                <p>Au-delà de ce temps, la stimulation est déjà maximale et prolonger la séance n’augmente pas l’efficacité, mais peut fatiguer inutilement les tissus.</p>
                <p>Une séance de 30 minutes permet donc un traitement efficace, sécurisé et parfaitement toléré, avec une stimulation profonde et progressive.</p>
              </div>
            </div>

            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-50">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">L’expertise KINESVELT</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">
                Chez KINESVELT, la radiofréquence est utilisée selon des protocoles précis afin d’assurer une stimulation optimale des tissus et des résultats visibles, tout en respectant la physiologie naturelle de la peau.
              </p>
            </div>

          </div>

          <AddToCartCard machineName="Radiofréquence" />
        </div>
      </div>
    </section>
  );
}