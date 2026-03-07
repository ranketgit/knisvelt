import Link from "next/link";

export default function ProgramsSection() {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      
      {/* BACKGROUND GRADIENT BLOBS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -left-[10%] top-[10%] w-[500px] h-[500px] rounded-full bg-pink-100/60 blur-[100px]"></div>
        <div className="absolute -right-[10%] bottom-[0%] w-[600px] h-[600px] rounded-full bg-blue-50/80 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A]">
            Programmes de minceur personnalisés et efficaces
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col items-start border border-white/50">
            <div className="mb-6">
              <svg className="w-12 h-12 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">
              Plans Diététiques Personnalisés
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
              Des plans nutritionnels, adaptés à vos objectifs et à vos besoins personnels.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col items-start border border-white/50">
            <div className="mb-6">
              <svg className="w-12 h-12 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">
              Traitements Corporels Avancés
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
              Des techniques avancées pour l'amincissement et le remodelage corporel.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col items-start border border-white/50">
            <div className="mb-6">
              <svg className="w-12 h-12 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">
              Coaching et Fitness
            </h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
              Un accompagnement sportif personnalisé pour sculpter et tonifier votre corps.
            </p>
          </div>
        </div>

        {/* Updated Call to Action Button */}
        <div className="text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center px-10 py-4 text-white bg-[#E38F75] hover:bg-[#d47b60] font-medium rounded-full transition-all duration-300 shadow-lg shadow-[#E38F75]/20 hover:shadow-xl hover:shadow-[#E38F75]/30 transform hover:-translate-y-1"
          >
            Commencer ma transformation
          </Link>
        </div>
      </div>
    </section>
  );
}