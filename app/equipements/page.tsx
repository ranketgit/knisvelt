import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Équipements | Kinesvelt Casablanca",
  description: "Découvrez notre parc de machines de haute technologie pour l'amincissement, le raffermissement et le remodelage corporel.",
};

export default function EquipementsIndexPage() {
  const machines = [
    // PREMIUM MACHINES FIRST
    { name: "LPG", action: "Bodycontouring et remodelage global", slug: "lpg", img: "/lpg.jpeg", premium: true },
    { name: "Emtone – BTL", action: "Traitement avancé de la cellulite", slug: "emtone-btl", img: "/emtone.jpeg", premium: true },
    { name: "Exilis – BTL", action: "Combinaison radiofréquence et ultrasons", slug: "exilis-btl", img: "/exilis.jpeg", premium: true },
    { name: "T-Care Slim", action: "Stimulation cellulaire profonde TECAR", slug: "t-care-slim", img: "/tcare.jpeg", premium: true },
    { name: "Alma PrimeX", action: "Remodelage corporel et raffermissement premium", slug: "alma-primex-corps", img: "/new-services/21.jpg", premium: true },
    { name: "EMS NEO BTL", action: "Renforcement musculaire et réduction de graisse HIFEM+", slug: "ems-neo-btl", img: "/ems-neo.jpg", premium: true },
    { name: "VelaShape III", action: "Solution n°1 pour la cellulite et la circonférence", slug: "velashape-3", img: "/vela.jpg", premium: true },
    
    // STANDARD MACHINES
    { name: "Radiofréquence", action: "Raffermissement et régénération cutanée", slug: "radiofrequence", img: "/radio.jpeg" },
    { name: "Lipocavitation", action: "Réduction de la graisse localisée", slug: "lipocavitation", img: "/lipo.jpeg" },
    { name: "Ondes de Choc X-Wave", action: "Stimulation mécanique profonde et restructuration", slug: "ondes-de-choc", img: "/ondes.jpeg" },
    { name: "Pressothérapie", action: "Drainage et stimulation circulatoire", slug: "pressotherapie", img: "/presto.jpeg" },
    { name: "EMSculpt", action: "Renforcement musculaire et remodelage", slug: "emsculpt", img: "/emscuplt.jpeg" },
    { name: "I-Lipo", action: "Laser lipolytique de dernière génération", slug: "i-lipo", img: "/i-lipo.jpeg" },
    { name: "Endosphères", action: "Micro-vibration compressive pour le drainage", slug: "endospheres", img: "/endospheres.jpeg" },
    { name: "Madérothérapie", action: "Remodelage par instruments en bois et métal", slug: "maderotherapie", img: "/maderotherapie.jpeg" }
  ];

  return (
    <div className="bg-[#FAF8F7] min-h-screen pb-24">
      
      {/* Wide Hero Section */}
      <section className="relative w-full h-[400px] lg:h-[500px] mb-16 lg:mb-24">
        <div className="absolute inset-0">
          <Image src="/presto.jpeg" alt="Nos Équipements" fill className="object-cover" priority /> 
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-medium text-white mb-6 uppercase tracking-tight">Nos Équipements</h1>
          <p className="text-lg text-white/90 max-w-2xl font-light">
            Technologies internationales de pointe au service de votre corps.
          </p>
        </div>
      </section>

      {/* Grid of Machines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {machines.map((machine, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-50 flex flex-col h-full hover:shadow-md transition-all duration-300">
              
              {/* Machine Image Container */}
              <div className="relative h-64 w-full bg-gray-100">
                <Image src={machine.img} alt={machine.name} fill className="object-cover" />
                
                {/* Minimal Premium Tag */}
                {machine.premium && (
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-gray-100">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#E38F75]">Technologie Premium</span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6 flex-grow">
                  <h2 className="text-xl font-medium text-[#2A2A2A] mb-3 uppercase tracking-tight">{machine.name}</h2>
                  <p className="text-gray-500 text-[15px] leading-relaxed font-light">{machine.action}</p>
                </div>

                <Link 
                  href={`/equipements/${machine.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#E38F75] hover:text-[#d47b60] transition-colors group mt-auto"
                >
                  Découvrir la technologie
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}