'use client';

import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Combien de séances faut-il pour voir des résultats ?",
      answer: "Les premiers résultats — perte de centimètres, peau plus ferme — sont visibles dès la 3e ou 4e séance selon la technique utilisée. Un programme complet comprend entre 8 et 12 séances. Votre bilan initial permet de définir le nombre exact et le rythme adapté à votre situation."
    },
    {
      question: "Les soins d'amincissement sont-ils douloureux ?",
      answer: "Non. Toutes les techniques proposées chez Kinesvelt sont non invasives. Certains patients ressentent une légère chaleur pendant la radiofréquence ou une sensation de pression pendant la lipocavitation — aucune douleur, aucune anesthésie, aucune éviction sociale."
    },
    {
      question: "Le centre reçoit-il les hommes ?",
      answer: "Oui. Kinesvelt accueille femmes et hommes pour tous les programmes corps, soins visage et équipements. Chaque séance se déroule en box individuel fermé pour une discrétion totale."
    },
    {
      question: "Où est situé le centre Kinesvelt à Casablanca ?",
      answer: "Le centre est situé Résidence Al Andalous, quartier Californie, Casablanca. Nous recevons du lundi au vendredi de 9h à 19h30. Vous pouvez réserver en ligne ou appeler le 05 22 21 73 91."
    },
    {
      question: "Comment se déroule le bilan morphologique offert ?",
      answer: "Le bilan dure 20 à 30 minutes. Notre kinésithérapeute analyse votre morphologie, comprend vos antécédents et objectifs, puis vous propose un programme précis avec les techniques adaptées et le nombre de séances recommandé. Le bilan est entièrement gratuit et sans obligation de traitement."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A]">
            Questions fréquentes — centre d'amincissement à Casablanca
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? "border-[#E38F75] bg-[#FAF8F7]" : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-lg font-medium transition-colors ${isOpen ? "text-[#E38F75]" : "text-[#2A2A2A]"}`}>
                    {faq.question}
                  </h3>
                  
                  {/* Plus / Minus Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? "bg-[#E38F75] rotate-180" : "bg-[#EEF3ED]"}`}>
                    {isOpen ? (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-[#2A2A2A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-gray-500 text-[15px] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}