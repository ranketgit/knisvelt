'use client';

import { useState } from "react";
import Link from "next/link";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Quel est le meilleur centre d'amincissement à Casablanca ?",
      answer: "Kinesvelt est reconnu parmi les meilleurs centres d'amincissement à Casablanca grâce à ses 16 ans d'expertise, ses équipements certifiés FDA et ses programmes 100 % personnalisés. Chaque programme est encadré par Imane Daoudi, kinésithérapeute et nutrithérapeute certifiée."
    },
    {
      question: "Le centre Kinesvelt est-il accessible depuis le Maarif et l'Oulfa ?",
      answer: "Oui. Kinesvelt est situé au quartier Californie à Casablanca, facilement accessible depuis le Maarif, l'Oulfa, Sidi Maarouf, Bouskoura, Ain Sebaa et Dar Bouazza. Adresse : Résidence Al Andalous, Lotissement Ouled Taleb, Boulevard Al Qods."
    },
    {
      question: "Quels programmes d'amincissement propose Kinesvelt à Casablanca ?",
      answer: "Kinesvelt propose des programmes minceur personnalisés combinant suivi nutritionnel, équipements certifiés FDA (cryolipolyse, lipocavitation, radiofréquence, pressothérapie) et coaching. Chaque programme débute par un bilan corporel gratuit et sans engagement."
    },
    {
      question: "Kinesvelt propose-t-il l'épilation laser à Casablanca ?",
      answer: "Oui. Kinesvelt propose l'épilation laser définitive à Casablanca avec une triple technologie Alexandrite, Diode et Nd:YAG, adaptée à tous les phototypes y compris les peaux mates et foncées. Un diagnostic de phototype gratuit est proposé lors de la première visite.",
      link: { text: "en savoir plus sur l'épilation laser", href: "/prestations/epilation-laser" }
    },
    {
      question: "Le bilan corporel est-il vraiment gratuit ?",
      answer: "Oui. Kinesvelt offre un bilan corporel complet gratuit et sans engagement à chaque nouvelle personne. Ce bilan inclut une analyse par impédancemètre et une consultation avec Imane Daoudi pour définir le programme le plus adapté à vos objectifs."
    },
    {
      question: "Kinesvelt accueille-t-il les hommes et les femmes ?",
      answer: "Oui. Notre centre d'amincissement à Casablanca accueille les femmes et les hommes pour l'ensemble des programmes minceur, bien être et épilation laser. Les boxes privés garantissent votre confort et votre confidentialité à chaque séance."
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
            Questions fréquentes sur notre centre d'amincissement à Casablanca
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
                      {faq.answer}{" "}
                      {faq.link && (
                        <Link href={faq.link.href} className="text-[#E38F75] hover:underline font-medium">
                          {faq.link.text}
                        </Link>
                      )}
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