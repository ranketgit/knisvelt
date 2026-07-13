import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";
import BookingForm from '../../components/BookingForm';

export const metadata: Metadata = {
  title: "Épilation Laser Définitive à Casablanca | Kinesvelt",
  description: "Épilation laser définitive à Casablanca. Alexandrite, Diode et Nd:YAG pour tous les phototypes, résultats durables et sans douleur.",
  alternates: {
    canonical: "https://kinesvelt.com/prestations/epilation-laser"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BeautySalon",
      "@id": "https://kinesvelt.com/#business",
      "name": "Kinesvelt by Imane Daoudi",
      "description": "Centre spécialisé en épilation laser définitive, amincissement, bien être et soins esthétiques à Casablanca. Triple technologie Alexandrite, Diode et Nd:YAG adaptée à tous les phototypes.",
      "url": "https://kinesvelt.com",
      "telephone": "+212522217391",
      "email": "contact@kinesvelt.ma",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Résidence Al Andalous, Lotissement Ouled Taleb, Parallèle Californie, Boulevard Al Qods",
        "addressLocality": "Casablanca",
        "addressRegion": "Casablanca-Settat",
        "postalCode": "20470",
        "addressCountry": "MA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.5331875",
        "longitude": "-7.6166875"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "15:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/imane.d/",
        "https://www.facebook.com/Kinesvelt/"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://kinesvelt.com/prestations/epilation-laser/#service",
      "name": "Épilation Laser Définitive Casablanca",
      "description": "Épilation laser définitive à Casablanca avec triple technologie Alexandrite (755 nm), Diode (810 nm) et Nd:YAG (1064 nm). Traitement adapté à tous les phototypes de I à VI. Réduction permanente de 80 à 90 % en 4 à 10 séances.",
      "serviceType": "Épilation laser définitive",
      "provider": { "@id": "https://kinesvelt.com/#business" },
      "areaServed": { "@type": "City", "name": "Casablanca", "addressCountry": "MA" },
      "url": "https://kinesvelt.com/prestations/epilation-laser",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://kinesvelt.com/reservation",
        "servicePhone": "+212522217391"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://kinesvelt.com/prestations/epilation-laser/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://kinesvelt.com" },
        { "@type": "ListItem", "position": 2, "name": "Prestations", "item": "https://kinesvelt.com/prestations" },
        { "@type": "ListItem", "position": 3, "name": "Épilation Laser", "item": "https://kinesvelt.com/prestations/epilation-laser" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://kinesvelt.com/prestations/epilation-laser/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "L'épilation laser est-elle vraiment définitive ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'épilation laser offre une réduction permanente et durable de la pilosité. Après un traitement complet, 80 à 90 % des poils sont éliminés définitivement. Des séances d'entretien annuelles peuvent être utiles sur les zones hormonodépendantes comme le visage ou le maillot."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de séances d'épilation laser sont nécessaires ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le nombre varie selon la zone et votre phototype. En moyenne, comptez 4 à 6 séances pour les aisselles, 5 à 8 pour le maillot et 6 à 10 pour les jambes complètes. Les séances sont espacées de 4 à 8 semaines."
          }
        },
        {
          "@type": "Question",
          "name": "L'épilation laser est-elle douloureuse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La sensation est comparable à un léger picotement. Notre machine est équipée d'un système de refroidissement intégré qui rend chaque séance très confortable. La grande majorité de nos clientes tolèrent le traitement sans anesthésie."
          }
        },
        {
          "@type": "Question",
          "name": "L'épilation laser fonctionne-t-elle sur les peaux mates et foncées ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Notre laser Nd:YAG (1064 nm) est conçu pour les phototypes IV à VI, les plus courantes au Maroc. Il cible la mélanine du poil sans risque de dépigmentation."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le prix d'une épilation laser à Casablanca ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le prix d'une épilation laser à Casablanca varie selon la zone traitée et votre phototype. Chez Kinesvelt, le tarif est établi lors d'un diagnostic gratuit et sans engagement. Contactez nous pour obtenir votre devis personnalisé."
          }
        },
        {
          "@type": "Question",
          "name": "Quel type de laser est le plus efficace ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cela dépend de votre phototype. L'Alexandrite (755 nm) est le plus efficace sur les peaux claires. Le Nd:YAG (1064 nm) est la référence pour les peaux mates et foncées. La Diode (810 nm) convient à la majorité des profils. Notre machine combine les trois technologies pour s'adapter précisément à chaque patiente."
          }
        },
        {
          "@type": "Question",
          "name": "L'épilation laser est-elle efficace pour le maillot ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le maillot est l'une des zones les plus demandées en épilation laser à Casablanca. Comptez 5 à 8 séances selon la densité pilaire et votre phototype. Notre laser Nd:YAG est particulièrement adapté aux peaux mates pour cette zone sensible."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre le laser et la lumière pulsée (IPL) ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le laser émet une longueur d'onde unique ciblant précisément la mélanine du follicule pileux. L'IPL émet un spectre large et moins ciblé, moins efficace et moins adapté aux peaux foncées. Le laser donne de meilleurs résultats en moins de séances."
          }
        },
        {
          "@type": "Question",
          "name": "Que faire avant et après une séance d'épilation laser ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Avant la séance : rasez la zone 24 à 48h avant, évitez la cire et la pince, évitez toute exposition solaire 4 semaines avant. Après la séance : évitez le soleil, le hammam, le bain chaud et le gommage pendant 48 à 72h. Hydratez la peau après chaque séance."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on faire de l'épilation laser en été au Maroc ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, à condition d'éviter toute exposition solaire sur la zone traitée pendant les 4 semaines avant et après chaque séance. Avec plus de 300 jours de soleil par an au Maroc, nous recommandons une protection SPF 50+ sur les zones exposées."
          }
        }
      ]
    }
  ]
};

