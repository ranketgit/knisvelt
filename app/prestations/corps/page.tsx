'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the valid keys strictly for the build
type CorpsCategory = 'amincissement' | 'remodelage' | 'drainage' | 'epilation';

export default function PrestationsCorpsPage() {
  const [activeTab, setActiveTab] = useState<CorpsCategory>('amincissement');

  const tabs: { id: CorpsCategory; label: string }[] = [
    { id: 'amincissement', label: 'Amincissement & Silhouette' },
    { id: 'remodelage', label: 'Remodelage & Raffermissement' },
    { id: 'drainage', label: 'Drainage & Post-opératoire' },
    { id: 'epilation', label: 'Épilation' },
  ];

  const servicesData: Record<CorpsCategory, { title: string; desc: string; href: string }[]> = {
    amincissement: [
      { title: "Cure post accouchement", desc: "Retrouvez votre silhouette après bébé avec un accompagnement sur-mesure.", href: "/prestations/cure-post-accouchement" },
      { title: "Cure allaitement", desc: "Des soins amincissants adaptés et sécurisés pendant votre période d'allaitement.", href: "/prestations/cure-allaitement" },
      { title: "Cure minceur zone localisée", desc: "Ciblez spécifiquement les zones rebelles (ventre, cuisses, bras, hanches).", href: "/prestations/cure-zone-localisee" },
      { title: "Cure bodycontouring full body", desc: "Un remodelage complet pour sculpter et affiner l'ensemble de votre corps.", href: "/prestations/cure-bodycontouring-full-body" },
      { title: "Cure renforcement musculaire", desc: "Tonifiez votre corps et développez votre masse musculaire efficacement.", href: "/prestations/cure-renforcement-musculaire" },
      { title: "Cure spéciale cellulite", desc: "Des protocoles intensifs pour lisser la peau et éliminer l'aspect peau d'orange.", href: "/prestations/cure-speciale-cellulite" },
      { title: "Cure thyroïde / OPK / diabète", desc: "Un programme minceur strictement adapté à votre métabolisme et vos contraintes de santé.", href: "/prestations/cure-thyroide-opk-diabete" },
      { 
        title: "Alma PrimeX Corps", 
        desc: "Technologie premium de radiofréquence certifiée FDA pour réduire les graisses localisées et raffermir la peau.",
        href: "/equipements/alma-primex-corps"
      }
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

  return (
    <div className="bg-[#FAF8F7] min-h-screen">
      <section className="relative w-full h-[400px] lg:h-[500px]">
        <div className="absolute inset-0 bg-gray-200">
         <Image src="/corps.jpg" alt="Prestations Corps" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-medium text-white mb-6 uppercase">Prestations Corps</h1>
          <p className="text-lg text-white/90 max-w-2xl font-medium">Des solutions sur-mesure pour sculpter, raffermir et sublimer votre silhouette.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData[activeTab].map((service, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-50 flex flex-col h-full">
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
    </div>
  );
}