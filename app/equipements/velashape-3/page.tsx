import type { Metadata } from "next";
import Image from "next/image";
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "VelaShape III | Kinesvelt Casablanca",
  description: "Technologie avancée de remodelage corporel, traitement de la cellulite et raffermissement cutané.",
};

export default function Velashape3Page() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Machines Premium</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6 uppercase tracking-tight">VELASHAPE III</h1>
            <h2 className="text-xl lg:text-2xl text-gray-400 font-medium mb-10 leading-relaxed">
              Remodelage corporel – cellulite – raffermissement cutané
            </h2>

            {/* FIXED HEIGHT IMAGE CONTAINER */}
            <div className="relative w-full h-[250px] lg:h-[350px] mb-12 rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <Image 
                src="/vela.jpg" 
                alt="VelaShape III Technology" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            {/* Technologie Section */}
            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <h3 className="text-2xl font-medium text-[#2A2A2A]">Technologie</h3>
              <p>
                La technologie VelaShape III est un traitement esthétique non invasif conçu pour remodeler la silhouette, réduire la cellulite et améliorer la fermeté de la peau. Elle combine 4 technologies complémentaires :
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#FAF8F7] p-6 rounded-2xl border border-gray-50 italic">
                <li>• Radiofréquence bipolaire (RF)</li>
                <li>• Lumière infrarouge (IR)</li>
                <li>• Aspiration vacuum</li>
                <li>• Massage mécanique par rouleaux</li>
              </ul>
              <p>
                Cette combinaison chauffe les tissus adipeux, stimule la circulation sanguine et lymphatique et favorise la production de collagène. La chaleur générée agit sur les cellules graisseuses et les fibres de collagène pour réduire le volume graisseux et améliorer la texture de la peau.
              </p>
            </div>

            <hr className="border-gray-100 mb-12" />

            {/* Certifications & Etudes Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Certifications internationales</h3>
                <ul className="space-y-3 text-gray-500 text-[15px]">
                  <li>• FDA Clearance (USA) pour la cellulite</li>
                  <li>• 1er appareil FDA pour la réduction de circonférence</li>
                  <li>• Certification CE Medical Device (Europe)</li>
                  <li>• Technologie Syneron / Candela</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Études & Résultats</h3>
                <ul className="space-y-3 text-gray-500 text-[15px]">
                  <li>• Amélioration significative de la cellulite</li>
                  <li>• Réduction de 2 à 7 cm de tour de zone</li>
                  <li>• Stimulation active du collagène</li>
                  <li>• Peau plus lisse et plus ferme</li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            {/* Zones & Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Zones traitées</h3>
                <ul className="grid grid-cols-2 gap-2 text-gray-500 text-[15px]">
                  <li>• Abdomen</li>
                  <li>• Cuisses</li>
                  <li>• Fesses</li>
                  <li>• Bras</li>
                  <li>• Flancs</li>
                  <li>• Dos</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Déroulement</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Durée : <strong>30 à 45 minutes</strong></li>
                  <li>• Sensation : Massage chauffant confortable</li>
                  <li>• Type : 100% Non invasif</li>
                  <li>• Reprise : Activités immédiates</li>
                </ul>
              </div>
            </div>

            {/* Signature Section */}
            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 border border-gray-100 italic">
              <h3 className="text-lg font-medium text-[#2A2A2A] mb-3 uppercase tracking-wider not-italic">L’expertise KINESVELT</h3>
              <p className="text-gray-500 text-[16px] leading-relaxed">
                Le VelaShape III est une référence mondiale du bodycontouring. Chez KINESVELT, nous l'intégrons dans des protocoles sur-mesure pour traiter simultanément l'aspect peau d'orange et le relâchement cutané.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <AddToCartCard machineName="VelaShape III" />
          </aside>
          
        </div>
      </div>
    </section>
  );
}