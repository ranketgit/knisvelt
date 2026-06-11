'use client';

import { useState } from 'react';
import Link from 'next/link';

type CorpsCategory = 'amincissement' | 'remodelage' | 'drainage' | 'epilation';

export default function CorpsServicesClient() {
  const [activeTab, setActiveTab] = useState<CorpsCategory>('amincissement');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const tabs: { id: CorpsCategory; label: string }[] = [
    { id: 'amincissement', label: 'Amincissement & Silhouette' },
    { id: 'remodelage', label: 'Remodelage & Raffermissement' },
    { id: 'drainage', label: 'Drainage & Post-opératoire' },
    { id: 'epilation', label: 'Épilation' },
  ];

  const servicesData: Record<CorpsCategory, { title: string; desc: string; href: string }[]> = {
    amincissement: [
      { title: "Cure post accouchement", desc: "Retrouvez votre silhouette après bébé grâce à un programme combinant drainage lymphatique, raffermissement cutané et remodelage abdominal. Adapté à votre corps et validé selon le délai post-accouchement. Résultats progressifs dès la 4e séance.", href: "/prestations/cure-post-accouchement" },
      { title: "Cure allaitement", desc: "Des soins amincissants non invasifs, sans chaleur intense, sécurisés pour les périodes d'allaitement. Techniques douces pour retrouver la silhouette tout en préservant votre confort et celui de votre bébé.", href: "/prestations/cure-allaitement" },
      { title: "Cure minceur zone localisée", desc: "Lipocavitation et ondes de choc pour cibler spécifiquement les zones rebelles — ventre, cuisses, bras, hanches — résistantes au régime et au sport. Réduction de centimètres mesurable dès la 2e séance.", href: "/prestations/cure-zone-localisee" },
      { title: "Cure bodycontouring full body", desc: "Remodelage complet du corps par la combinaison lipocavitation, radiofréquence et EMS Neo. Agit simultanément sur la graisse, la peau et la musculature pour redéfinir l'ensemble de la silhouette en 10 à 15 séances.", href: "/prestations/cure-bodycontouring-full-body" },
      { title: "Cure renforcement musculaire", desc: "L'EMS Neo BTL génère 20 000 contractions musculaires par séance pour tonifier abdominaux et fessiers et brûler la graisse en parallèle. Idéal après une perte de poids pour sculpter durablement.", href: "/prestations/cure-renforcement-musculaire" },
      { title: "Cure spéciale cellulite", desc: "Protocole intensif combinant LPG, Emtone BTL et ondes de choc pour lisser la peau d'orange et traiter les 4 types de cellulite — compacte, molle, aqueuse, mixte. Résultats visibles sur la texture de la peau dès la 3e séance.", href: "/prestations/cure-speciale-cellulite" },
      { title: "Cure thyroïde / OPK / diabète", desc: "Programme minceur conçu spécifiquement pour les métabolismes perturbés par l'hypothyroïdie, le SOPK ou la résistance à l'insuline. Chaque protocole est adapté à votre bilan médical — là où les cures classiques échouent.", href: "/prestations/cure-thyroide-opk-diabete" },
      { title: "Alma PrimeX Corps", desc: "Technologie premium de radiofréquence certifiée FDA qui réduit les graisses localisées, raffermit la peau et améliore la texture cutanée en une seule séance. Combinaison radiofréquence bipolaire et lumière pulsée pour un résultat global.", href: "/equipements/alma-primex-corps" }
    ],
    remodelage: [
      { title: "Traitement colombien fessier", desc: "Rehaussement et galbe naturel des fessiers sans chirurgie ni injection (Dernière génération).", href: "/prestations/traitement-colombien-fessier" },
    ],
    drainage: [
      { title: "Drainage lymphatique post opératoire", desc: "Accélérez votre récupération, réduisez les œdèmes et soulagez les tissus après une intervention.", href: "/prestations/drainage-post-operatoire" },
    ],
    epilation: [
      { title: "Épilation laser", desc: "La solution durable pour une peau parfaitement lisse grâce aux technologies laser de dernière génération.", href: "/prestations/epilation-laser" },
    ]
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Qu'est-ce que la lipocavitation et est-ce efficace ?",
      answer: "La lipocavitation utilise des ultrasons de basse fréquence pour désintégrer les membranes des cellules graisseuses dans les zones ciblées. Résultats visibles dès la 2e séance. Programme complet : 6 à 8 séances selon la zone et l'objectif. Non invasif, sans douleur, sans anesthésie."
    },
    {
      question: "Combien de séances faut-il pour voir des résultats ?",
      answer: "Cela dépend de la technique et de l'objectif. Pour la lipocavitation ou le LPG, les premiers résultats apparaissent entre la 3e et la 5e séance. Un programme de remodelage complet comprend 10 à 15 séances. Le bilan initial définit le nombre exact adapté à votre situation."
    },
    {
      question: "Les soins corps sont-ils compatibles avec une grossesse ou un allaitement ?",
      answer: "Pas pendant la grossesse. Pour l'allaitement, certains soins non thermiques sont autorisés — notre cure allaitement est spécifiquement conçue pour cette période. Aucun soin n'est réalisé sans validation préalable de votre situation médicale."
    },
    {
      question: "Quel est le prix des soins corps chez Kinesvelt Casablanca ?",
      answer: "Les tarifs varient selon la technique, la zone traitée et le nombre de séances. Nous proposons un bilan gratuit pour vous établir un devis personnalisé. Réservez directement en ligne sans engagement."
    }
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* BLOC INTRO */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gray-600 text-[16px] lg:text-[17px] leading-relaxed mb-6">
            Chez Kinesvelt, les soins corps combinent les meilleures technologies certifiées FDA — lipocavitation, LPG, EMS Neo BTL, radiofréquence — pour traiter en profondeur les zones rebelles résistantes au sport et à l'alimentation. Chaque protocole est supervisé par Imane Daoudi, kinésithérapeute certifiée avec 16 ans d'expérience.
          </p>
          <p className="text-gray-600 text-[16px] lg:text-[17px] leading-relaxed">
            Avant toute séance, un bilan morphologique gratuit identifie vos objectifs réels et définit le programme adapté — nombre de séances, technologies combinées, rythme de suivi. Pas de cure standard appliquée à tout le monde.
          </p>
        </div>

        {/* ONGLETS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3.5 rounded-full font-medium text-sm transition-colors ${activeTab === tab.id ? "bg-[#E38F75] text-white shadow-md" : "bg-white text-[#2A2A2A] border border-gray-200"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* GRILLE DES CARTES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData[activeTab].map((service, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-50 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="mb-8 flex-grow">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">{service.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{service.desc}</p>
              </div>
              <Link href={service.href} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-colors border border-gray-200 text-[#2A2A2A] px-6 py-3 rounded-full font-medium text-sm w-full group">
                Découvrir le soin
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* POURQUOI KINESVELT */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A]">
              Pourquoi choisir Kinesvelt pour vos soins corps à Casablanca
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-[#EEF3ED] text-[#E38F75] flex items-center justify-center flex-shrink-0 font-bold">1</span>
              <div>
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-2">16 ans d'expertise médicale.</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">Imane Daoudi, kinésithérapeute diplômée d'État, supervise chaque programme. Nos soins ne relèvent pas de l'esthétique — ils reposent sur des protocoles cliniques documentés.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-[#EEF3ED] text-[#E38F75] flex items-center justify-center flex-shrink-0 font-bold">2</span>
              <div>
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-2">Technologies certifiées FDA.</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">LPG, EMS Neo BTL, Emtone BTL, lipocavitation, Alma PrimeX : des équipements utilisés dans les centres médicaux de référence internationaux. Disponibles à Casablanca chez Kinesvelt.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-[#EEF3ED] text-[#E38F75] flex items-center justify-center flex-shrink-0 font-bold">3</span>
              <div>
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-2">20 boxes individuels fermés.</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">Chaque séance se déroule en cabine privée. Discrétion, confort et hygiène irréprochables garantis à chaque visite.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-[#EEF3ED] text-[#E38F75] flex items-center justify-center flex-shrink-0 font-bold">4</span>
              <div>
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-2">Suivi documenté.</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">Photos et mesures avant/après à chaque séance. Vous mesurez concrètement votre progression.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#FAF8F7] py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A]">
              Questions fréquentes — soins corps à Casablanca
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-[#E38F75] bg-white" : "border-gray-200 bg-white hover:border-gray-300"}`}>
                  <button onClick={() => toggleFaq(index)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none">
                    <h3 className={`text-[17px] font-medium transition-colors ${isOpen ? "text-[#E38F75]" : "text-[#2A2A2A]"}`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? "bg-[#E38F75] rotate-180" : "bg-[#EEF3ED]"}`}>
                      {isOpen ? (
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                      ) : (
                        <svg className="w-4 h-4 text-[#2A2A2A]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                      )}
                    </div>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
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

      {/* CTA FINAL */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EEF3ED] rounded-[3rem] p-10 lg:p-16 text-center shadow-sm relative overflow-hidden">
            <h2 className="text-3xl lg:text-4xl font-medium text-[#2A2A2A] mb-6 relative z-10">
              Bilan morphologique offert — sans engagement
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 relative z-10">
              Avant tout programme, notre kinésithérapeute analyse votre silhouette, identifie les zones à traiter et construit votre programme sur mesure. Premier rendez-vous offert et sans obligation de traitement.
            </p>
            <Link 
              href="https://kinesvelt.com/reservation" 
              className="inline-flex items-center px-10 py-4 text-white bg-[#E38F75] hover:bg-[#d47b60] font-medium rounded-full transition-all duration-300 shadow-lg shadow-[#E38F75]/20 hover:shadow-xl transform hover:-translate-y-1 relative z-10 gap-2"
            >
              Réserver mon bilan corps
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}