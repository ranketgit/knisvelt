import type { Metadata } from "next";
import Image from "next/image";
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "Emtone – BTL | Kinesvelt Casablanca",
  description: "Technologie internationale révolutionnaire conçue pour traiter efficacement tous les types de cellulite.",
};

export default function EmtonePage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            {/* Category Tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Machines Premium</span>
            </div>
            
            {/* Title & Quote */}
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6 tracking-tight">EMTONE – BTL</h1>
            
            <blockquote className="border-l-4 border-[#E38F75] pl-6 italic text-gray-500 text-xl mb-8">
              “Technologie internationale révolutionnaire conçue pour traiter efficacement tous les types de cellulite.”
            </blockquote>

            <h2 className="text-xl lg:text-2xl text-[#2A2A2A] font-medium mb-10 leading-relaxed">
              Technologie exclusive combinant radiofréquence et ondes de pression – Traitement avancé de la cellulite
            </h2>

            {/* FIXED HEIGHT IMAGE CONTAINER */}
            <div className="relative w-full h-[250px] lg:h-[350px] mb-12 rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <Image 
                src="/emtone.jpeg" 
                alt="EMTONE BTL Technology" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            {/* Description Text */}
            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <p>EMTONE est une technologie développée par BTL, leader international dans le domaine des technologies médicales esthétiques, utilisée dans les centres les plus avancés au monde.</p>
              <p>Cette machine combine simultanément deux technologies puissantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La radiofréquence, qui chauffe les tissus en profondeur pour stimuler la production de collagène et raffermir la peau.</li>
                <li>Les ondes de pression, qui agissent mécaniquement pour casser les structures responsables de la cellulite et améliorer la circulation.</li>
              </ul>
              <p>Cette double action permet de traiter efficacement les différentes causes de la cellulite : graisse, rétention d’eau et relâchement cutané. Le traitement est totalement non invasif, confortable et 0 douleur, procurant une sensation de chaleur et de massage profond.</p>
            </div>

            <hr className="border-gray-100 mb-12" />

            {/* Zones & Results Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Zones traitées</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Cuisses & Fessiers</li>
                  <li>• Ventre & Taille</li>
                  <li>• Bras</li>
                </ul>
                <p className="mt-4 text-[14px] text-gray-400 italic">Particulièrement efficace sur la cellulite même ancienne et résistante.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Résultats</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Réduction visible de la cellulite</li>
                  <li>• Fermeté de la peau accrue</li>
                  <li>• Texture cutanée lissée</li>
                  <li>• Silhouette harmonieuse</li>
                </ul>
                <p className="mt-4 text-[14px] text-gray-400 italic">Résultats visibles dès les premières séances.</p>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            {/* Duration Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6 tracking-tight">Durée de la séance</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 minutes</p>
              <p className="text-gray-500 text-[17px] leading-relaxed">Cette durée permet une activation optimale des tissus et une stimulation complète du collagène, assurant un traitement efficace, confortable et parfaitement sécurisé.</p>
            </div>

            {/* Kinesvelt Advantage */}
            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-100 italic shadow-sm">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4 uppercase tracking-wider not-italic">Avantage exclusif KINESVELT</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">Chez KINESVELT, la technologie EMTONE BTL fait partie des technologies les plus avancées au monde intégrées dans des protocoles complets afin d’offrir un traitement global de la cellulite, du raffermissement et du bodycontouring.</p>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:sticky lg:top-24">
            <AddToCartCard machineName="Emtone – BTL" />
          </aside>
          
        </div>
      </div>
    </section>
  );
}