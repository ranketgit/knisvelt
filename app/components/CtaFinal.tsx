import Link from "next/link";

export default function CtaFinal() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F7] rounded-[2.5rem] p-10 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-[1.2] text-[#2A2A2A] mb-4">
            Prenez rendez-vous dans votre centre d'amincissement à Casablanca
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto mb-10">
            Notre équipe vous accueille du lundi au vendredi de 09h00 à 19h30 et le samedi de 09h00 à 15h00. Votre premier bilan corporel est gratuit et sans engagement. Faites le premier pas vers vos objectifs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/reservation" className="bg-[#E38F75] hover:bg-[#d47b60] transition-colors text-white px-8 py-3.5 rounded-full font-medium text-sm">
              Prendre rendez-vous
            </Link>
            <a
              href="https://wa.me/212522217391"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-200 hover:border-[#E38F75] hover:text-[#E38F75] transition-colors text-gray-600 px-8 py-3.5 rounded-full font-medium text-sm"
            >
              WhatsApp
            </a>
            <a href="tel:0522217391" className="bg-white border-2 border-gray-200 hover:border-[#E38F75] hover:text-[#E38F75] transition-colors text-gray-600 px-8 py-3.5 rounded-full font-medium text-sm">
              05 22 21 73 91
            </a>
          </div>

          <p className="text-xs text-gray-400">
            Kinesvelt, Résidence Al Andalous, Californie, Boulevard Al Qods, Casablanca. Du lundi au vendredi de 9h à 19h30, le samedi de 9h à 15h.
          </p>
        </div>
      </div>
    </section>
  );
}
