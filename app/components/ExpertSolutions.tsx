import Image from "next/image";

export default function ExpertSolutions() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Image */}
        <div className="relative h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden">
          {/* Note: Add an image named 'consultation.jpg' to your public folder */}
          <Image 
            src="/solutions.jpg" 
            alt="Consultation minceur avec une experte" 
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-gray-500 text-xs font-semibold tracking-widest uppercase">
              A Silhoua
            </span>
          </div>

          <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A] mb-6">
            Solutions minceur expertes pour atteindre votre poids idéal.
          </h2>

          <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
            A Silhoua Slimming Center, nous proposons des plans personnalisés de perte de poids, adaptés à votre corps et à votre style de vie.
          </p>

          <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
            Que vous souhaitez perdre quelques kilos ou transformer votre silhouette en profondeur, notre équipe vous accompagne avec des méthodes sûres et efficaces pour obtenir des résultats durables.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-10 items-start sm:items-center">
            {/* Checkmarks */}
            <ul className="space-y-3 flex-1">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-800 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#2A2A2A] text-sm font-medium">Un accompagnement sur-mesure.</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-800 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#2A2A2A] text-sm font-medium">Spécialistes Certifiés en Perte de Poids.</span>
              </li>
            </ul>

            {/* Green Badge */}
            <div className="bg-[#EEF3ED] rounded-xl p-4 flex items-center gap-3 w-full sm:w-auto max-w-[220px]">
              <div className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-[#2A2A2A] leading-tight">Spécialistes Certifiés en Perte de Poids.</span>
            </div>
          </div>

          <div>
            <button className="bg-[#E38F75] hover:bg-[#d47b60] transition-colors text-white px-8 py-3.5 rounded-full font-medium text-sm inline-flex items-center gap-2">
              En savoir plus
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}