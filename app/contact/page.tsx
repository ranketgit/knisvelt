import { Metadata } from 'next';
import Image from 'next/image';
import ContactClient from '../components/ContactClient'; // Adjust path if needed

export const metadata: Metadata = {
  title: 'Contact & Réservation | KINESVELT by Imane D',
  description: 'Prenez rendez-vous dans notre centre ou posez-nous vos questions. Retrouvez nos coordonnées, nos horaires et notre formulaire de contact.',
alternates: {
    canonical: "/contact"
  }

};

export default function ContactPage() {
  return (
    <div className="bg-[#FAF8F7] min-h-screen pb-24">
      {/* Static Server-Rendered Hero Section */}
      <section className="relative w-full h-[400px] lg:h-[500px] mb-16 lg:mb-24">
        <div className="absolute inset-0 bg-gray-300">
          <Image 
            src="/contact.png" 
            alt="Contact Kinesvelt" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-medium text-white mb-6">
            Contact & Réservation
          </h1>
          <p className="text-lg text-white/90 max-w-2xl font-medium">
            Prenez rendez-vous dans notre centre ou posez-nous vos questions.
          </p>
        </div>
      </section>

      {/* Interactive Client Component */}
      <ContactClient />
    </div>
  );
}