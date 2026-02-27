import Link from "next/link";

export default function Technologies() {
  const machines = [
    {
      name: "Radiofréquence",
      action: "Technologie avancée de raffermissement et régénération cutanée.",
      link: "/equipements/radiofrequence"
    },
    {
      name: "Lipocavitation",
      action: "Technologie avancée de réduction de la graisse localisée.",
      link: "/equipements/lipocavitation"
    },
    {
      name: "Ondes de choc X-Wave",
      action: "Stimulation mécanique profonde et restructuration tissulaire.",
      link: "/equipements/ondes-de-choc"
    },
    {
      name: "Pressothérapie",
      action: "Technologie avancée de drainage et stimulation circulatoire.",
      link: "/equipements/pressotherapie"
    },
    {
      name: "EMSculpt Haute Intensity",
      action: "Renforcement musculaire et remodelage corporel.",
      link: "/equipements/emsculpt"
    },
    {
      name: "I-Lipo",
      action: "Technologie laser lipolytique de dernière génération.",
      link: "/equipements/i-lipo"
    },
    {
      name: "Endosphères",
      action: "Micro-vibration compressive pour le drainage et remodelage avancé.",
      link: "/equipements/endospheres"
    },
    {
      name: "Madérothérapie & Métallo.",
      action: "Remodelage corporel par instruments en bois et en métal.",
      link: "/equipements/maderotherapie"
    },
    {
      name: "LPG",
      action: "Bodycontouring et remodelage global de la silhouette.",
      link: "/equipements/lpg"
    },
    {
      name: "Emtone – BTL",
      action: "Technologie révolutionnaire pour traiter tous les types de cellulite.",
      link: "/equipements/emtone-btl"
    },
    {
      name: "T-Care Slim",
      action: "Stimulation cellulaire profonde par radiofréquence capacitive.",
      link: "/equipements/t-care-slim"
    },
    {
      name: "Exilis – BTL",
      action: "Combinaison radiofréquence et ultrasons pour le raffermissement.",
      link: "/equipements/exilis-btl"
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
              className="bg-white rounded-[2rem] p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col h-full"
            >
              <div className="mb-6 flex-grow">
               
                
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-3">
                  {machine.name}
                </h3>
                
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {machine.action}
                </p>
              </div>

              <Link 
                href={machine.link} 
                className="inline-flex items-center gap-2 text-sm font-medium text-[#E38F75] hover:text-[#d47b60] transition-colors group mt-auto"
              >
                Découvrir la technologie
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}