export default function EpilationLaserPage() {
  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">Prestations</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-medium leading-tight text-[#2A2A2A] mb-4 uppercase">
            Épilation Laser Définitive Casablanca
          </h1>
          <h2 className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
            Le laser détruit le follicule pileux par la chaleur : 80 à 90 % de réduction de la pilosité en 4 à 10 séances. Triple technologie calibrée selon votre phototype, peaux claires comme peaux mates. Chez Kinesvelt, chaque séance d’épilation laser à Casablanca est adaptée à votre profil exact.
          </h2>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/reservation" className="inline-flex items-center gap-2 bg-[#2A2A2A] hover:bg-black transition-colors text-white px-6 py-3.5 rounded-xl font-medium">
              Réserver ma séance
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-[#E38F75] hover:text-[#E38F75] transition-colors text-gray-600 px-6 py-3.5 rounded-xl font-medium">
              Diagnostic gratuit
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">

          {/* Main Content */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[350px] rounded-[2rem] overflow-hidden bg-gray-100 shadow-sm">
               <Image
                 src="/new-services/18.jpeg"
                 alt="Épilation laser Casablanca Kinesvelt"
                 fill
                 className="object-cover"
                 priority
               />
            </div>

            <div className="text-gray-500 text-[17px] leading-relaxed space-y-8">

              {/* Comment ça fonctionne */}
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Comment fonctionne l’épilation laser ?</h3>
                <p>
                  Le laser émet un faisceau lumineux absorbé par la mélanine du poil. Cette énergie se transforme en chaleur qui remonte jusqu’au bulbe pilaire et détruit le follicule à la racine. Contrairement au rasage ou à la cire qui agissent en surface, l’épilation laser à Casablanca élimine le poil à sa source et empêche toute repousse de façon durable.
                </p>
                <h4 className="text-lg font-medium text-[#2A2A2A] mt-6 mb-2">Pourquoi plusieurs séances sont-elles nécessaires ?</h4>
                <p>
                  Seuls les poils en phase anagène, la phase de croissance active, peuvent être détruits par le laser. À un moment donné, seulement 20 à 70 % des poils d’une zone sont dans cette phase. C’est pourquoi plusieurs séances espacées de 4 à 8 semaines sont nécessaires pour traiter l’ensemble du capital pileux et obtenir une épilation définitive durable.
                </p>
              </section>

              {/* Technologies */}
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-3">Notre triple technologie laser adaptée à tous les phototypes</h3>
                <p className="mb-6">
                  Contrairement aux centres utilisant un seul type de laser, notre machine combine trois longueurs d’onde complémentaires. C’est ce qui fait de Kinesvelt un centre de référence pour l’épilation laser à Casablanca, pour tous les types de peau, du plus clair au plus foncé.
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="border-l-2 border-[#E38F75] pl-4">
                    <h4 className="font-medium text-[#2A2A2A]">Laser Alexandrite 755 nm</h4>
                    <p className="text-sm">Phototypes I à III, peaux claires à légèrement métissées. Absorption optimale de la mélanine sur les poils fins et foncés. Résultats rapides, séances courtes.</p>
                  </div>
                  <div className="border-l-2 border-[#E38F75] pl-4">
                    <h4 className="font-medium text-[#2A2A2A]">Laser Diode 810 nm</h4>
                    <p className="text-sm">Phototypes II à IV, peaux intermédiaires à légèrement mates. Pénètre plus profondément dans le follicule. Efficace sur les poils épais et les peaux méditerranéennes.</p>
                  </div>
                  <div className="border-l-2 border-[#E38F75] pl-4">
                    <h4 className="font-medium text-[#2A2A2A]">Laser Nd:YAG 1064 nm</h4>
                    <p className="text-sm">Phototypes IV à VI, peaux mates, métissées et foncées, les plus courantes au Maroc. Cible le bulbe pilaire sans risque de dépigmentation. La référence pour l’épilation laser sur peaux mates à Casablanca.</p>
                  </div>
                </div>
                <div className="bg-[#FAF8F7] p-6 rounded-2xl border border-gray-50 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-sm">Votre peau a un phototype unique. Notre praticienne l’évalue dès la première séance et adapte les paramètres à chaque traitement.</p>
                  <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 bg-[#E38F75] hover:bg-[#d47b60] transition-colors text-white px-5 py-3 rounded-xl font-medium text-sm whitespace-nowrap">
                    Bilan de phototype gratuit
                  </Link>
                </div>
              </section>

              {/* Bienfaits */}
              <div className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-6">Les bénéfices de l’épilation laser définitive</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Réduction permanente de la pilosité, jusqu’à 80 à 90 % après un traitement complet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Peau plus lisse et plus nette, sans irritation ni repousse douloureuse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Élimination des poils incarnés et des folliculites, une indication médicale reconnue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Repousse progressivement plus lente et plus fine dès la 2e séance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#E38F75] mt-1">•</span>
                    <span>Traitement adapté à tous les phototypes de I à VI, peaux claires comme mates et foncées</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm">La plupart de nos clientes qui viennent pour une épilation définitive à Casablanca observent une réduction visible dès la 3e séance.</p>
              </div>

              {/* Zones traitées */}
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                <h3 className="text-xl font-medium text-[#2A2A2A] mb-6">Toutes les zones que nous traitons</h3>

                <h4 className="font-medium text-[#2A2A2A] mb-3">Zones Femme</h4>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  {["Lèvre supérieure", "Menton", "Joues", "Sourcils", "Pattes", "Nuque", "Aisselles", "Bras", "Avant-bras", "Maillot simple", "Maillot brésilien", "Maillot intégral", "Demi-jambes", "Jambes complètes", "Ventre", "Dos"].map((zone) => (
                    <li key={zone} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                      <span>{zone}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-medium text-[#2A2A2A] mb-3">Zones Homme : Épilation laser homme Casablanca</h4>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {["Barbe", "Nuque", "Tour du cou", "Épaules", "Dos", "Torse", "Abdomen", "Bras", "Aisselles"].map((zone) => (
                    <li key={zone} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
                      <span>{zone}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm">Vous hésitez sur une zone ? Nos praticiennes vous conseillent lors de votre diagnostic gratuit à Casablanca.</p>
              </div>

              {/* Déroulement */}
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6">Déroulement d’une séance d’épilation laser chez Kinesvelt</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-2">Avant la séance</h4>
                    <p className="text-sm">Rasez la zone à traiter 24 à 48h avant la séance. N’utilisez pas la cire ni la pince, cela détruirait le bulbe pilaire nécessaire au traitement. Évitez toute exposition solaire sur la zone 4 semaines avant, et toute crème autobronzante. Signalez tout médicament photosensibilisant à la praticienne.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-2">Pendant la séance</h4>
                    <p className="text-sm">La zone est nettoyée, vous portez des lunettes de protection, puis la pièce à main laser, équipée d’un système de refroidissement intégré, est appliquée sur la peau. La sensation est comparable à un léger picotement, tolérée sans anesthésie par la grande majorité de nos clientes. La durée varie de 10 minutes pour les aisselles jusqu’à 60 minutes pour les jambes complètes.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-2">Après la séance</h4>
                    <p className="text-sm">Une légère rougeur est normale dans les 24 à 48h qui suivent. Les poils traités tombent progressivement dans les 10 à 15 jours. À éviter pendant 48 à 72h : exposition solaire, hammam, bain chaud, gommage. Hydratez la peau après chaque séance.</p>
                  </div>
                </div>
              </section>

              {/* Tableau séances */}
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Combien de séances faut-il par zone ?</h3>
                <p className="mb-6">
                  Le nombre de séances varie selon la zone traitée, votre phototype et vos cycles hormonaux. En règle générale, comptez entre 4 et 10 séances pour obtenir une réduction permanente de la pilosité.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-100">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#FAF8F7] text-[#2A2A2A]">
                        <th className="px-5 py-3 font-medium">Zone traitée</th>
                        <th className="px-5 py-3 font-medium">Nombre de séances</th>
                        <th className="px-5 py-3 font-medium">Intervalle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Lèvre / Menton", "6 à 10", "4 à 6 semaines"],
                        ["Aisselles", "4 à 6", "4 à 6 semaines"],
                        ["Maillot intégral", "5 à 8", "4 à 6 semaines"],
                        ["Bras", "5 à 7", "6 à 8 semaines"],
                        ["Demi-jambes", "5 à 7", "6 à 8 semaines"],
                        ["Jambes complètes", "6 à 10", "6 à 8 semaines"],
                        ["Dos et épaules", "6 à 8", "6 à 8 semaines"],
                      ].map((row) => (
                        <tr key={row[0]} className="border-t border-gray-100">
                          <td className="px-5 py-3">{row[0]}</td>
                          <td className="px-5 py-3">{row[1]}</td>
                          <td className="px-5 py-3">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm">Les zones hormonodépendantes comme le visage et le maillot peuvent nécessiter 1 à 2 séances d’entretien par an.</p>
              </section>

              {/* Tarifs */}
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-4">Tarifs d’épilation laser à Casablanca</h3>
                <p>
                  Le prix d’une épilation laser à Casablanca varie selon la zone traitée, votre phototype et le nombre de séances de votre protocole. Chez Kinesvelt, nous établissons un devis personnalisé lors de votre première visite, sans engagement. Cette consultation est gratuite et inclut un bilan complet de votre phototype.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E38F75] hover:bg-[#d47b60] transition-colors text-white px-6 py-3 rounded-xl font-medium mt-5 text-sm">
                  Demandez votre devis gratuit
                </Link>
              </section>

              {/* Pourquoi Kinesvelt */}
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6">Pourquoi choisir Kinesvelt pour votre épilation laser à Casablanca ?</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-2">16 ans d’expérience à Casablanca</h4>
                    <p>
                      Kinesvelt est un centre spécialisé en minceur, bien être et soins esthétiques à Casablanca depuis 16 ans. Nous accompagnons nos clientes vers des résultats durables dans un environnement professionnel et bienveillant. Notre réputation en épilation laser à Casablanca repose sur des résultats concrets et des clientes fidèles. Vous pouvez <Link href="/le-centre" className="text-[#E38F75] hover:underline">découvrir notre centre</Link>.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-2">Une technologie adaptée à la peau marocaine</h4>
                    <p>
                      Notre machine combine Alexandrite (755 nm), Diode (810 nm) et Nd:YAG (1064 nm) en un seul appareil. Cette combinaison nous permet de traiter tous les phototypes de I à VI, y compris les peaux mates et foncées pour lesquelles certains lasers sont moins efficaces. Découvrez <Link href="/equipements" className="text-[#E38F75] hover:underline">nos équipements</Link>.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-2">Encadrement médical et praticienne certifiée</h4>
                    <p>
                      Chaque séance d’épilation laser à Casablanca est réalisée par une praticienne certifiée, formée aux protocoles laser adaptés à tous les phototypes. Notre encadrement rigoureux garantit votre sécurité à chaque séance. <Link href="/reservation" className="text-[#E38F75] hover:underline">Réservez une séance</Link>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Témoignages */}
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6">Ce que disent nos clientes</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <p className="text-sm mb-4">« Accueil chaleureux, professionnalisme, objectif atteint en un mois et vingt jours. »</p>
                    <span className="font-medium text-[#2A2A2A] text-sm">Mounia Bouzobaa</span>
                    <span className="text-xs text-gray-400 block">Avis Google vérifié</span>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <p className="text-sm mb-4">« Je suis vraiment très satisfaite des résultats obtenus en si peu de temps, le staff et le service sont très professionnels. »</p>
                    <span className="font-medium text-[#2A2A2A] text-sm">Soraya Kheldoun</span>
                    <span className="text-xs text-gray-400 block">Avis Google vérifié</span>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-6">Questions fréquentes sur l’épilation laser à Casablanca</h3>
                <div className="space-y-5">
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-1">L’épilation laser est-elle vraiment définitive ?</h4>
                    <p className="text-sm">L’épilation laser offre une réduction permanente et durable de la pilosité. Après un traitement complet, 80 à 90 % des poils sont éliminés définitivement. Des séances d’entretien annuelles peuvent être utiles sur les zones hormonodépendantes comme le visage ou le maillot.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-1">Combien de séances d’épilation laser sont nécessaires ?</h4>
                    <p className="text-sm">Le nombre varie selon la zone et votre phototype. En moyenne, comptez 4 à 6 séances pour les aisselles, 5 à 8 pour le maillot et 6 à 10 pour les jambes complètes. Les séances sont espacées de 4 à 8 semaines.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-1">L’épilation laser est-elle douloureuse ?</h4>
                    <p className="text-sm">La sensation est comparable à un léger picotement. Notre machine est équipée d’un système de refroidissement intégré qui rend chaque séance très confortable. La grande majorité de nos clientes tolèrent le traitement sans anesthésie.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-1">L’épilation laser fonctionne-t-elle sur les peaux mates et foncées ?</h4>
                    <p className="text-sm">Oui. Notre laser Nd:YAG (1064 nm) est conçu pour les phototypes IV à VI, les plus courantes au Maroc. Il cible la mélanine du poil sans risque de dépigmentation.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-1">Quel est le prix d’une épilation laser à Casablanca ?</h4>
                    <p className="text-sm">Le prix d’une épilation laser à Casablanca varie selon la zone traitée et votre phototype. Chez Kinesvelt, le tarif est établi lors d’un diagnostic gratuit et sans engagement. Contactez nous pour obtenir votre devis personnalisé.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-1">Quel type de laser est le plus efficace ?</h4>
                    <p className="text-sm">Cela dépend de votre phototype. L’Alexandrite (755 nm) est le plus efficace sur les peaux claires. Le Nd:YAG (1064 nm) est la référence pour les peaux mates et foncées. La Diode (810 nm) convient à la majorité des profils. Notre machine combine les trois technologies pour s’adapter précisément à chaque patiente.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-1">L’épilation laser est-elle efficace pour le maillot ?</h4>
                    <p className="text-sm">Oui. Le maillot est l’une des zones les plus demandées en épilation laser à Casablanca. Comptez 5 à 8 séances selon la densité pilaire et votre phototype. Notre laser Nd:YAG est particulièrement adapté aux peaux mates pour cette zone sensible.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-1">Quelle est la différence entre le laser et la lumière pulsée (IPL) ?</h4>
                    <p className="text-sm">Le laser émet une longueur d’onde unique ciblant précisément la mélanine du follicule pileux. L’IPL émet un spectre large et moins ciblé, moins efficace et moins adapté aux peaux foncées. Le laser donne de meilleurs résultats en moins de séances.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-1">Que faire avant et après une séance d’épilation laser ?</h4>
                    <p className="text-sm">Avant la séance : rasez la zone 24 à 48h avant, évitez la cire et la pince, évitez toute exposition solaire 4 semaines avant. Après la séance : évitez le soleil, le hammam, le bain chaud et le gommage pendant 48 à 72h. Hydratez la peau après chaque séance.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2A2A2A] mb-1">Peut-on faire de l’épilation laser en été au Maroc ?</h4>
                    <p className="text-sm">Oui, à condition d’éviter toute exposition solaire sur la zone traitée pendant les 4 semaines avant et après chaque séance. Avec plus de 300 jours de soleil par an au Maroc, nous recommandons une protection SPF 50+ sur les zones exposées.</p>
                  </div>
                </div>
              </section>

              <div className="bg-[#2A2A2A] p-8 rounded-[2rem] text-white">
                <h3 className="text-xl font-medium mb-4">Signature KINESVELT</h3>
                <p className="opacity-90 leading-relaxed italic">
                  Chez KINESVELT by Imane D, nous avons sélectionné une technologie laser de dernière génération afin d’offrir des traitements efficaces, sécurisés et adaptés à chaque type de peau.
                </p>
              </div>

              {/* CTA final */}
              <section className="bg-[#FAF8F7] p-8 lg:p-10 rounded-[2rem] border border-gray-50 text-center">
                <h3 className="text-2xl font-medium text-[#2A2A2A] mb-3">Réservez votre diagnostic laser gratuit à Casablanca</h3>
                <p className="max-w-2xl mx-auto mb-6">
                  Notre praticienne évalue votre phototype, vous explique le traitement adapté à votre type de peau et établit un programme personnalisé, sans engagement. Kinesvelt, votre centre d’épilation laser à Casablanca depuis 16 ans.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/reservation" className="inline-flex items-center gap-2 bg-[#E38F75] hover:bg-[#d47b60] transition-colors text-white px-6 py-3.5 rounded-xl font-medium">
                    Réserver mon diagnostic
                  </Link>
                  <a href="tel:0522217391" className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-[#E38F75] hover:text-[#E38F75] transition-colors text-gray-600 px-6 py-3.5 rounded-xl font-medium">
                    05 22 21 73 91
                  </a>
                </div>
                <p className="text-xs text-gray-400 mt-6">
                  Kinesvelt, Résidence Al Andalous, Californie, Boulevard Al Qods, Casablanca. Du lundi au vendredi de 9h à 19h30, le samedi de 9h à 15h.
                </p>
              </section>

            </div>
          </div>

          <BookingForm serviceName="Épilation Laser" />

        </div>
      </div>
    </div>
  );
}
