import Link from "next/link";

export default function Prestations() {
  const categories = [
    {
      title: "Prestations Corps",
      link: "/prestations/corps",
      icon: (
        <svg className="w-7 h-7 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      subcategories: [
        "Amincissement & Silhouette (Cures ciblées, post-accouchement, etc.)",
        "Remodelage & Raffermissement (Lifting colombien)",
        "Drainage & Post-opératoire",
        "Épilation Laser"
      ]
    },
    {
      title: "Prestations Visage",
      link: "/prestations/visage",
      icon: (
        <svg className="w-7 h-7 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      subcategories: [
        "Remodelage & Contouring (Ovale, double menton)",
        "Soins & Traitements Spécifiques (Acné, Microneedling)",
        "Booster Skin Éclat",
        "Anti-Âge & Lifting Full Face"
      ]
    },
    {
      title: "Prestations Intime",
      link: "/prestations/intime",
      icon: (
        <svg className="w-7 h-7 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      subcategories: [
        "HIFU Vaginal"
      ]
    },
    {
      title: "Prestations Capillaires",
      link: "/prestations/capillaires",
      icon: (
        <svg className="w-7 h-7 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      subcategories: [
        "Microneedling Cheveux"
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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-transparent flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium text-[#2A2A2A]">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
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
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#E38F75] hover:text-[#d47b60] transition-colors group"
              >
                Voir tous les soins
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