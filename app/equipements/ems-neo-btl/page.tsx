import type { Metadata } from "next";
import Image from "next/image";
import AddToCartCard from "@/app/components/AddToCartCard";

export const metadata: Metadata = {
  title: "EMS NEO BTL | Kinesvelt Casablanca",
  description: "Renforcement musculaire et réduction de graisse – Technologie médicale avancée HIFEM+ et Radiofréquence.",
};

export default function EmsNeoBtlPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Machines Premium</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-6 uppercase tracking-tight">EMS NEO BTL</h1>
            <h2 className="text-xl lg:text-2xl text-gray-400 font-medium mb-10 leading-relaxed">
              Renforcement musculaire et réduction de graisse – Technologie médicale avancée
            </h2>

            {/* FIXED HEIGHT IMAGE CONTAINER */}
            <div className="relative w-full h-[250px] lg:h-[350px] mb-12 rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <Image 
                src="/ems-neo.jpg" 
                alt="EMS NEO BTL Technology" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            {/* Technologie Section */}
            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <h3 className="text-2xl font-medium text-[#2A2A2A]">Technologie</h3>
              <p>
                La technologie EMS NEO BTL (EMSCULPT NEO) associe deux énergies de pointe : 
                <strong> HIFEM+</strong> (High-Intensity Focused Electromagnetic) et 
                <strong> Radiofréquence synchronisée</strong>.
              </p>
              <p>
                Cette combinaison permet de développer la masse musculaire tout en réduisant la graisse, dans une séance 100 % non invasive de 30 minutes. Les contractions musculaires générées sont supramaximales, impossibles à atteindre lors d’un entraînement sportif classique.
              </p>
            </div>

            <hr className="border-gray-100 mb-12" />

            {/* Certifications & Etudes Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#FAF8F7] p-8 rounded-[2rem] border border-gray-100">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Certifications internationales</h3>
                <ul className="space-y-3 text-gray-500 text-[15px]">
                  <li>• FDA Clearance (USA)</li>
                  <li>• Certification CE Medical Device</li>
                  <li>• Développé par BTL Industries</li>
                  <li>• Autorisation FDA 510(k) pour le remodelage corporel</li>
                </ul>
              </div>
              <div className="bg-[#FAF8F7] p-8 rounded-[2rem] border border-gray-100">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Études cliniques (Moyenne)</h3>
                <ul className="space-y-3 text-gray-500 text-[15px]">
                  <li>• ≈ 30 % de réduction de graisse</li>
                  <li>• ≈ 25 % de masse musculaire en plus</li>
                  <li>• Jusqu'à 28 % de réduction de couche graisseuse (IRM)</li>
                  <li>• Tonicité et définition accrues</li>
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
                  <li>• Fesses</li>
                  <li>• Bras</li>
                  <li>• Cuisses</li>
                  <li>• Flancs</li>
                  <li>• Dos</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4 uppercase text-sm tracking-widest">Déroulement</h3>
                <ul className="space-y-2 text-gray-500 text-[15px]">
                  <li>• Durée : <strong>30 minutes</strong></li>
                  <li>• Programme : Env. 4 séances</li>
                  <li>• Sensation : Contractions intenses</li>
                  <li>• Récupération : Immédiate</li>
                </ul>
              </div>
            </div>

            {/* Final Advantage Section */}
            <div className="bg-[#2A2A2A] rounded-[2rem] p-8 lg:p-10 text-white shadow-sm">
              <h3 className="text-xl font-medium mb-4 uppercase tracking-wider">Avantage de cette technologie</h3>
              <p className="text-gray-300 text-[17px] leading-relaxed italic">
                "EMS NEO est l’un des rares dispositifs au monde capable de traiter simultanément la graisse et le muscle, ce qui en fait une référence dans le body contouring non chirurgical."
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <AddToCartCard machineName="EMS NEO BTL" />
          </aside>
          
        </div>
      </div>
    </section>
  );
}