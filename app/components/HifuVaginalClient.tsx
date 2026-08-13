'use client';

import Image from 'next/image';
import Link from 'next/link';
import BookingForm from './BookingForm'; // Ajustez le chemin selon votre structure

export default function HifuVaginalClient() {
  const faqs = [
    {
      question: "Est-ce que le HIFU vaginal est efficace ?",
      answer: "Oui. Le HIFU vaginal est une technologie cliniquement validée pour le raffermissement des tissus intimes. Les résultats sont documentés : amélioration du tonus vaginal, meilleure lubrification, réduction des fuites urinaires légères. La majorité des patientes constatent une différence réelle dès les premières semaines suivant le protocole."
    },
    {
      question: "Qu'est-ce que la HIFU en gynécologie ?",
      answer: "En gynécologie, le HIFU consiste à appliquer des ultrasons focalisés sur les tissus vaginaux pour déclencher la production de collagène et raffermir les parois. C'est une approche non chirurgicale, sans injection ni anesthésie, qui agit en profondeur sur les tissus. Elle est utilisée pour traiter le relâchement vaginal, la sécheresse et les fuites urinaires légères."
    },
    {
      question: "Quels sont les inconvénients du traitement HIFU vaginal ?",
      answer: "Le traitement est généralement bien toléré. Quelques patientes ressentent une légère chaleur ou une légère sensibilité pendant la séance, qui disparaissent rapidement. Les résultats ne sont pas immédiats : ils s'installent progressivement sur 4 à 8 semaines. Le traitement est contre-indiqué pendant la grossesse et en cas d'infection vaginale active."
    },
    {
      question: "Combien de séances sont nécessaires ?",
      answer: "Le protocole comprend une cure de 3 séances. L'espacement entre les séances est défini selon les recommandations du protocole, lors de votre prise en charge chez Kinesvelt."
    },
    {
      question: "Le HIFU vaginal est-il douloureux ?",
      answer: "Non. La grande majorité des patientes décrivent une sensation de chaleur douce ou de légers picotements pendant la séance. Le traitement est réalisé sans anesthésie. Aucune douleur n'est ressentie après la séance."
    },
    {
      question: "Quelle est la différence entre le HIFU vaginal et le laser CO2 ?",
      answer: "Le HIFU vaginal agit en profondeur sur les tissus via des ultrasons focalisés pour stimuler la production de collagène et d'élastine. Le laser CO2 agit principalement en surface sur la muqueuse vaginale. Le HIFU ne nécessite aucun temps de récupération, contrairement au laser qui peut entraîner de légères irritations."
    },
    {
      question: "Peut-on faire le HIFU vaginal après un accouchement ?",
      questionAr: "هل يمكن إجراء الهيفو المهبلي بعد الولادة؟",
      answer: "Oui. Le HIFU vaginal est particulièrement indiqué pour les femmes souhaitant retrouver la tonicité intime après un ou plusieurs accouchements. Un délai minimum de 3 mois après l'accouchement est recommandé avant de commencer le traitement."
    },
    {
      question: "Combien de temps durent les résultats du HIFU vaginal ?",
      answer: "Les résultats du HIFU vaginal durent généralement entre 12 et 18 mois, selon le mode de vie et les facteurs hormonaux. Une séance d'entretien annuelle peut être recommandée pour prolonger les bénéfices du traitement."
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations Intimes</span>
          </div>
          <h1 className="text-4xl lg:text-[3rem] font-medium leading-tight text-[#2A2A2A] mb-6">
            HIFU Vaginal à Casablanca, rajeunissement intime sans chirurgie
          </h1>
          <p className="hero-subtitle text-lg lg:text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            Des ultrasons focalisés pour raffermir les tissus intimes, améliorer le confort et réduire la sécheresse. Un traitement non invasif réalisé en box individuel fermé par une kinésithérapeute certifiée.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Main Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] lg:h-[450px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image 
                 src="/new-services/19.jpeg" 
                 alt="Traitement HIFU vaginal à Casablanca chez Kinesvelt – rajeunissement intime sans chirurgie"
                 fill 
                 className="object-cover" 
                 priority
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-12">
              {/* DESCRIPTION */}
              <section>
                <p>
                  Le HIFU vaginal, ou High Intensity Focused Ultrasound, est une technologie qui utilise des ultrasons de haute intensité pour stimuler la production naturelle de collagène dans les tissus intimes. Concrètement, cela signifie que les tissus vaginaux se raffermissent, leur tonicité s'améliore et leur régénération est relancée naturellement, sans chirurgie et sans injection.
                </p>
                <p className="mt-4">
                  Également recherché sous : <span lang="ar" dir="rtl">الهيفو المهبلي</span> – <span lang="ar" dir="rtl">تضييق المهبل بدون جراحة في الدار البيضاء</span>.
                </p>
                <p className="mt-4">
                  Chez <Link href="/le-centre" className="text-[#E38F75] hover:underline">Kinesvelt à Casablanca</Link>, ce traitement est supervisé par Imane Daoudi, kinésithérapeute diplômée d'État, certifiée en rééducation périnéale et technologies HIFU, avec plus de 16 ans d'expérience clinique. Chaque séance se déroule dans un box individuel fermé, dans un environnement discret et cliniquement contrôlé.
                </p>
              </section>

              {/* POUR QUI */}
              <section className="bg-gray-50 p-8 lg:p-10 rounded-[2rem] border border-gray-100">
                <h2 className="text-2xl font-medium text-[#2A2A2A] mb-4">Pour qui est destiné le HIFU vaginal ?</h2>
                <p className="mb-6">Ce traitement est fait pour les femmes qui souhaitent prendre soin de leur santé intime de façon naturelle et non invasive, quel que soit leur âge :</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>améliorer la tonicité intime après un accouchement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>traiter un relâchement vaginal progressif</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>améliorer la sécheresse intime et l'hydratation des tissus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>réduire les fuites urinaires légères à modérées à l'effort</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>retrouver plus de confort et de sensations dans la vie intime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>traiter l'atrophie vaginale après la ménopause</span>
                  </li>
                </ul>
                <p className="mt-6">Découvrez toutes nos <Link href="/prestations/intime" className="text-[#E38F75] hover:underline">prestations intimes</Link>.</p>
              </section>

              {/* BIENFAITS */}
              <section className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h2 className="text-2xl font-medium text-[#2A2A2A] mb-6">Les bienfaits du HIFU vaginal</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">✓</span>
                    <span>Raffermissement et resserrement des tissus vaginaux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">✓</span>
                    <span>Amélioration de la tonicité et de l'élasticité intime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">✓</span>
                    <span>Stimulation naturelle du collagène et de l'élastine</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">✓</span>
                    <span>Meilleure lubrification et hydratation intime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">✓</span>
                    <span>Réduction des fuites urinaires à l'effort</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">✓</span>
                    <span>Amélioration des sensations intimes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">✓</span>
                    <span>Aucune chirurgie, aucune injection, aucun temps de récupération</span>
                  </li>
                </ul>
              </section>

              {/* DÉROULEMENT */}
              <section>
                <h2 className="text-2xl font-medium text-[#2A2A2A] mb-6">Comment se déroule une séance de HIFU vaginal chez Kinesvelt ?</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Étape 1 : Consultation initiale</h3>
                    <p>Tout commence par une consultation gratuite avec notre kinésithérapeute. Elle prend le temps de comprendre votre situation, vos objectifs et confirme que le traitement est adapté à votre cas avant toute chose.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Étape 2 : Préparation</h3>
                    <p>Vous êtes installée confortablement dans un box individuel fermé. La zone est préparée dans le respect total de votre intimité et de votre hygiène.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Étape 3 : Application du HIFU</h3>
                    <p>La sonde délivre des impulsions d'ultrasons ciblant les tissus profonds. La sensation est légère, une chaleur douce ou de légères picotements. La séance dure entre 30 et 45 minutes. <Link href="/equipements" className="text-[#E38F75] hover:underline">En savoir plus sur nos équipements</Link>.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#2A2A2A] mb-2">Étape 4 : Reprise immédiate des activités</h3>
                    <p>Il n'y a aucun temps de récupération. Vous repartez normalement le jour même. Les résultats s'installent progressivement sur 4 à 8 semaines, à mesure que la production de collagène s'intensifie.</p>
                  </div>
                </div>
              </section>

              {/* CONSEILS AVANT / APRÈS */}
              <section className="bg-gray-50 p-8 lg:p-10 rounded-[2rem] border border-gray-100">
                <h2 className="text-2xl font-medium text-[#2A2A2A] mb-6">Conseils avant et après une séance de HIFU vaginal</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-[#2A2A2A] mb-3">Avant la séance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#E38F75] mt-1">•</span>
                        <span>Éviter de programmer la séance pendant la période de menstruation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#E38F75] mt-1">•</span>
                        <span>Signaler toute infection vaginale ou urinaire en cours</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#E38F75] mt-1">•</span>
                        <span>Aucune préparation spécifique n&apos;est requise</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#2A2A2A] mb-3">Après la séance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[#E38F75] mt-1">•</span>
                        <span>Éviter les rapports sexuels pendant 48 heures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#E38F75] mt-1">•</span>
                        <span>Ne pas utiliser de tampon, ne pas prendre de bain ni aller à la piscine pendant 48 heures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#E38F75] mt-1">•</span>
                        <span>Reprise immédiate de toutes les activités quotidiennes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* PROTOCOLE & RÉSULTAT */}
              <div className="grid md:grid-cols-2 gap-8 border-t border-b border-gray-100 py-10">
                <section>
                  <h2 className="text-2xl font-medium text-[#2A2A2A] mb-4">Protocole de traitement HIFU vaginal à Casablanca</h2>
                  <p>
                    Le protocole comprend une cure de <span className="text-[#E38F75] font-medium">3 séances</span>, espacées selon les recommandations cliniques. Les résultats s'installent progressivement à mesure que la production de collagène se relance naturellement.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-medium text-[#2A2A2A] mb-4">Résultats attendus du HIFU vaginal</h2>
                  <p>
                    Les tissus deviennent progressivement plus fermes et plus toniques, améliorant le confort intime et la qualité de vie. Les résultats s'installent naturellement à mesure que la production de collagène augmente au fil des séances.
                  </p>
                </section>
              </div>

              {/* CTA SECONDAIRE */}
              <p className="text-center">
                <button
                  onClick={() => {
                    document.getElementById('booking-form-container')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="cta-button inline-flex items-center px-6 py-3 text-white bg-[#E38F75] hover:bg-[#d47b60] font-medium rounded-full transition-all"
                >
                  Réserver ma consultation gratuite
                </button>{' '}
                ou appelez-nous au <a href="tel:0522217391" className="text-[#E38F75] hover:underline">05 22 21 73 91</a>.
              </p>

              {/* HIFU VS CHIRURGIE */}
              <section>
                <h2 className="text-2xl font-medium text-[#2A2A2A] mb-6">HIFU vaginal ou chirurgie : quelle différence ?</h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-100">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-4 font-medium text-[#2A2A2A]">Critère</th>
                        <th className="px-6 py-4 font-medium text-[#2A2A2A]">HIFU Vaginal</th>
                        <th className="px-6 py-4 font-medium text-[#2A2A2A]">Chirurgie intime</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-100">
                        <td className="px-6 py-4">Anesthésie</td>
                        <td className="px-6 py-4">Aucune</td>
                        <td className="px-6 py-4">Générale ou locale</td>
                      </tr>
                      <tr className="border-t border-gray-100">
                        <td className="px-6 py-4">Durée de la séance</td>
                        <td className="px-6 py-4">30 à 45 minutes</td>
                        <td className="px-6 py-4">1 à 2 heures</td>
                      </tr>
                      <tr className="border-t border-gray-100">
                        <td className="px-6 py-4">Temps de récupération</td>
                        <td className="px-6 py-4">Aucun – reprise immédiate</td>
                        <td className="px-6 py-4">Plusieurs semaines</td>
                      </tr>
                      <tr className="border-t border-gray-100">
                        <td className="px-6 py-4">Résultats</td>
                        <td className="px-6 py-4">Progressifs sur 4 à 8 semaines</td>
                        <td className="px-6 py-4">Immédiats</td>
                      </tr>
                      <tr className="border-t border-gray-100">
                        <td className="px-6 py-4">Invasivité</td>
                        <td className="px-6 py-4">Non invasif</td>
                        <td className="px-6 py-4">Chirurgical</td>
                      </tr>
                      <tr className="border-t border-gray-100">
                        <td className="px-6 py-4">Cicatrice</td>
                        <td className="px-6 py-4">Aucune</td>
                        <td className="px-6 py-4">Possible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-6">Le HIFU vaginal est une alternative idéale pour les femmes qui souhaitent améliorer leur confort intime sans recourir à la chirurgie.</p>
              </section>

              {/* CONTRE-INDICATIONS */}
              <section>
                <h2 className="text-2xl font-medium text-[#2A2A2A] mb-4">Contre-indications et précautions</h2>
                <p className="mb-4">
                  Le HIFU vaginal convient à la grande majorité des femmes, mais certaines situations nécessitent une précaution particulière. Le traitement est déconseillé en cas de grossesse, d'infection vaginale ou urinaire active, de présence d'implants métalliques dans la zone, de cancer gynécologique en cours de traitement ou de prolapsus sévère non traité.
                </p>
                <p>
                  En cas de doute, notre kinésithérapeute fait le point lors de la consultation initiale gratuite pour s'assurer que le traitement vous convient pleinement.
                </p>
              </section>

              {/* FAQ */}
              <section className="pt-8">
                <h2 className="text-2xl font-medium text-[#2A2A2A] mb-6">Questions fréquentes sur le HIFU vaginal à Casablanca</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group border border-gray-100 bg-gray-50 rounded-2xl open:border-[#E38F75] open:bg-white transition-colors duration-300">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 focus:outline-none">
                        <h3 className="text-[17px] font-medium text-[#2A2A2A] group-open:text-[#E38F75] transition-colors">
                          {faq.question}
                          {faq.questionAr && (
                            <span lang="ar" dir="rtl" className="block text-sm font-normal text-gray-400 mt-1">({faq.questionAr})</span>
                          )}
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

              {/* CTA SECONDAIRE APRÈS FAQ */}
              <p className="text-center">
                Vous avez d&apos;autres questions ? <Link href="/contact" className="text-[#E38F75] hover:underline">Contactez-nous</Link> ou appelez directement au <a href="tel:0522217391" className="text-[#E38F75] hover:underline">05 22 21 73 91</a>.
              </p>

              {/* CTA FINAL AVEC ONCLICK */}
              <section className="bg-[#EEF3ED] p-8 lg:p-12 rounded-[2rem] text-center mt-8 border border-[#E38F75]/20">
                <h2 className="text-2xl lg:text-3xl font-medium text-[#2A2A2A] mb-4">
                  Consultation initiale offerte, en toute discrétion
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Avant toute séance de HIFU vaginal, notre kinésithérapeute prend le temps d'évaluer votre situation, répondre à vos questions et vous proposer un protocole adapté. La consultation est gratuite et se déroule dans un box individuel fermé.
                </p>
                <button 
                  onClick={() => {
                    document.getElementById('booking-form-container')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center px-8 py-4 text-white bg-[#E38F75] hover:bg-[#d47b60] font-medium rounded-full transition-all shadow-md hover:shadow-lg gap-2"
                >
                  Réserver ma consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </section>
              
            </div>
          </div>

          {/* Sidebar / Booking Form */}
          <div id="booking-form-container" className="sticky top-24">
            <BookingForm serviceName="HIFU Vaginal" />
          </div>
          
        </div>
      </div>
    </div>
  );
}