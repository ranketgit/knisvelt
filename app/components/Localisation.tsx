import Link from "next/link";

export default function Localisation() {
  const quartiers = ["Maarif", "Oulfa", "Sidi Maarouf", "Bouskoura", "Ain Sebaa", "Dar Bouazza", "Mohammedia"];

  return (
    <section className="bg-[#FAF8F7] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E38F75]"></span>
            <span className="text-[#E38F75] text-xs font-semibold tracking-widest uppercase">
              Localisation
            </span>
          </div>
          <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A] max-w-3xl">
            Notre centre d'amincissement à Casablanca, localisation et accès
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-6">
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Kinesvelt est situé au coeur du quartier Californie à Casablanca, au sein de la Résidence Al Andalous, Lotissement Ouled Taleb, Boulevard Al Qods. Notre centre d'amincissement est facilement accessible depuis tous les quartiers de Casablanca, notamment {quartiers.slice(0, -1).join(", ")} et {quartiers[quartiers.length - 1]}.
            </p>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-medium text-[#2A2A2A] mb-3">Horaires</h3>
              <p className="text-sm text-gray-500">Lundi au vendredi : 09h00 à 19h30</p>
              <p className="text-sm text-gray-500">Samedi : 09h00 à 15h00</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-medium text-[#2A2A2A] mb-3">Contact</h3>
              <a href="tel:0522217391" className="text-sm text-gray-500 hover:text-[#E38F75] transition-colors block">
                05 22 21 73 91
              </a>
            </div>

            <Link href="/le-centre" className="inline-flex items-center gap-2 text-sm font-semibold text-[#E38F75] hover:text-[#d47b60] transition-colors w-fit">
              Voir le plan d'accès complet
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="relative w-full h-[350px] lg:h-full min-h-[350px] rounded-[2rem] overflow-hidden border border-gray-100">
            <iframe
              src="https://www.google.com/maps?q=33.5331875,-7.6166875&z=15&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du centre Kinesvelt à Casablanca"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
