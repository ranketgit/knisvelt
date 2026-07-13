import Link from "next/link";
import Image from "next/image";

export default function Technologies() {
  const machines = [
    // PREMIUM MACHINES FIRST
    {
      name: "LPG",
      action: "Le standard mondial du remodelage corporel. Palper-rouler mécanique pour éliminer la cellulite, drainer et raffermir la peau en profondeur.",
      link: "/equipements/lpg",
      img: "/lpg.jpeg",
      premium: true
    },
    {
      name: "Emtone BTL",
      action: "Combine radiofréquence et ondes de pression pour traiter les 4 types de cellulite simultanément. Certifié FDA.",
      link: "/equipements/emtone-btl",
      img: "/emtone.jpeg",
      premium: true
    },
    {
      name: "Exilis BTL",
      action: "Radiofréquence et ultrasons combinés pour raffermir la peau du visage et du corps. Résultats progressifs sur 3 à 6 mois. Certifié FDA.",
      link: "/equipements/exilis-btl",
      img: "/exilis.jpeg",
      premium: true
    },
    {
      name: "T-Care Slim",
      action: "Radiofréquence capacitive pour stimuler le métabolisme cellulaire et réduire la graisse localisée en profondeur.",
      link: "/equipements/t-care-slim",
      img: "/tcare.jpeg",
      premium: true
    },
    {
      name: "Alma PrimeX",
      action: "Technologie premium multi-applications : réduit les graisses, raffermit la peau et améliore la texture cutanée. Corps et visage.",
      link: "/equipements/alma-primex-corps",
      img: "/new-services/21.jpg", 
      premium: true
    },
    {
      name: "EMS Neo BTL",
      action: "20 000 contractions musculaires par séance. Renforce la sangle abdominale et brûle la graisse en parallèle. Certifié FDA.",
      link: "/equipements/ems-neo-btl",
      img: "/ems-neo.jpg",
      premium: true
    },
    {
      name: "VelaShape III",
      action: "Solution certifiée FDA n°1 contre la cellulite : combine infrarouge, radiofréquence et aspiration pour réduire la peau d'orange.",
      link: "/equipements/velashape-3",
      img: "/vela.jpg",
      premium: true
    },
    
    // STANDARD MACHINES
    {
      name: "Radiofréquence",
      action: "Raffermissement et régénération cutanée par chaleur contrôlée. Stimule la production de collagène en profondeur.",
      link: "/equipements/radiofrequence",
      img: "/radio.jpeg"
    },
    {
      name: "Lipocavitation",
      action: "Ultrasons de basse fréquence pour désintégrer les cellules graisseuses dans les zones ciblées. Non invasif, sans douleur.",
      link: "/equipements/lipocavitation",
      img: "/lipo.jpeg"
    },
    {
      name: "Ondes de choc X-Wave",
      action: "Stimulation mécanique profonde pour briser les fibres de cellulite compacte et restructurer les tissus.",
      link: "/equipements/ondes-de-choc",
      img: "/ondes.jpeg"
    },
    {
      name: "Pressothérapie",
      action: "Drainage lymphatique par compression séquentielle. Élimine la rétention d'eau, réduit les gonflements et améliore la circulation.",
      link: "/equipements/pressotherapie",
      img: "/presto.jpeg"
    },
    {
      name: "EMSculpt",
      action: "Électrostimulation haute intensité pour sculpter et tonifier sans effort physique. Idéal abdominaux et fessiers.",
      link: "/equipements/emsculpt",
      img: "/emscuplt.jpeg"
    },
    {
      name: "I-Lipo",
      action: "Laser lipolytique de dernière génération pour déstabiliser les cellules graisseuses et réduire les centimètres.",
      link: "/equipements/i-lipo",
      img: "/i-lipo.jpeg"
    },
    {
      name: "Endosphères",
      action: "Micro-vibration compressive pour drainer, lisser la peau d'orange et remodeler les contours du corps.",
      link: "/equipements/endospheres",
      img: "/endospheres.jpeg"
    },
    {
      name: "Madérothérapie & Métallothérapie",
      action: "Modelage corporel manuel par instruments en bois et en métal. Drainant, raffermissant et sculptant.",
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
          <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A] max-w-4xl">
            Technologies certifiées FDA, les meilleurs équipements d'amincissement à Casablanca
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
                  Découvrir
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