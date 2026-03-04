'use client';

import { useRef } from "react";

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; 
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const testimonials = [
    {
      name: "Mounia Bouzobaa",
      text: "Accueil chaleureux, professionnalisme, objectif atteint en un mois et vingt jours."
    },
    {
      name: "Imane Moussaoui",
      text: "Meilleur soin de visage a casablanca, centre tres tres propre, puis la fille qui m a fait le soin est tres professionnelle, je recommande vivement."
    },
    {
      name: "Nouhaila Ouahdani",
      text: "Je suis très satisfaite des résultats obtenus en si peu de temps, l'équipe est très professionnelle. Merci encore une fois Mme Daoudi et à toute l'équipe. Je vous recommande à tous Kinesvelt 👍"
    },
    {
      name: "Mouna Zaki",
      text: "J'ai été séduite par la diversité des machines amincissantes dernière génération, et la qualité du lieu et de son personnel. Une adresse à recommander vivement. Grand merci imane et lamiaa"
    },
    {
      name: "Soraya Kheldoun",
      text: "Je suis vraiment très satisfaite des résultats obtenus en si peu de temps, le staff et le service est top et surtout très professionnel. Encore merci à toi Imane Daoudi d’être présente et à l’écoute tous les jours."
    }
  ];

  return (
    <section className="bg-[#FAF8F7] py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A]">
              Témoignages Clients Google
            </h2>
          </div>
          
          {/* Arrow Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#E38F75] hover:text-white hover:border-[#E38F75] transition-colors"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#E38F75] hover:text-white hover:border-[#E38F75] transition-colors"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiping Cards Container */}
        <div 
          ref={scrollContainerRef}
          className="flex flex-row flex-nowrap overflow-x-auto gap-6 pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide Webkit Scrollbar using a style block to guarantee it applies */}
          <style dangerouslySetInnerHTML={{__html: `
            div::-webkit-scrollbar { display: none; }
          `}} />

          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              /* Force strict width and prevent shrinking so they stay side-by-side */
              className="w-[320px] md:w-[400px] shrink-0 snap-center bg-white rounded-[2rem] p-8 shadow-sm border border-gray-50 flex flex-col"
            >
              {/* Quote Icon */}
              <svg className="w-8 h-8 text-[#E38F75] mb-6 opacity-40 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3 mt-auto shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#EEF3ED] flex items-center justify-center text-[#2A2A2A] font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="font-medium text-[#2A2A2A] text-sm">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}