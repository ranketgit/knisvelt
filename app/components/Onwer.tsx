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
              L'Expertise
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A] mb-2">
            Imane Daoudi
          </h2>
          <h3 className="text-xl text-gray-500 font-medium mb-8">
            Experte en perte de poids, Physiothérapie et Bien-être
          </h3>

          <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
            Très reconnue dans la communauté de beauty médical grâce à son engagement à être une pionnière dans toutes les nouvelles technologies dans le domaine esthétique.
          </p>
          
          <p className="text-gray-500 text-[15px] leading-relaxed">
            Comment font les stars pour être aussi éclatantes ? Le secret se trouve chez Kinesvelt. Grâce aux traitements et aux équipements modernes, plusieurs stars et influenceurs nous ont fait confiance. Nous sommes fiers d’avoir aidé des milliers de femmes à atteindre leurs objectifs.
          </p>
        </div>

        {/* Image Side */}
        <div className="relative h-[500px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden order-1 lg:order-2 bg-[#FAF8F7]">
          {/* Using the direct image from the old site data */}
          <Image 
            src="/daoudi.png" 
            alt="Imane Daoudi" 
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}