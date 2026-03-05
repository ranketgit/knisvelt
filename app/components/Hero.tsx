import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
        
        {/* Left Column: Text & CTA */}
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-14 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <p className="text-sm text-[#E38F75] font-bold">Kinesvelt</p>
          </div>

          <h1 className="text-4xl lg:text-[2.75rem] font-medium leading-[1.15] text-[#2A2A2A] mb-6">
            Reprenez le contrôle de votre silhouette et atteignez votre poids idéal!
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
            Nos programmes minceur personnalisés vous aident à perdre du poids de manière efficace et durable.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a href="/contact" className="bg-[#E38F75] hover:bg-[#d47b60] transition-colors text-white px-8 py-3.5 rounded-full font-medium text-sm">
              Prendre un Rendez-vous
            </a>
            
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-5 h-5 rounded-full border border-[#E38F75] flex items-center justify-center">
                <svg className="w-3 h-3 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-500 font-medium">Transformation impressionnantes</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-5 h-5 rounded-full border border-[#E38F75] flex items-center justify-center">
                <svg className="w-3 h-3 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-gray-500 font-medium">Suivi Personnalisé</span>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-[400px] lg:h-auto min-h-[500px] w-full rounded-[2.5rem] overflow-hidden">
          <Image 
            src="/hero-kenisvelt.jpg" 
            alt="Femme mesurant sa taille" 
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}

