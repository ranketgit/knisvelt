import Image from 'next/image';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "EndyMed | Kinesvelt Casablanca",
  description: "Le secret beauté des célébrités. La radiofréquence nouvelle génération pour un lifting naturel sans chirurgie. Expertise Kinesvelt by Imane D.",
};

export default function EndymedPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Visage</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-4 uppercase">
            ENDYMED
          </h1>
          <h2 className="text-xl text-[#E38F75] font-medium leading-relaxed max-w-3xl italic">
            Le secret beauté des célébrités
          </h2>
          <p className="text-lg text-gray-500 mt-2">La technologie de radiofréquence nouvelle génération qui fait le buzz à Hollywood pour un lifting naturel sans chirurgie</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Main Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/new-services/15.jpg" 
                 alt="EndyMed Lifting Naturel" 
                 fill 
                 className="object-cover" 
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-8">
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Description</h3>
                <p>
                  Le EndyMed est une plateforme esthétique avancée utilisant la technologie exclusive 3DEEP Radiofréquence permettant de chauffer les couches profondes de la peau afin de stimuler intensément la production naturelle de collagène.
                  Ce traitement permet de raffermir la peau, lisser les rides et redessiner les contours du visage tout en restant totalement non invasif.
                </p>
                <p>
                  Cette technologie est aujourd’hui très utilisée dans les cliniques esthétiques haut de gamme et appréciée par certaines célébrités, notamment à Hollywood.
                </p>
              </section>

              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-4">Certifications</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>Technologie 3DEEP Radiofréquence brevetée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>FDA cleared (États-Unis)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                    <span>Certification Médicale CE (Europe)</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm italic">Ces certifications garantissent sécurité, efficacité et qualité médicale du traitement.</p>
              </div>

              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6">Les 4 têtes de traitement visage</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="border-l-2 border-[#E38F75] pl-4">
                    <h4 className="font-medium text-[#2A2A2A]">Skin Tightening</h4>
                    <p className="text-sm">Raffermit la peau et stimule la production de collagène pour un effet lifting naturel.</p>
                  </div>
                  <div className="border-l-2 border-[#E38F75] pl-4">
                    <h4 className="font-medium text-[#2A2A2A]">Contour</h4>
                    <p className="text-sm">Redessine l’ovale du visage et améliore la fermeté des bajoues.</p>
                  </div>
                  <div className="border-l-2 border-[#E38F75] pl-4">
                    <h4 className="font-medium text-[#2A2A2A]">Precision</h4>
                    <p className="text-sm">Idéale pour les zones délicates comme le contour des yeux et les ridules.</p>
                  </div>
                  <div className="border-l-2 border-[#E38F75] pl-4">
                    <h4 className="font-medium text-[#2A2A2A]">Fractional RF</h4>
                    <p className="text-sm">Améliore la texture de la peau, réduit les pores et stimule la régénération cutanée.</p>
                  </div>
                </div>
              </section>

              <div className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-6">Bienfaits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Effet lifting naturel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Raffermissement visible de la peau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Redéfinition de l’ovale du visage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Réduction des rides et ridules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Amélioration de la texture cutanée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Stimulation intense du collagène</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Durée de la séance</h3>
                  <p className="text-[#E38F75] font-semibold">20 minutes</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Résultat</h3>
                  <p>La peau devient progressivement plus ferme plus lisse et visiblement rajeunie, avec un visage raffermi et des contours redessinés.</p>
                </div>
              </div>

              <div className="bg-[#2A2A2A] p-8 rounded-[2rem] text-white">
                <h3 className="text-xl font-medium mb-4">Signature KINESVELT</h3>
                <p className="opacity-90 leading-relaxed italic">
                  Chez KINESVELT by Imane D, la technologie EndyMed est intégrée dans un protocole expert afin d’offrir un lifting naturel du visage sans chirurgie ni éviction sociale.
                </p>
              </div>
            </div>
          </div>

          <BookingForm serviceName="EndyMed Visage" />
          
        </div>
      </div>
    </div>
  );
}