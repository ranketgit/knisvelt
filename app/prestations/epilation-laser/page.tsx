import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Épilation Laser | Kinesvelt Casablanca",
  description: "Une solution définitive, sûre et indolore pour une peau douce et sans poils toute l'année.",
};

export default function EpilationLaserPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Corps - Épilation</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A]">Épilation Laser</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100">
               {/* <Image src="/images/epilation-laser.jpg" alt="Épilation Laser" fill className="object-cover" /> */}
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-6">
              <p>Oubliez les contraintes du rasage et de la cire. L'épilation laser est la technologie de référence pour se débarrasser définitivement des poils indésirables sur toutes les zones du corps et du visage.</p>
              <p>Nos équipements de dernière génération permettent de cibler le follicule pileux en toute sécurité, garantissant une destruction efficace du poil tout en respectant la sensibilité de votre peau. Le traitement est confortable, rapide et adapté à divers phototypes de peau.</p>
              
              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">Bienfaits Principaux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Élimination définitive des poils au fil des séances</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Traitement des poils incarnés et diminution des irritations</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#E38F75] mt-1">•</span><span>Peau douce, nette et impeccable au quotidien</span></li>
                </ul>
              </div>
            </div>
          </div>
          <BookingForm serviceName="Épilation Laser" />
        </div>
      </div>
    </div>
  );
}