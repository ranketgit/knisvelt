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
             À propos du centre
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-medium leading-[1.2] text-[#2A2A2A] mb-8 uppercase tracking-tight">
            Kinesvelt — centre d'amincissement médical à Casablanca depuis 16 ans
          </h2>

          {/* Main Talking Section in Italic */}
          <div className="space-y-6 text-gray-500 text-[16px] leading-relaxed italic">
            <p>
             Fondé par <span className="font-bold text-black">Imane Daoudi, kinésithérapeute certifiée</span>, Kinesvelt accompagne femmes et hommes à Casablanca depuis plus de 16 ans dans leur transformation physique et leur bien-être. Notre centre de <span className="font-bold text-black">400 m² répartis sur deux étages</span>, avec ses <span className="font-bold text-black">20 boxes individuels fermés</span>, garantit à chaque patient discrétion, confort et une prise en charge 100 % personnalisée.
            </p>
            <p>
              Notre approche est médicale, pas esthétique. Chaque programme est construit autour d'un <span className="font-bold text-black">bilan morphologique complet</span> réalisé avant la première séance. Nous sélectionnons uniquement des équipements aux <span className="font-bold text-black">certifications FDA et internationales</span> — LPG, EMS Neo BTL, Emtone BTL, Exilis BTL, HIFU, lipocavitation, Alma PrimeX — pour garantir des résultats documentés et durables.
            </p>
            <p>
             Hygiène, sécurité et suivi rigoureux ne sont pas des options chez Kinesvelt. Ce sont des engagements.
            </p>
           
          </div>

          <div className="mt-12">
            <p className="font-semibold text-[#2A2A2A] text-lg">Imane Daoudi</p>
            <p className="text-[#E38F75] text-sm uppercase font-medium tracking-widest">Fondatrice & Kinésithérapeute certifiée</p>
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