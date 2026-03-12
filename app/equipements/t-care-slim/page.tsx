import type { Metadata } from "next";
import Image from "next/image";
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "T-Care Slim | Kinesvelt Casablanca",
  description: "Technologie TECAR – Stimulation cellulaire profonde par radiofréquence capacitive et résistive.",
};

export default function TCareSlimPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Machines Premium</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6 tracking-tight uppercase">T-CARE SLIM</h1>
            
            <blockquote className="border-l-4 border-[#E38F75] pl-6 italic text-gray-500 text-xl mb-8">
              “Technologie internationale avancée capable de stimuler les tissus en profondeur et relancer naturellement le raffermissement et le remodelage du corps.”
            </blockquote>

            <h2 className="text-xl lg:text-2xl text-[#2A2A2A] font-medium mb-10 leading-relaxed">
              Technologie TECAR – Stimulation cellulaire profonde par radiofréquence capacitive et résistive
            </h2>

            {/* FIXED HEIGHT IMAGE CONTAINER */}
            <div className="relative w-full h-[250px] lg:h-[350px] mb-12 rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <Image 
                src="/tcare.jpeg" 
                alt="T-Care Slim Technology" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <p>T-CARE utilise la technologie TECAR (Transfert Électrique Capacitif et Résistif), une technologie internationale basée sur l’émission d’ondes radiofréquences qui pénètrent profondément dans les tissus afin de stimuler l’activité cellulaire.</p>
              <p>Cette énergie agit directement à l’intérieur des tissus, provoquant une chaleur interne naturelle qui stimule la circulation sanguine, active le drainage lymphatique et relance les mécanismes naturels de régénération.</p>
              <p>Contrairement aux technologies superficielles, T-CARE agit à la fois sur les tissus superficiels et profonds, permettant un traitement complet et efficace. Le traitement est totalement non invasif, confortable et 0 douleur, procurant une sensation de chaleur profonde et relaxante.</p>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Zones traitées</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Ventre & Taille</li>
                  <li>• Cuisses & Fessiers</li>
                  <li>• Bras & Dos</li>
                  <li>• Visage et cou</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Résultats</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Raffermissement visible</li>
                  <li>• Qualité de peau améliorée</li>
                  <li>• Stimulation naturelle du collagène</li>
                  <li>• Drainage et circulation relancés</li>
                  <li>• Silhouette affinée</li>
                </ul>
                <p className="mt-4 text-[14px] text-gray-400 italic">Résultats visibles dès les premières séances.</p>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6 tracking-tight">Durée de la séance</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 minutes</p>
              <p className="text-gray-500 text-[17px] leading-relaxed">Cette durée permet une activation optimale des tissus et une stimulation complète des mécanismes naturels de régénération, assurant un traitement efficace, confortable et sécurisé.</p>
            </div>

            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-100 shadow-sm text-center">
              <p className="text-[#2A2A2A] text-lg font-medium italic leading-relaxed">
                “Technologie utilisée en médecine et en esthétique pour ses effets profonds sur le raffermissement et la régénération des tissus.”
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <AddToCartCard machineName="T-Care Slim" />
          </aside>
          
        </div>
      </div>
    </section>
  );
}