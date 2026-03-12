import Link from "next/link";

export default function Prestations() {
  const categories = [
    {
      title: "Prestations Corps",
      link: "/prestations/corps",
      image: "/corp.png",
      subcategories: [
        "Amincissement & Silhouette",
        "Remodelage & Raffermissement",
        "Drainage & Post-opératoire",
        "Épilation Laser"
      ]
    },
    {
      title: "Prestations Visage",
      link: "/prestations/visage",
      image: "/services/2.jpg",
      subcategories: [
        "Remodelage & Contouring",
        "Soins Spécifiques (Acné, Microneedling)",
        "Booster Skin Éclat",
        "Anti-Âge & Lifting Full Face"
      ]
    },
    {
      title: "Prestations Intime",
      link: "/prestations/hifu-vaginal",
      image: "/services/3.jpg",
      subcategories: [
        "HIFU Vaginal",
        "Soins rajeunissement"
      ]
    },
    {
      title: "Prestations Capillaires",
      link: "/prestations/capillaires",
      image: "/services/4.jpg",
      subcategories: [
        "Microneedling Cheveux",
        "Traitements antichute"
      ]
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">
              Notre Carte
            </span>
          </div>
          <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A] max-w-2xl">
            Découvrez l'ensemble de nos prestations
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-[#FAF8F7] rounded-[2rem] overflow-hidden border border-transparent flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:shadow-[#E38F75]/5"
            >
              {/* Image Header - Fixed Height */}
              <div className="relative h-64 w-full overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F7] to-transparent opacity-60"></div>
              </div>

              {/* Content Area */}
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6">
                  {category.title}
                </h3>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {category.subcategories.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#E38F75] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-[15px] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={category.link} 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#E38F75] hover:text-[#d47b60] transition-colors"
                >
                  VOIR TOUS LES SOINS
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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