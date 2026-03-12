import Image from "next/image";

export default function OwnerExpertise() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Text Side */}
        <div className="flex flex-col order-2 lg:order-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">
              Mot de la fondatrice
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A] mb-8 uppercase tracking-tight">
            Imane Daoudi
          </h2>

          {/* Main Talking Section in Italic */}
          <div className="space-y-6 text-gray-500 text-[16px] leading-relaxed italic">
            <p>
              Depuis plus de 16 ans, j’ai à cœur d’accompagner chaque femme et chaque homme dans leur bien-être et leur transformation avec une approche à la fois humaine, professionnelle et exigeante.
            </p>
            <p>
              Notre centre, d’une superficie de 400 m² répartis sur deux étages, dispose de 20 boxes individuels afin de garantir à chacun confort, discrétion et qualité de prise en charge. L’hygiène et la sécurité sont pour nous une priorité absolue et nous appliquons des protocoles stricts afin d’offrir un environnement irréprochable à nos patients.
            </p>
            <p>
              Au fil des années, nous avons développé une véritable expertise dans l’amincissement, le bien-être et les soins de la peau, en mettant toujours l’accent sur des résultats naturels et durables.
            </p>
            <p>
              Toujours en quête d’excellence, je veille personnellement à intégrer au centre les dernières technologies high-tech du marché, sélectionnées pour leur efficacité et leurs certifications internationales (FDA et autres organismes reconnus).
            </p>
            <p>
              Notre mission est simple : offrir à chacun des solutions modernes, sûres et performantes pour se sentir mieux dans son corps et retrouver confiance en soi.
            </p>
            <p>
              Bienvenue dans notre univers.
            </p>
          </div>

          <div className="mt-12">
            <p className="font-semibold text-[#2A2A2A] text-lg">Imane Daoudi</p>
            <p className="text-[#E38F75] text-sm uppercase font-medium tracking-widest">Fondatrice</p>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative h-[600px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden order-1 lg:order-2 bg-[#FAF8F7] shadow-sm">
          <Image 
            src="/daoud.png" 
            alt="Imane Daoudi, Fondatrice Kinesvelt" 
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}