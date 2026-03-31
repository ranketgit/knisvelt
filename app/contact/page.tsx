'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      // ON POINTE MAINTENANT VERS NOTRE PROPRE API
      const response = await fetch('/api/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#FAF8F7] min-h-screen pb-24">
      
      {/* Wide Hero Section */}
      <section className="relative w-full h-[400px] lg:h-[500px] mb-16 lg:mb-24">
        <div className="absolute inset-0 bg-gray-300">
          <Image src="/contact.png" alt="Contact Kinesvelt" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-medium text-white mb-6">Contact & Réservation</h1>
          <p className="text-lg text-white/90 max-w-2xl font-medium">
            Prenez rendez-vous dans notre centre ou posez-nous vos questions.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-50">
              <h2 className="text-2xl font-medium text-[#2A2A2A] mb-8">Nos Coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E38F75]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#2A2A2A] mb-1">Adresse</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                    Résidence AL ANDALOUS, intersection fin Taddart et Californie, Casablanca. 
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E38F75]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#2A2A2A] mb-1">Téléphone</h3>
                    <p className="text-gray-500 text-[15px]">
                     05 22 21 73 91
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E38F75]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#2A2A2A] mb-1">Email</h3>
                    <p className="text-gray-500 text-[15px]">
                      contact@kinesvelt.com
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100 my-8" />

              <h2 className="text-xl font-medium text-[#2A2A2A] mb-6">Horaires d'ouverture</h2>
              <ul className="space-y-3 text-[15px]">
                <li className="flex justify-between text-gray-500">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium text-[#2A2A2A]">09h00 - 19h30</span>
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Samedi</span>
                  <span className="font-medium text-[#2A2A2A]">09h00 - 15h00</span>
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Dimanche</span>
                  <span className="font-medium text-[#E38F75]">Fermé</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-gray-50">
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-20 h-20 bg-[#E38F75]/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-medium text-[#2A2A2A] mb-4">Message Envoyé !</h2>
                <p className="text-gray-500 text-[16px] leading-relaxed max-w-md">
                  Merci de nous avoir contactés. Si vous avez demandé un rendez-vous, notre équipe vous rappellera très rapidement pour confirmer la date et l'heure.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 bg-[#FAF8F7] hover:bg-gray-100 transition-colors text-[#2A2A2A] px-6 py-3 rounded-full font-medium text-sm"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-medium text-[#2A2A2A] mb-2">Envoyez-nous un message</h2>
                <p className="text-gray-500 text-[15px] mb-8">Remplissez le formulaire ci-dessous pour toute question ou pour planifier votre consultation.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom Complet *</label>
                      <input 
                        type="text" id="name" name="nom" required disabled={status === 'loading'}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E38F75]/20 focus:border-[#E38F75] transition-all bg-[#FAF8F7] disabled:opacity-50"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                      <input 
                        type="tel" id="phone" name="telephone" required disabled={status === 'loading'}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E38F75]/20 focus:border-[#E38F75] transition-all bg-[#FAF8F7] disabled:opacity-50"
                        placeholder="06 XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Adresse Email</label>
                    <input 
                      type="email" id="email" name="email" disabled={status === 'loading'}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E38F75]/20 focus:border-[#E38F75] transition-all bg-[#FAF8F7] disabled:opacity-50"
                      placeholder="exemple@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">Sujet de votre demande *</label>
                      <select 
                        id="sujet" name="sujet" required disabled={status === 'loading'}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E38F75]/20 focus:border-[#E38F75] transition-all bg-[#FAF8F7] disabled:opacity-50 text-gray-700"
                      >
                        <option value="Demande de Rendez-vous">Demande de Rendez-vous</option>
                        <option value="Information Prestation">Information sur une prestation</option>
                        <option value="Information Machine">Information sur une machine</option>
                        <option value="Autre Demande">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Date souhaitée (Si RDV)</label>
                      <input 
                        type="date" id="date" name="date_souhaitee" disabled={status === 'loading'}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E38F75]/20 focus:border-[#E38F75] transition-all bg-[#FAF8F7] disabled:opacity-50 text-gray-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Votre Message</label>
                    <textarea 
                      id="message" name="message" rows={4} disabled={status === 'loading'}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E38F75]/20 focus:border-[#E38F75] transition-all bg-[#FAF8F7] disabled:opacity-50 resize-none"
                      placeholder="Précisez la prestation souhaitée ou vos questions..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                      Une erreur s'est produite lors de l'envoi. Veuillez vérifier votre connexion et réessayer.
                    </p>
                  )}

                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#E38F75] hover:bg-[#d47b60] disabled:bg-gray-400 transition-colors text-white py-4 rounded-xl font-medium mt-2 flex justify-center items-center"
                  >
                    {status === 'loading' ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      "Envoyer le message"
                    )}
                  </button>
                </form>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
