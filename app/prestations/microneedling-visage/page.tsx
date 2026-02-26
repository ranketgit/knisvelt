import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Microneedling Visage | Kinesvelt Casablanca",
  description: "Stimulez la production de collagène pour atténuer les cicatrices, resserrer les pores et lisser la peau.",
};

export default function MicroneedlingVisagePage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Visage - Soins Spécifiques</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Microneedling Visage</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100">
               {/* <Image src="/images/microneedling-visage.jpg" alt="Microneedling Visage" fill className="object-cover" /> */}
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>Le microneedling est une technique de revitalisation cellulaire redoutable. Elle consiste à créer des micro-perforations invisibles à la surface de la peau à l'aide d'un dispositif doté de micro-aiguilles stériles à usage unique.</p>
              <p>Ce processus déclenche le mécanisme naturel de cicatrisation et de réparation de la peau, relançant massivement la production de collagène et d'élastine. Il permet également de faire pénétrer des sérums hautement concentrés (vitamines, acide hyaluronique) profondément dans l'épiderme.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Lissage du grain de peau et resserrement des pores dilatés</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Atténuation significative des cicatrices d'acné et des taches</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Coup d'éclat spectaculaire et effet "peau neuve"</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Microneedling Visage" />
        </div>
      </div>
    </div>
  );
}