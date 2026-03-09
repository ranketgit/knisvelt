import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "HIFU Vaginal | Kinesvelt Casablanca",
  description: "La technologie de rajeunissement intime sans chirurgie pour améliorer le tonus et le confort féminin. Expertise Kinesvelt by Imane D.",
};

export default function HifuVaginalPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Intime</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-4 uppercase">
            HIFU VAGINAL
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            La technologie de rajeunissement intime sans chirurgie pour améliorer le tonus et le confort féminin
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Main Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/new-services/19.jpeg" 
                 alt="HIFU Vaginal rajeunissement intime" 
                 fill 
                 className="object-cover" 
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-8">
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Description</h3>
                <p>
                  Le HIFU vaginal (High Intensity Focused Ultrasound) est une technologie utilisant des ultrasons focalisés afin de stimuler la production naturelle de collagène dans les tissus intimes.
                  Ce traitement permet de raffermir les tissus vaginaux, améliorer leur tonicité et favoriser la régénération naturelle de la zone intime sans chirurgie ni injection.
                </p>
              </section>

              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">Pour qui ?</h3>
                <p className="mb-4 text-sm">Ce traitement est particulièrement indiqué pour les femmes qui souhaitent :</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>améliorer la tonicité intime après un accouchement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>traiter un relâchement vaginal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>améliorer la sécheresse intime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>réduire les fuites urinaires</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>retrouver plus de confort dans leur vie intime</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-6">Bienfaits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Raffermissement des tissus vaginaux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Amélioration de la tonicité intime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Stimulation du collagène</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Amélioration de l’hydratation intime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Réduction des fuites urinaires</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Protocole</h3>
                  <p className="text-[#E38F75] font-semibold">Cure de 3 séances</p>
                  <p className="text-sm mt-1 opacity-80 italic">espacées selon les recommandations du protocole.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Technologie</h3>
                  <p>Ultrasons focalisés permettant de stimuler la régénération naturelle des tissus et la production de collagène.</p>
                </div>
              </div>

              <section>
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Résultat</h3>
                <p>
                  Les tissus deviennent progressivement plus fermes et plus toniques, améliorant le confort intime et la qualité de vie.
                </p>
              </section>

              <div className="bg-[#2A2A2A] p-8 rounded-[2rem] text-white">
                <h3 className="text-xl font-medium mb-4">Signature KINESVELT</h3>
                <p className="opacity-90 leading-relaxed italic">
                  Chez KINESVELT by Imane D, ce traitement est réalisé avec une technologie avancée afin d’offrir une solution non invasive dédiée au bien-être intime féminin.
                </p>
              </div>
            </div>
          </div>

          <BookingForm serviceName="HIFU Vaginal" />
          
        </div>
      </div>
    </div>
  );
}