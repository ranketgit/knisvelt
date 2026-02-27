'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PrestationsVisagePage() {
  // The tabs are your sub-categories for the face
  const [activeTab, setActiveTab] = useState('remodelage');

  const tabs = [
    { id: 'remodelage', label: 'Remodelage & Contouring' },
    { id: 'soins', label: 'Soins & Traitements Spécifiques' },
    { id: 'antiage', label: 'Anti-Âge & Lifting' },
  ];

  // The cards are the ACTUAL individual facial services, now with correct hrefs
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
        title: "Soin visage complet", 
        desc: "Un nettoyage en profondeur, une hydratation intense et une revitalisation pour une peau éclatante de santé.",
        href: "/prestations/soin-visage-complet"
      },
      { 
        title: "Soins & Anti-acné (Ados & Adultes)", 
        desc: "Des protocoles purifiants et apaisants conçus pour réguler le sébum et réduire visiblement les imperfections.",
        href: "/prestations/soins-anti-acne"
      },
      { 
        title: "Microneedling visage", 
        desc: "Stimulez naturellement la production de collagène pour atténuer les cicatrices, resserrer les pores et lisser la peau.",
        href: "/prestations/microneedling-visage"
      },
      { 
        title: "Booster skin éclat", 
        desc: "Un véritable coup de fouet revitalisant pour réveiller les teints ternes et fatigués.",
        href: "/prestations/booster-skin-eclat"
      },
    ],
    antiage: [
      { 
        title: "Pack anti-âge", 
        desc: "Prévenez et traitez les premiers signes du vieillissement avec des soins repulpants et hautement ciblés.",
        href: "/prestations/pack-anti-age"
      },
      { 
        title: "Pack lifting full face", 
        desc: "Un effet tenseur global pour redonner fermeté, élasticité et jeunesse à l'ensemble de votre visage.",
        href: "/prestations/pack-lifting-full-face"
      },
    ]
  };

  return (
    <div className="bg-[#FAF8F7] min-h-screen">
      
      {/* Wide Hero Section for VISAGE */}
      <section className="relative w-full h-[400px] lg:h-[500px]">
        {/* Placeholder background color until you add the image */}
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

      {/* Tabs / Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Tab Buttons */}
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

              {/* Dynamically linking to the correct page */}
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