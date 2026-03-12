import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Centre | Kinesvelt Casablanca",
  description: "Découvrez le centre Kinesvelt : le bon équilibre entre une atmosphère relaxante et les technologies les plus avancées.",
};

export default function LeCentrePage() {
  const pillars = [
    {
      number: "01",
      title: "Écoute",
      description: "Tout ce que vous devez savoir physiquement et émotionnellement. Notre premier principe est de vous écouter pour comprendre vos besoins réels."
    },
    {
      number: "02",
      title: "Moderne",
      description: "Nous disposons du meilleur équipement et des dernières technologies mondiales pour garantir des résultats fiables et sans douleur."
    },
    {
      number: "03",
      title: "Chaleureux",
      description: "Être au centre, c'est comme si vous étiez à la maison. Un environnement accueillant, relaxant et bienveillant."
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] lg:h-[600px] mb-20 lg:mb-32">
        <div className="absolute inset-0 bg-gray-300">
        <Image src="/centre.jpg" alt="Le Centre Kinesvelt" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[#070933]/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-sm font-semibold tracking-widest uppercase">
              À Propos de Nous
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Le Centre
          </h1>
          <p className="text-lg lg:text-xl text-white/90 font-light leading-relaxed">
          Vous trouverez au centre Kinesvelt le parfait équilibre entre une atmosphère calme et relaxante et l’utilisation de technologies et machines de pointe, reconnues pour leur efficacité. Nos traitements pour le corps et le visage sont entièrement non invasifs, et bénéficient de plus de 16 ans d’expérience au service de votre bien-être et de votre beauté.
          </p>
        </div>
      </section>

      {/* The 3 Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 lg:mb-32">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <span className="text-6xl font-bold text-[#E38F75]/20 mb-6 group-hover:text-[#E38F75] transition-colors duration-500">
                {pillar.number}
              </span>
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-500 text-[16px] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Description Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 lg:mb-32">
        <div className="bg-[#FAF8F7] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-gray-200">
             <Image src="/centre-page.jpg" alt="Intérieur du centre Kinesvelt" fill className="object-cover" />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-medium text-[#2A2A2A] mb-8 leading-tight">
              Kinesvelt, un environnement <span className="text-[#E38F75] italic">accueillant</span> et chaleureux.
            </h2>
            <div className="space-y-6 text-gray-500 text-[17px] leading-relaxed">
              <p>
                Nous sommes spécialisés dans l’amincissement, le suivi nutritionnel, le bien-être et le coaching sportif.
              </p>
              <p>
                Notre philosophie repose sur une prise en charge globale et personnalisée. Nous combinons l'expertise humaine à la puissance des technologies de pointe pour vous aider à atteindre vos objectifs dans les meilleures conditions possibles.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="border-t border-gray-100 pt-16">
          <h2 className="text-3xl lg:text-4xl font-medium text-[#2A2A2A] mb-4">
            Prêt pour une expérience riche ?
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Venez nous dire bonjour en Californie à Casablanca, ou contactez-nous directement en ligne.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#2A2A2A] hover:bg-black transition-colors text-white px-8 py-4 rounded-full font-medium text-sm"
          >
            Contactez-nous
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}