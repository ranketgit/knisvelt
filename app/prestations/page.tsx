import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Prestations | Kinesvelt Casablanca",
  description: "Découvrez nos soins spécialisés pour le corps, le visage, l'intime et le capillaire.",
};

export default function PrestationsIndexPage() {
  const categories = [
    {
      title: "Prestations Corps",
      desc: "Amincissement, remodelage, drainage et épilation laser pour sculpter votre silhouette.",
      link: "/prestations/corps",
      img: "/images/corps-category.jpg" // Add an image to your public folder
    },
    {
      title: "Prestations Visage",
      desc: "Contouring, soins anti-acné, microneedling et lifting pour un teint éclatant.",
      link: "/prestations/visage",
      img: "/images/visage-category.jpg"
    },
    {
      title: "Prestations Intime",
      desc: "Soins de haute technologie HIFU pour votre bien-être et confort intime.",
      link: "/prestations/intime",
      img: "/images/intime-category.jpg"
    },
    {
      title: "Prestations Capillaires",
      desc: "Protocoles ciblés de microneedling pour redonner force et densité à vos cheveux.",
      link: "/prestations/capillaires",
      img: "/images/capillaire-category.jpg"
    }
  ];

  return (
    <div className="bg-[#FAF8F7] min-h-screen pb-24">
      
      {/* Hero */}
      <section className="relative w-full h-[400px] lg:h-[500px] mb-16 lg:mb-24">
        <div className="absolute inset-0 bg-gray-300">
          <Image src="/hero-kenisvelt.jpg" alt="Prestations" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-medium text-white mb-6">Nos Prestations</h1>
          <p className="text-lg text-white/90 max-w-2xl font-medium">
            Choisissez votre domaine de soin et découvrez nos protocoles sur-mesure.
          </p>
        </div>
      </section>

      {/* 4 Big Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-50 flex flex-col">
              <div className="relative h-64 w-full bg-gray-100">
                {/* <Image src={cat.img} alt={cat.title} fill className="object-cover" /> */}
              </div>
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <h2 className="text-2xl font-medium text-[#2A2A2A] mb-4">{cat.title}</h2>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">{cat.desc}</p>
                <Link 
                  href={cat.link}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-colors border border-gray-200 text-[#2A2A2A] px-6 py-3.5 rounded-full font-medium text-sm w-full group"
                >
                  Découvrir
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}