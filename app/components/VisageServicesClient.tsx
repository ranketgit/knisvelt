'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type VisageCategory = 'remodelage' | 'soins' | 'antiage';

export default function VisageServicesClient() {
  const [activeTab, setActiveTab] = useState<VisageCategory>('remodelage');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const tabs: { id: VisageCategory; label: string }[] = [
    { id: 'remodelage', label: 'Remodelage & Contouring' },
    { id: 'soins', label: 'Soins & Traitements Spécifiques' },
    { id: 'antiage', label: 'Anti-Âge & Lifting' },
  ];

  const categoryIntros: Record<VisageCategory, string> = {
    remodelage: "Nos soins de remodelage visage agissent en profondeur sur les contours et le galbe. Ultrasons focalisés, LPG mécanique et massage Kobido sont combinés pour redéfinir l'ovale, traiter le double menton et remodeler les volumes — sans injection, sans chirurgie.",
    soins: "Des protocoles ciblés pour traiter les imperfections, hydrater en profondeur et améliorer durablement la texture et l'éclat de votre peau. Chaque soin est adapté à votre type de peau lors du bilan initial.",
    antiage: "Nos protocoles anti-âge utilisent des technologies certifiées FDA pour traiter en profondeur le relâchement cutané, les rides et la perte de densité — avec des résultats progressifs et naturels, sans chirurgie."
  };

  const servicesData: Record<VisageCategory, { title: string; desc: string; href: string }[]> = {
    remodelage: [
      { title: "Contouring ovale du visage", desc: "Énergie thermique et mécanique pour tonifier le bas du visage et redessiner la mâchoire. Résultats particulièrement marqués après une perte de poids. 2 à 4 séances.", href: "/prestations/contouring-ovale-visage" },
      { title: "Graisse double menton", desc: "Ultrasons focalisés sur la graisse localisée sous le menton — résistante au régime et au sport. Profil affiné de face et de côté en 2 à 4 séances.", href: "/prestations/graisse-double-menton" },
    ],
    soins: [
      { title: "Hydrafacial Signature", desc: "Nettoyage profond, exfoliation douce et infusion de sérums concentrés en une séance. Sans rougeur ni éviction sociale. Adapté à toutes les peaux, y compris peaux réactives et rosacées.", href: "/prestations/hydrafacial-signature" },
      { title: "Soin Luxury Caviar", desc: "Actifs ultra-concentrés en acides aminés et oméga. Répare la barrière cutanée et restaure densité et éclat. Idéal pour les peaux sèches ou manquant de vitalité.", href: "/prestations/luxury-caviar" },
      { title: "Soin Luxury ADN Saumon", desc: "Polynucléotides de saumon pour stimuler la régénération cellulaire en profondeur. Efficace sur peaux post-stress, post-traitement ou avec une perte d'éclat persistante.", href: "/prestations/luxury-adn-saumon" },
      { title: "MesojectGun", desc: "Infusion d'acide hyaluronique, vitamines et peptides dans le derme par pression — sans aiguille, sans douleur. Peau repulpée et lumineuse dès la première séance.", href: "/prestations/mesojectgun" },
      { title: "Traitement Acné", desc: "Peeling, LED bleue antibactérienne et soins régulateurs pour purifier la peau et prévenir les récidives. Traite la cause — pas uniquement les boutons visibles. Adapté à l'acné adulte et hormonale.", href: "/prestations/soins-anti-acne" },
      { title: "Peeling + LED", desc: "Exfoliation chimique douce suivie de photothérapie LED pour renouveler les cellules et stimuler le collagène. Teint unifié et texture lissée dès la 1re séance.", href: "/prestations/peeling-led" },
      { title: "Microneedling", desc: "Micro-lésions contrôlées pour relancer la production naturelle de collagène. Cicatrices d'acné atténuées, pores resserrés, texture améliorée durablement. 3 à 5 séances.", href: "/prestations/microneedling-visage" },
      { title: "Soin visage complet", desc: "Nettoyage, exfoliation enzymatique, masque ciblé et hydratation adaptée à votre type de peau. Soin d'entretien mensuel recommandé entre deux protocoles intensifs.", href: "/prestations/soin-visage-complet" },
      { title: "Booster skin éclat", desc: "Soin express pour teints ternes ou fatigués. Revitalise, uniformise et illumine en moins d'une heure. Idéal 48h avant un mariage ou un événement.", href: "/prestations/booster-skin-eclat" },
    ],
    antiage: [
      { title: "EndyMed", desc: "Le secret beauté des célébrités à Hollywood pour un lifting naturel sans chirurgie.", href: "/prestations/endymed" },
      { title: "HIFU Lifting Visage", desc: "Ultrasons haute intensité sur les couches profondes du visage — même action que la chirurgie, sans bistouri ni éviction. Raffermissement et remontée de l'ovale visibles dès 4 à 6 semaines. 1 séance par an suffit.", href: "/prestations/pack-lifting-full-face" },
      { title: "Alma PrimeX", desc: "Combine plusieurs technologies pour traiter simultanément le relâchement, les irrégularités de texture et les taches. Résultat naturel et progressif en 4 séances.", href: "/prestations/alma-primex-visage" },
      { title: "Radiofréquence Fractionnée", desc: "Énergie thermique en micro-zones du derme pour resserrer les pores, lisser les ridules et améliorer la densité cutanée. Résultats qui se construisent sur 6 à 8 semaines.", href: "/prestations/radiofrequence-fractionnee" },
      { title: "Exilis Lifting Visage", desc: "Chaleur contrôlée pour contracter les fibres de collagène immédiatement et relancer leur production sur 3 à 6 mois. Certifié FDA. Idéal pour le début de relâchement, les paupières et le cou.", href: "/prestations/exilis-lifting-visage" },
      { title: "LPG Visage + Kobido", desc: "Alliance unique à Casablanca : le LPG mécanique relance la production de collagène et d'élastine pendant que le Kobido japonais redéfinit les contours. Lifting naturel sans chaleur ni injection.", href: "/prestations/lpg-visage-kobido" },
      { title: "Pack anti-âge", desc: "Combinaison de technologies choisies après bilan pour traiter rides, relâchement et manque d'éclat en même temps. Protocole sur mesure — pas un soin pré-formulé.", href: "/prestations/pack-anti-age" },
    ]
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Quelle est la différence entre un soin visage chez Kinesvelt et dans un salon classique ?",
      answer: "Nos soins sont supervisés par Imane Daoudi, kinésithérapeute diplômée d'État, avec des équipements certifiés FDA. Un salon de beauté utilise des soins cosmétiques qui agissent en surface — nous utilisons des dispositifs médicaux qui agissent dans les couches profondes du derme pour un résultat durable."
    },
    {
      question: "Le HIFU visage est-il douloureux et combien de séances faut-il ?",
      answer: "Le HIFU provoque des sensations de chaleur et de légères vibrations profondes — inconfortables pour certains, mais pas douloureux. Une seule séance est suffisante pour un lifting global. Les résultats progressent sur 4 à 6 mois et durent 12 à 18 mois. Un entretien annuel suffit."
    },
    {
      question: "Puis-je faire un Hydrafacial si j'ai la peau sensible ou de la rosacée ?",
      answer: "Oui. L'Hydrafacial est compatible avec les peaux réactives, sensibles et rosacées car il n'utilise ni chaleur ni abrasion agressive. L'intensité et les sérums sont adaptés à votre type de peau lors du bilan préalable."
    },
    {
      question: "Quel soin recommandez-vous pour l'acné adulte à Casablanca ?",
      answer: "Pour l'acné adulte hormonale, nous recommandons un protocole combiné : Peeling LED pour réguler le sébum, LED bleue antibactérienne, et MesojectGun pour apaiser l'inflammation. Ce protocole traite la cause, pas uniquement les boutons visibles."
    },
    {
      question: "Comment se déroule le bilan peau chez Kinesvelt ?",
      answer: "Le bilan dure 20 à 30 minutes. Notre kinésithérapeute analyse votre peau, comprend vos antécédents et vous propose un programme précis avec le nombre de séances et les techniques adaptées. Le bilan est gratuit et sans obligation de traitement."
    }
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* BLOC INTRO */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gray-600 text-[16px] lg:text-[17px] leading-relaxed mb-6">
            Chez Kinesvelt, les soins visage ne relèvent pas de l'esthétique classique. Chaque protocole est conçu et supervisé par Imane Daoudi, kinésithérapeute certifiée avec 16 ans d'expérience clinique. Nos équipements — HIFU, Exilis BTL, Alma PrimeX, radiofréquence fractionnée, LPG, Hydrafacial — sont les mêmes technologies utilisées dans les meilleurs centres médicaux.
          </p>
          <p className="text-gray-600 text-[16px] lg:text-[17px] leading-relaxed">
            Chaque soin se déroule en box individuel fermé, et chaque parcours commence par un bilan peau gratuit pour identifier vos vrais besoins — pas un protocole générique appliqué à tout le monde.
          </p>
        </div>

        {/* ONGLETS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full font-medium text-sm transition-all ${activeTab === tab.id ? "bg-[#E38F75] text-white shadow-md" : "bg-white text-gray-500 border border-gray-100"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* INTRO DE LA CATÉGORIE ACTIVE */}
        <div className="max-w-3xl mx-auto text-center mb-12 min-h-[60px]">
          <p className="text-gray-500 text-[15px] leading-relaxed italic">
            {categoryIntros[activeTab]}
          </p>
        </div>

        {/* GRILLE DES CARTES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData[activeTab].map((service, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-50 flex flex-col h-full hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">{service.title}</h3>
              <p className="text-gray-500 text-[15px] mb-8 flex-grow">{service.desc}</p>
              <Link href={service.href} className="text-center bg-[#FAF8F7] hover:bg-[#E38F75] hover:text-white transition-all py-3 rounded-xl font-medium text-sm border border-gray-100">
                Découvrir le soin
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* POURQUOI KINESVELT EST DIFFÉRENT */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image d'Imane Daoudi */}
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden">
              <Image 
                src="/imane.jpg" 
                alt="Imane Daoudi kinésithérapeute certifiée Kinesvelt Casablanca" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Contenu textuel */}
            <div>
              <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A] mb-6">
                Pourquoi Kinesvelt est différent des salons de beauté classiques
              </h2>
              <p className="text-gray-500 text-[16px] leading-relaxed mb-10">
                À Casablanca, la majorité des instituts proposent des soins visage cosmétiques — efficaces en surface, sans action réelle sur les structures profondes de la peau. Chez Kinesvelt, c'est différent pour 4 raisons concrètes.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#EEF3ED] text-[#E38F75] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <div>
                    <h3 className="text-[17px] font-medium text-[#2A2A2A] mb-1">Un bilan peau avant chaque protocole.</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">Nous commençons par comprendre votre peau : son type, ses fragilités, ses objectifs. Ce bilan est gratuit, sans engagement, et détermine le programme exact qui vous convient.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#EEF3ED] text-[#E38F75] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <div>
                    <h3 className="text-[17px] font-medium text-[#2A2A2A] mb-1">Des technologies certifiées, pas des soins de confort.</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">HIFU, Exilis BTL, Alma PrimeX, radiofréquence fractionnée — ce sont des dispositifs médicaux homologués dont l'efficacité est documentée dans la littérature scientifique. Ils agissent dans les couches profondes du derme.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#EEF3ED] text-[#E38F75] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <div>
                    <h3 className="text-[17px] font-medium text-[#2A2A2A] mb-1">Supervisé par une kinésithérapeute diplômée d'État.</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">Imane Daoudi, fondatrice de Kinesvelt, cumule 16 ans de pratique clinique. Chaque protocole est conçu et contrôlé par elle — pas par une esthéticienne.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#EEF3ED] text-[#E38F75] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <div>
                    <h3 className="text-[17px] font-medium text-[#2A2A2A] mb-1">Suivi documenté séance par séance.</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">Photos avant/après à chaque étape. Vous voyez et mesurez concrètement vos progrès.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-500">
                  Découvrez aussi nos <Link href="/prestations/corps" className="text-[#E38F75] hover:underline">soins corps</Link>, nos <Link href="/prestations/capillaires" className="text-[#E38F75] hover:underline">soins capillaires</Link> et nos <Link href="/equipements" className="text-[#E38F75] hover:underline">équipements</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#FAF8F7] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A]">
              Questions fréquentes — soins visage Casablanca
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
              Bilan peau offert — sans engagement, en box individuel fermé
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 relative z-10">
              Avant tout traitement, on diagnostique. Notre kinésithérapeute analyse votre peau, identifie vos besoins réels et vous propose le programme adapté — avec les technologies et le budget qui correspondent à votre situation.
            </p>
            <Link 
              href="https://kinesvelt.com/reservation" 
              className="inline-flex items-center px-10 py-4 text-white bg-[#E38F75] hover:bg-[#d47b60] font-medium rounded-full transition-all duration-300 shadow-lg shadow-[#E38F75]/20 hover:shadow-xl transform hover:-translate-y-1 relative z-10 gap-2"
            >
              Réserver mon bilan peau
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}