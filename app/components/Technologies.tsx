import Link from "next/link";
import Image from "next/image";

export default function Technologies() {
  const machines = [
    // PREMIUM MACHINES FIRST
    {
      name: "LPG",
      action: "Bodycontouring et remodelage global de la silhouette.",
      link: "/equipements/lpg",
      img: "/lpg.jpeg",
      premium: true
    },
    {
      name: "Emtone – BTL",
      action: "Technologie révolutionnaire pour traiter tous les types de cellulite.",
      link: "/equipements/emtone-btl",
      img: "/emtone.jpeg",
      premium: true
    },
    {
      name: "Exilis – BTL",
      action: "Combinaison radiofréquence et ultrasons pour le raffermissement.",
      link: "/equipements/exilis-btl",
      img: "/exilis.jpeg",
      premium: true
    },
    {
      name: "T-Care Slim",
      action: "Stimulation cellulaire profonde par radiofréquence capacitive.",
      link: "/equipements/t-care-slim",
      img: "/tcare.jpeg",
      premium: true
    },
    {
      name: "Alma PrimeX",
      action: "Technologie premium de radiofréquence pour réduire les graisses.",
      link: "/equipements/alma-primex",
      img: "/new-services/21.jpg", // Replace with correct image path if needed
      premium: true
    },
    {
      name: "EMS NEO BTL",
      action: "Renforcement musculaire et réduction de graisse par HIFEM+.",
      link: "/equipements/ems-neo-btl",
      img: "/ems-neo.jpg",
      premium: true
    },
    {
      name: "VelaShape III",
      action: "Solution n°1 pour la cellulite et la réduction de circonférence.",
      link: "/equipements/velashape-3",
      img: "/vela.jpg",
      premium: true
    },
    
    // STANDARD MACHINES
    {
      name: "Radiofréquence",
      action: "Technologie avancée de raffermissement et régénération cutanée.",
      link: "/equipements/radiofrequence",
      img: "/radio.jpeg"
    },
    {
      name: "Lipocavitation",
      action: "Technologie avancée de réduction de la graisse localisée.",
      link: "/equipements/lipocavitation",
      img: "/lipo.jpeg"
    },
    {
      name: "Ondes de choc X-Wave",
      action: "Stimulation mécanique profonde et restructuration tissulaire.",
      link: "/equipements/ondes-de-choc",
      img: "/ondes.jpeg"
    },
    {
      name: "Pressothérapie",
      action: "Technologie avancée de drainage et stimulation circulatoire.",
      link: "/equipements/pressotherapie",
      img: "/presto.jpeg"
    },
    {
      name: "EMSculpt Haute Intensity",
      action: "Renforcement musculaire et remodelage corporel.",
      link: "/equipements/emsculpt",
      img: "/emscuplt.jpeg"
    },
    {
      name: "I-Lipo",
      action: "Technologie laser lipolytique de dernière génération.",
      link: "/equipements/i-lipo",
      img: "/i-lipo.jpeg"
    },
    {
      name: "Endosphères",
      action: "Micro-vibration compressive pour le drainage et remodelage avancé.",
      link: "/equipements/endospheres",
      img: "/endospheres.jpeg"
    },
    {
      name: "Madérothérapie & Métallo.",
      action: "Remodelage corporel par instruments en bois et en métal.",
      link: "/equipements/maderotherapie",
      img: "/maderotherapie.jpeg"
    }
  ];

  return (
    <section className="bg-[#FAF8F7] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">
              Nos Équipements
            </span>
          </div>
          <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A] max-w-2xl">
            Des technologies de pointe au service de votre corps
          </h2>
        </div>

        {/* Machines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {machines.map((machine, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2.5rem] p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col h-full hover:shadow-md transition-shadow duration-300"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-[220px] mb-6 rounded-[1.8rem] overflow-hidden bg-gray-100 group">
                <Image 
                  src={machine.img} 
                  alt={machine.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Minimal Premium Tag */}
                {machine.premium && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-100">
                    <span className="text-[9px] uppercase tracking-[0.15em] font-bold text-[#E38F75]">Premium</span>
                  </div>
                )}
              </div>

              <div className="mb-6 flex-grow px-2">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-3 uppercase tracking-tight">
                  {machine.name}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {machine.action}
                </p>
              </div>

              <div className="px-2 pb-2 mt-auto">
                <Link 
                  href={machine.link} 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#E38F75] hover:text-[#d47b60] transition-colors group"
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
    </section>
  );
}