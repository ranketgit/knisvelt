'use client';

import Image from "next/image";
import AddToCartCard from "@/app/components/AddToCartCard";

export default function EmtoneClient() {
  const faqs = [
    {
      question: "Qu'est-ce que le traitement EMTONE BTL ?",
      answer: "L'EMTONE BTL est un appareil médical développé par BTL Aesthetics qui combine la radiofréquence monopolaire et les ondes de pression mécanique. Il est conçu pour traiter simultanément les 5 causes principales de la cellulite et le relâchement cutané, sans chirurgie, sans injection et sans temps de récupération."
    },
    {
      question: "Quel est le prix d'une séance EMTONE à Casablanca ?",
      answer: "Le tarif varie selon les zones traitées et le nombre de séances recommandées dans votre protocole. Pour obtenir un devis personnalisé, nous vous recommandons de commencer par un bilan offert chez Kinesvelt. Notre kinésithérapeute évalue votre cellulite et propose un protocole adapté à votre situation."
    },
    {
      question: "L'EMTONE BTL est-il dangereux ?",
      answer: "Non. L'EMTONE BTL est une technologie non invasive, sans aiguilles et sans chaleur excessive. Elle est cliniquement testée, sans effets secondaires significatifs et bien tolérée. La sensation pendant la séance est décrite comme une chaleur douce combinée à un massage en profondeur. Aucune période de récupération n'est nécessaire après le traitement."
    },
    {
      question: "Quels sont les avis sur l'EMTONE BTL ?",
      answer: "Les retours sont généralement positifs : réduction visible de la cellulite, peau plus ferme et texture lissée. Les résultats varient selon le profil de chaque personne, le type de cellulite et le nombre de séances réalisées. Chez Kinesvelt, chaque protocole est suivi et ajusté séance après séance."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          <div className="flex flex-col">
            {/* Category Tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
              <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Machines Premium</span>
            </div>
            
            {/* Title & Quote */}
            <h1 className="text-4xl lg:text-[3rem] font-medium leading-tight text-[#2A2A2A] mb-6 tracking-tight">
              EMTONE BTL à Casablanca, traitement cellulite par radiofréquence et ondes de choc
            </h1>
            
            <blockquote className="border-l-4 border-[#E38F75] pl-6 italic text-gray-500 text-xl mb-8">
              “Technologie développée par BTL Aesthetics pour traiter simultanément les 5 causes de la cellulite. Non invasif, sans injection, résultats visibles dès les premières séances.”
            </blockquote>

            <h2 className="text-xl lg:text-2xl text-[#2A2A2A] font-medium mb-10 leading-relaxed">
              Radiofréquence et ondes de pression combinées pour un traitement cellulite avancé
            </h2>

            {/* IMAGE CONTAINER */}
            <div className="relative w-full h-[250px] lg:h-[350px] mb-12 rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
              <Image 
                src="/emtone.jpeg" 
                alt="EMTONE BTL Technology Traitement Cellulite" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>

            {/* Description Text */}
            <div className="text-gray-500 text-[17px] leading-relaxed mb-12 space-y-6">
              <p>
                EMTONE est une technologie développée par BTL Aesthetics, leader mondial des technologies médicales esthétiques. Elle est la seule machine à combiner simultanément deux énergies dans un seul applicateur : la radiofréquence monopolaire et les ondes de pression mécanique.
              </p>
              <p>
                Chez Kinesvelt à Casablanca, l'EMTONE BTL est utilisée dans des protocoles supervisés par Imane Daoudi, kinésithérapeute certifiée avec 16 ans d'expérience. Chaque traitement est personnalisé selon le type de cellulite et les zones à traiter.
              </p>

              <div className="bg-[#FAF8F7] p-8 rounded-2xl border border-gray-50 mt-8 space-y-4">
                <h3 className="text-lg font-medium text-[#2A2A2A] mb-4">La technologie en détail</h3>
                <p>
                  <strong>Comment fonctionne la radiofréquence :</strong> La radiofréquence chauffe les tissus en profondeur à une température contrôlée. Cette chaleur détruit les cellules graisseuses, stimule la production de collagène et d'élastine, et raffermit la peau durablement.
                </p>
                <p>
                  <strong>Comment fonctionnent les ondes de pression :</strong> Les ondes de choc mécaniques cassent les cloisons fibreuses responsables de l'effet capiton. Elles améliorent également la microcirculation sanguine et accélèrent l'élimination des toxines accumulées dans les tissus.
                </p>
                <p>
                  <strong>La double action simultanée :</strong> Ces deux technologies agissent en même temps, sur les mêmes zones, ce qui décuple l'efficacité du traitement par rapport à des technologies utilisées séparément. Le traitement est non invasif, sans douleur, et procure une sensation de chaleur et de massage profond.
                </p>
              </div>
            </div>

            {/* 5 CAUSES DE LA CELLULITE */}
            <div className="mb-12">
              <h2 className="text-2xl font-medium text-[#2A2A2A] mb-6">Les 5 causes de la cellulite traitées par EMTONE BTL</h2>
              <p className="text-gray-500 text-[17px] mb-6">
                La plupart des traitements anti-cellulite n'agissent que sur une ou deux causes. EMTONE BTL est conçu pour traiter simultanément les cinq facteurs responsables de la cellulite.
              </p>
              <ul className="space-y-4 text-gray-500 text-[16px]">
                <li><strong className="text-[#2A2A2A]">1. Les graisses localisées :</strong> La radiofréquence cible et élimine les cellules graisseuses accumulées dans les tissus profonds.</li>
                <li><strong className="text-[#2A2A2A]">2. La rétention d'eau :</strong> Les ondes de pression stimulent la circulation sanguine et lymphatique, ce qui réduit les gonflements et l'accumulation de liquides.</li>
                <li><strong className="text-[#2A2A2A]">3. Le relâchement du collagène :</strong> La chaleur produite par la radiofréquence relance la synthèse naturelle du collagène et de l'élastine pour raffermir la peau.</li>
                <li><strong className="text-[#2A2A2A]">4. Les cloisons fibreuses (capitons) :</strong> Les ondes mécaniques cassent les septums fibreux qui créent l'effet peau d'orange visible à la surface.</li>
                <li><strong className="text-[#2A2A2A]">5. La mauvaise microcirculation :</strong> L'amélioration du flux sanguin dans les tissus traités accélère l'élimination des toxines et nourrit les cellules en profondeur.</li>
              </ul>
            </div>

            <hr className="border-gray-100 mb-12" />

            {/* Zones & Results Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-xl font-medium text-[#2A2A2A] mb-4">Quelles zones peut-on traiter avec l'EMTONE BTL ?</h2>
                <p className="text-gray-500 text-[15px] mb-4">
                  L'EMTONE BTL traite efficacement toutes les zones où la cellulite est persistante, même ancienne et résistante aux régimes ou à l'activité physique. Les zones les plus traitées chez Kinesvelt sont :
                </p>
                <ul className="space-y-2 text-gray-500 text-[15px] font-medium">
                  <li>• Cuisses & Fessiers</li>
                  <li>• Ventre & Taille</li>
                  <li>• Bras</li>
                </ul>
                <p className="mt-4 text-[14px] text-gray-400 italic">D'autres zones peuvent être traitées selon votre bilan personnalisé.</p>
              </div>
              <div>
                <h2 className="text-xl font-medium text-[#2A2A2A] mb-4">Résultats attendus après un traitement EMTONE BTL</h2>
                <p className="text-gray-500 text-[15px] mb-4">
                  Les résultats sont progressifs et s'installent sur plusieurs semaines. La peau devient progressivement plus ferme et lisse, la cellulite s'atténue et la silhouette se redessine.
                </p>
                <ul className="space-y-2 text-gray-500 text-[15px] font-medium">
                  <li>• Réduction visible de la cellulite</li>
                  <li>• Fermeté de la peau accrue</li>
                  <li>• Texture cutanée lissée</li>
                  <li>• Silhouette harmonieuse</li>
                </ul>
                <p className="mt-4 text-[14px] text-gray-400 italic">Des résultats sont visibles dès les premières séances selon le profil de chaque personne.</p>
              </div>
            </div>

            <hr className="border-gray-100 mb-12" />

            {/* Duration Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6 tracking-tight">Durée de la séance</h3>
              <p className="text-xl text-[#E38F75] font-medium mb-6">30 minutes</p>
              <p className="text-gray-500 text-[17px] leading-relaxed">Cette durée permet une activation optimale des tissus et une stimulation complète du collagène, assurant un traitement efficace, confortable et parfaitement sécurisé.</p>
            </div>

            {/* Pour Qui Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-medium text-[#2A2A2A] mb-6">Pour qui est indiqué le traitement EMTONE BTL ?</h2>
              <p className="text-gray-500 text-[17px] leading-relaxed">
                Ce traitement convient à toutes les personnes souhaitant réduire la cellulite et raffermir la peau sans chirurgie et sans injection. Il est particulièrement recommandé pour la cellulite résistante aux régimes, la cellulite ancienne ou profonde, le relâchement cutané après une perte de poids, et les peaux qui manquent de tonicité sur les cuisses, le ventre ou les bras. Le traitement est adapté aussi bien aux femmes qu'aux hommes.
              </p>
            </div>

            {/* Kinesvelt Advantage */}
            <div className="bg-[#FAF8F7] rounded-[2rem] p-8 lg:p-10 border border-gray-100 italic shadow-sm mb-12">
              <h3 className="text-xl font-medium text-[#2A2A2A] mb-4 uppercase tracking-wider not-italic">Avantage exclusif KINESVELT</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">
                Chez KINESVELT, la technologie EMTONE BTL fait partie des technologies les plus avancées au monde intégrées dans des protocoles complets afin d’offrir un traitement global de la cellulite, du raffermissement et du bodycontouring.
              </p>
            </div>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl font-medium text-[#2A2A2A] mb-6">Questions fréquentes sur l'EMTONE BTL à Casablanca</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group border border-gray-100 bg-gray-50 rounded-2xl open:border-[#E38F75] open:bg-white transition-colors duration-300">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 focus:outline-none">
                      <h3 className="text-[17px] font-medium text-[#2A2A2A] group-open:text-[#E38F75] transition-colors">
                        {faq.question}
                      </h3>
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EEF3ED] flex items-center justify-center text-[#2A2A2A] group-open:bg-[#E38F75] group-open:text-white transition-colors">
                        <svg className="w-4 h-4 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-500 text-[15px] leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA FINAL */}
            <section className="bg-[#EEF3ED] p-8 lg:p-12 rounded-[2rem] text-center border border-[#E38F75]/20">
              <h2 className="text-2xl lg:text-3xl font-medium text-[#2A2A2A] mb-4">
                Bilan cellulite offert, sans engagement
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Avant tout traitement EMTONE BTL, notre kinésithérapeute évalue votre type de cellulite, les zones concernées et vous propose un protocole adapté. Le bilan est gratuit et se déroule dans un box individuel fermé.<br/><br/>
                Découvrez aussi nos soins corps qui intègrent l'EMTONE dans des protocoles complets d'amincissement et de remodelage.
              </p>
              <button 
                onClick={() => {
                  document.getElementById('booking-form-container')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-8 py-4 text-white bg-[#E38F75] hover:bg-[#d47b60] font-medium rounded-full transition-all shadow-md hover:shadow-lg gap-2"
              >
                Réserver mon bilan
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </section>

          </div>

          {/* Sticky Sidebar / Add To Cart Card */}
          <aside id="booking-form-container" className="lg:sticky lg:top-24">
            <AddToCartCard machineName="Emtone – BTL" />
          </aside>
          
        </div>
      </div>
    </section>
  );
}