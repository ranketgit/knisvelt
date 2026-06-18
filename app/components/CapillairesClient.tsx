'use client';

import Image from 'next/image';
import BookingForm from './BookingForm'; // Ajustez le chemin si nécessaire

export default function CapillairesClient() {
  const faqs = [
    {
      question: "Qu'est-ce que le microneedling pour cheveux ?",
      answer: "Le microneedling capillaire est une technique qui consiste à créer de micro-perforations dans le cuir chevelu à l'aide de micro-aiguilles. Ces micro-canaux stimulent la circulation sanguine, réactivent les follicules pileux et permettent aux sérums appliqués de pénétrer en profondeur. C'est une méthode non chirurgicale reconnue pour traiter la chute des cheveux et améliorer la densité capillaire."
    },
    {
      question: "Le microneedling est-il efficace pour les cheveux ?",
      answer: "Oui. Le microneedling capillaire est une des approches non chirurgicales les mieux documentées pour stimuler la repousse. Il agit sur plusieurs mécanismes à la fois : réactivation des follicules dormants, amélioration de la microcirculation et renforcement des racines. Les résultats dépendent du profil capillaire de chaque personne et du nombre de séances réalisées."
    },
    {
      question: "Est-ce que le microneedling cheveux fait mal ?",
      answer: "La sensation pendant la séance est légère, généralement décrite comme un léger picotement. Le traitement est bien toléré et ne nécessite aucune anesthésie. Il n'y a aucun temps d'éviction : vous reprenez vos activités normalement après la séance."
    },
    {
      question: "Quel est le tarif du microneedling cheveux à Casablanca ?",
      answer: "Le tarif varie selon le protocole et le nombre de séances recommandées. Pour obtenir un devis personnalisé adapté à votre situation, nous recommandons de commencer par un bilan capillaire gratuit chez Kinesvelt."
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">
              Prestations Capillaires
            </span>
          </div>
          <h1 className="text-4xl lg:text-[3rem] font-medium leading-tight text-[#2A2A2A] mb-6">
            Microneedling cheveux à Casablanca, stimulez la repousse naturellement
          </h1>
          <h2 className="text-lg lg:text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            Un traitement capillaire ciblé qui réveille les follicules dormants, freine la chute et redonne densité à votre chevelure. Supervisé par une kinésithérapeute certifiée dans un cadre médical.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Main Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[250px] lg:h-[400px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/capill.png" 
                 alt="Microneedling cheveux Casablanca" 
                 fill 
                 className="object-cover" 
                 priority 
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-12">
              
              {/* INTRO */}
              <section>
                <p>
                  Le microneedling capillaire utilise des micro-aiguilles pour créer de très fines perforations dans le cuir chevelu. Ce processus déclenche une réponse naturelle de l'organisme : la circulation sanguine s'intensifie, les follicules pileux se réactivent et les sérums appliqués pénètrent jusqu'aux couches profondes du derme.
                </p>
                <p className="mt-4">
                  Chez Kinesvelt à Casablanca, le traitement est supervisé par Imane Daoudi, kinésithérapeute certifiée avec 16 ans d'expérience. Le protocole est adapté à chaque profil capillaire : chute diffuse, alopécie débutante, cuir chevelu affaibli après grossesse ou stress.
                </p>
              </section>

              {/* BIENFAITS */}
              <section className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h2 className="text-2xl font-medium text-[#2A2A2A] mb-6">Les bienfaits du microneedling capillaire</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">✓</span>
                    <span>Réactivation des follicules dormants et stimulation de la pousse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">✓</span>
                    <span>Renforcement des racines affaiblies par la chute ou le stress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">✓</span>
                    <span>Stimulation de la microcirculation sanguine dans le cuir chevelu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">✓</span>
                    <span>Meilleure absorption des sérums et actifs capillaires appliqués</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">✓</span>
                    <span>Redensification de la chevelure séance après séance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">✓</span>
                    <span>Traitement adapté aux hommes et aux femmes, tous types de chevelures</span>
                  </li>
                </ul>
              </section>

              {/* POUR QUI */}
              <section className="bg-gray-50 p-8 lg:p-10 rounded-[2rem] border border-gray-100">
                <h2 className="text-2xl font-medium text-[#2A2A2A] mb-4">Pour qui est indiqué le microneedling capillaire ?</h2>
                <p>
                  Ce traitement convient à toutes les personnes qui constatent une chute de cheveux progressive, une perte de densité ou un cuir chevelu fragilisé. Il est particulièrement recommandé pour traiter l'alopécie débutante ou diffuse, la chute post-partum, la chute liée au stress ou aux carences, et les cheveux fins et sans vitalité qui ne répondent plus aux soins classiques. Il est adapté aussi bien aux femmes qu'aux hommes.
                </p>
              </section>

              {/* DÉROULEMENT */}
              <section>
                <h2 className="text-2xl font-medium text-[#2A2A2A] mb-6">Comment se déroule une séance de microneedling capillaire chez Kinesvelt ?</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Étape 1 : Analyse du cuir chevelu</h3>
                    <p>Avant toute séance, notre kinésithérapeute examine l'état de votre cuir chevelu, identifie les zones à traiter et adapte le protocole à votre situation personnelle.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Étape 2 : Application du sérum</h3>
                    <p>Un sérum actif concentré est appliqué sur les zones ciblées. Il contient les principes actifs qui vont pénétrer en profondeur grâce aux micro-canaux créés lors de la séance.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Étape 3 : Microneedling</h3>
                    <p>La sonde crée de fines micro-perforations dans le cuir chevelu. La sensation est légère, comparable à un léger picotement. La séance dure entre 30 et 45 minutes selon les zones traitées.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Étape 4 : Soin post-séance</h3>
                    <p>Un soin apaisant est appliqué immédiatement après. Vous pouvez reprendre vos activités normalement le jour même.</p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="pt-8">
                <h2 className="text-2xl font-medium text-[#2A2A2A] mb-6">Questions fréquentes sur le microneedling cheveux à Casablanca</h2>
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
              <section className="bg-[#EEF3ED] p-8 lg:p-12 rounded-[2rem] text-center mt-8 border border-[#E38F75]/20">
                <h2 className="text-2xl lg:text-3xl font-medium text-[#2A2A2A] mb-4">
                  Bilan capillaire offert, sans engagement
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Avant toute séance de microneedling, notre kinésithérapeute analyse votre cuir chevelu, évalue votre profil de chute et vous propose un protocole adapté. Le bilan est gratuit.
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
          </div>

          {/* Sidebar / Booking Form */}
          <div id="booking-form-container" className="lg:sticky lg:top-24">
            <BookingForm serviceName="Microneedling Cheveux" />
          </div>
          
        </div>
      </div>
    </div>
  );
}