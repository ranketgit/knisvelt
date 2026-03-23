import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Alma PrimeX Corps | Kinesvelt Casablanca",
  description: "Technologie de radiofréquence avancée – Remodelage corporel de dernière génération. Expertise Kinesvelt by Imane D.",
};

export default function AlmaPrimexCorpsPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Corps</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-4 uppercase">
            ALMA PRIMEX
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            Technologie de radiofréquence avancée – Remodelage corporel de dernière génération
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Main Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/new-services/21.jpg" 
                 alt="Alma PrimeX Body Contouring" 
                 fill 
                 className="object-cover" 
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-8">
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Objectif du traitement</h3>
                <p>
                  Alma PrimeX est une technologie premium utilisant une radiofréquence monopolaire haute puissance permettant de réduire les graisses localisées raffermir la peau et améliorer visiblement la qualité des tissus pour un remodelage corporel complet et harmonieux.
                </p>
              </section>

              <div className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">Technologie radiofréquence avancée</h3>
                <p className="mb-4">
                  Alma PrimeX utilise une radiofréquence monopolaire pouvant atteindre jusqu’à 40.68 MHz, permettant une pénétration profonde et homogène dans les tissus.
                </p>
                <p>
                  Cette fréquence élevée permet de chauffer les tissus en profondeur de manière contrôlée favorisant la réduction des graisses localisées la stimulation intense du collagène et le raffermissement de la peau. Cette technologie agit simultanément sur la graisse et le relâchement cutané offrant un remodelage corporel complet.
                </p>
              </div>

              <section className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-3">Certification internationale</h3>
                  <p className="text-sm">Alma PrimeX est une technologie certifiée FDA et CE Medical garantissant sa sécurité son efficacité et sa conformité aux standards médicaux internationaux.</p>
                </div>
                <div className="bg-[#2A2A2A] p-6 rounded-2xl text-white">
                  <h3 className="text-lg font-medium mb-3">Exclusivité KINESVELT</h3>
                  <p className="text-sm opacity-90">Nous sommes actuellement parmi les trois centres équipés de Alma PrimeX au niveau national, confirmant notre engagement à offrir les technologies les plus avancées.</p>
                </div>
              </section>

              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-6">Zones traitées</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['Abdomen', 'Flancs', 'Cuisses', 'Fessiers', 'Bras', 'Ovale du visage'].map((zone) => (
                    <li key={zone} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                      <span>{zone}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Durée de la séance</h3>
                  <p className="text-[#E38F75] font-semibold">30 minutes</p>
                  <p className="text-sm mt-1 opacity-80">Durée optimale permettant une action profonde efficace et sécurisée.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Résultats observés</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Réduction visible des graisses localisées</li>
                    <li>• Amélioration de la fermeté de la peau</li>
                    <li>• Silhouette plus sculptée et harmonieuse</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#FAF8F7] p-8 rounded-[2rem] text-center border border-[#E38F75]/20">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">Signature KINESVELT</h3>
                <p className="italic text-gray-600">
                  "Chez KINESVELT nous sélectionnons les technologies les plus avancées au monde afin d’offrir des résultats visibles durables et à la hauteur des standards internationaux"
                </p>
              </div>
            </div>
          </div>

          <BookingForm serviceName="Alma PrimeX Corps" />
          
        </div>
      </div>
    </div>
  );
}