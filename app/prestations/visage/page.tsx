'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PrestationsVisagePage() {
  const [activeTab, setActiveTab] = useState('remodelage');

  const tabs = [
    { id: 'remodelage', label: 'Remodelage & Contouring' },
    { id: 'soins', label: 'Soins & Traitements Spécifiques' },
    { id: 'antiage', label: 'Anti-Âge & Lifting' },
  ];

  const servicesData = {
    remodelage: [
      { 
        title: "Contouring ovale du visage", 
        desc: "Redéfinissez les contours de votre visage pour une mâchoire plus nette, ferme et parfaitement sculptée.",
        href: "/prestations/contouring-ovale-visage"
      },
      { 
        title: "Graisse double menton", 
        desc: "Éliminez la graisse localisée sous le menton pour affiner votre profil de manière non invasive.",
        href: "/prestations/graisse-double-menton"
      },
    ],
    soins: [
      { 
        title: "Hydrafacial Signature", 
        desc: "Le soin iconique pour une peau parfaitement nettoyée hydratée et lumineuse.",
        href: "/prestations/hydrafacial-signature"
      },
      { 
        title: "Soin Luxury Caviar", 
        desc: "Un soin d'exception pour revitaliser intensément la peau et révéler un teint éclatant.",
        href: "/prestations/luxury-caviar"
      },
      { 
        title: "Soin Luxury ADN Saumon", 
        desc: "Revitalisez intensément la peau et restaurez son éclat naturel avec l'ADN de saumon.",
        href: "/prestations/luxury-adn-saumon"
      },
      { 
        title: "MesojectGun", 
        desc: "Mésothérapie nouvelle génération sans aiguille pour une peau hydratée, repulpée et lumineuse.",
        href: "/prestations/mesojectgun"
      },
      { 
        title: "Traitement Acné", 
        desc: "Un protocole expert pour purifier la peau et réduire durablement les imperfections.",
        href: "/prestations/soins-anti-acne"
      },
      { 
        title: "Peeling + LED", 
        desc: "Le soin expert pour renouveler la peau et révéler un teint plus lumineux.",
        href: "/prestations/peeling-led"
      },
      { 
        title: "Microneedling", 
        desc: "La technique de régénération cutanée reconnue à l’international pour améliorer la qualité de la peau.",
        href: "/prestations/microneedling-visage"
      },
      { 
        title: "Soin visage complet", 
        desc: "Un nettoyage en profondeur, une hydratation intense et une revitalisation pour une peau éclatante.",
        href: "/prestations/soin-visage-complet"
      },
      { 
        title: "Booster skin éclat", 
        desc: "Un véritable coup de fouet revitalisant pour réveiller les teints ternes et fatigués.",
        href: "/prestations/booster-skin-eclat"
      },
    ],
    antiage: [
      { 
        title: "EndyMed", 
        desc: "Le secret beauté des célébrités à Hollywood pour un lifting naturel sans chirurgie.",
        href: "/prestations/endymed"
      },
      { 
        title: "HIFU Lifting Visage", 
        desc: "Le lifting nouvelle génération par ultrasons focalisés pour retendre la peau sans chirurgie.",
        href: "/prestations/pack-lifting-full-face"
      },
      { 
        title: "Alma PrimeX", 
        desc: "Technologie avancée combinant ultrasons et radiofréquence pour redessiner les contours du visage.",
        href: "/prestations/alma-primex-visage"
      },
      { 
        title: "Radiofréquence Fractionnée", 
        desc: "Raffermissez votre peau et stimulez le collagène avec cette technologie de régénération cutanée.",
        href: "/prestations/radiofrequence-fractionnee"
      },
      { 
        title: "Exilis Lifting Visage", 
        desc: "Technologie reconnue FDA combinant radiofréquence et ultrasons pour raffermir la peau.",
        href: "/prestations/exilis-lifting-visage"
      },
      { 
        title: "LPG Visage + Kobido", 
        desc: "L'alliance d'une technologie avancée et d'un massage ancestral japonais pour un effet lifting.",
        href: "/prestations/lpg-visage-kobido"
      },
      { 
        title: "Pack anti-âge", 
        desc: "Prévenez et traitez les premiers signes du vieillissement avec des soins repulpants.",
        href: "/prestations/pack-anti-age"
      },
    ]
  };

  return (
    <div className="bg-[#FAF8F7] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full h-[400px] lg:h-[500px]">
        <div className="absolute inset-0 bg-gray-200">
          <Image src="/visage.jpg" alt="Prestations Visage" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-sm font-semibold tracking-widest uppercase">
              Kinesvelt
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-medium text-white mb-6">
            Prestations Visage
          </h1>
          <p className="text-lg text-white/90 max-w-2xl font-medium">
            Révélez l'éclat de votre visage avec nos soins esthétiques de haute technologie.
          </p>
        </div>
      </section>

      {/* Intro Philosophy Section - WORD FOR WORD */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 text-center">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-[#E38F75] mb-4">
          KINESVELT by Imane D
        </h2>
        <h3 className="text-3xl lg:text-4xl font-medium text-[#2A2A2A] mb-8 leading-tight">
          SOINS VISAGE
        </h3>
        
        <div className="space-y-6 text-gray-500 text-[17px] leading-relaxed">
          <p>
            Chez KINESVELT, nous avons sélectionné les technologies visage les plus avancées afin d’offrir des soins performants, non invasifs et adaptés à chaque type de peau.
          </p>
          <p>
            Notre approche repose sur des protocoles experts combinant innovation technologique, expertise esthétique et actifs hautement concentrés afin d’améliorer visiblement la qualité de la peau tout en respectant son équilibre naturel.
          </p>
          <p>
            Chaque soin est conçu pour répondre aux besoins spécifiques du visage : hydrater profondément, améliorer l’éclat du teint, raffermir la peau et préserver la jeunesse du visage. Grâce à des technologies reconnues à l’international et des protocoles personnalisés, nos soins permettent d’obtenir des résultats visibles tout en restant naturels.
          </p>
        </div>

        <div className="mt-10 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-xl font-medium text-[#2A2A2A] italic">
            "Chez KINESVELT, notre objectif est simple : sublimer votre peau et révéler l’éclat naturel de votre visage"
          </p>
        </div>
      </section>

      {/* Tabs / Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3.5 rounded-full font-medium text-sm transition-colors ${
                activeTab === tab.id 
                  ? "bg-[#E38F75] text-white shadow-md" 
                  : "bg-white text-[#2A2A2A] border border-gray-200 hover:border-[#E38F75]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* @ts-ignore */}
          {servicesData[activeTab].map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-50 flex flex-col h-full"
            >
              <div className="mb-8 flex-grow">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <Link 
                href={service.href} 
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-colors border border-gray-200 text-[#2A2A2A] px-6 py-3 rounded-full font-medium text-sm w-full group"
              >
                Découvrir le soin
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}