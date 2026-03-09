'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type VisageCategory = 'remodelage' | 'soins' | 'antiage';

export default function PrestationsVisagePage() {
  const [activeTab, setActiveTab] = useState<VisageCategory>('remodelage');

  const tabs: { id: VisageCategory; label: string }[] = [
    { id: 'remodelage', label: 'Remodelage & Contouring' },
    { id: 'soins', label: 'Soins & Traitements Spécifiques' },
    { id: 'antiage', label: 'Anti-Âge & Lifting' },
  ];

  const servicesData: Record<VisageCategory, { title: string; desc: string; href: string }[]> = {
    remodelage: [
      { title: "Contouring ovale du visage", desc: "Redéfinissez les contours de votre visage pour une mâchoire plus nette, ferme et parfaitement sculptée.", href: "/prestations/contouring-ovale-visage" },
      { title: "Graisse double menton", desc: "Éliminez la graisse localisée sous le menton pour affiner votre profil de manière non invasive.", href: "/prestations/graisse-double-menton" },
    ],
    soins: [
      { title: "Hydrafacial Signature", desc: "Le soin iconique pour une peau parfaitement nettoyée hydratée et lumineuse.", href: "/prestations/hydrafacial-signature" },
      { title: "Soin Luxury Caviar", desc: "Un soin d'exception pour revitaliser intensément la peau et révéler un teint éclatant.", href: "/prestations/luxury-caviar" },
      { title: "Soin Luxury ADN Saumon", desc: "Revitalisez intensément la peau et restaurez son éclat naturel avec l'ADN de saumon.", href: "/prestations/luxury-adn-saumon" },
      { title: "MesojectGun", desc: "Mésothérapie nouvelle génération sans aiguille pour une peau hydratée, repulpée et lumineuse.", href: "/prestations/mesojectgun" },
      { title: "Traitement Acné", desc: "Un protocole expert pour purifier la peau et réduire durablement les imperfections.", href: "/prestations/soins-anti-acne" },
      { title: "Peeling + LED", desc: "Le soin expert pour renouveler la peau et révéler un teint plus lumineux.", href: "/prestations/peeling-led" },
      { title: "Microneedling", desc: "La technique de régénération cutanée reconnue à l’international pour améliorer la qualité de la peau.", href: "/prestations/microneedling-visage" },
      { title: "Soin visage complet", desc: "Un nettoyage en profondeur, une hydratation intense et une revitalisation pour une peau éclatante.", href: "/prestations/soin-visage-complet" },
      { title: "Booster skin éclat", desc: "Un véritable coup de fouet revitalisant pour réveiller les teints ternes et fatigués.", href: "/prestations/booster-skin-eclat" },
    ],
    antiage: [
      { title: "EndyMed", desc: "Le secret beauté des célébrités à Hollywood pour un lifting naturel sans chirurgie.", href: "/prestations/endymed" },
      { title: "HIFU Lifting Visage", desc: "Le lifting nouvelle génération par ultrasons focalisés pour retendre la peau sans chirurgie.", href: "/prestations/pack-lifting-full-face" },
      { title: "Alma PrimeX", desc: "Technologie avancée combinant ultrasons et radiofréquence pour redessiner les contours du visage.", href: "/prestations/alma-primex-visage" },
      { title: "Radiofréquence Fractionnée", desc: "Raffermissez votre peau et stimulez le collagène avec cette technologie de régénération cutanée.", href: "/prestations/radiofrequence-fractionnee" },
      { title: "Exilis Lifting Visage", desc: "Technologie reconnue FDA combinant radiofréquence et ultrasons pour raffermir la peau.", href: "/prestations/exilis-lifting-visage" },
      { title: "LPG Visage + Kobido", desc: "L'alliance d'une technologie avancée et d'un massage ancestral japonais pour un effet lifting.", href: "/prestations/lpg-visage-kobido" },
      { title: "Pack anti-âge", desc: "Prévenez et traitez les premiers signes du vieillissement avec des soins repulpants.", href: "/prestations/pack-anti-age" },
    ]
  };

  return (
    <div className="bg-[#FAF8F7] min-h-screen">
      <section className="relative w-full h-[400px] lg:h-[500px]">
        <div className="absolute inset-0 bg-gray-200">
          <Image src="/visage.jpg" alt="Prestations Visage" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-medium text-white mb-6 uppercase">Prestations Visage</h1>
          <p className="text-lg text-white/90 max-w-2xl font-medium">KINESVELT by Imane D</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData[activeTab].map((service, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-50 flex flex-col h-full">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">{service.title}</h3>
              <p className="text-gray-500 text-[15px] mb-8 flex-grow">{service.desc}</p>
              <Link href={service.href} className="text-center bg-[#FAF8F7] hover:bg-[#E38F75] hover:text-white transition-all py-3 rounded-xl font-medium text-sm border border-gray-100">
                Découvrir le soin
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}