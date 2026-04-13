'use client';

import { useCart } from '../components/CartProvider';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ReservationPage() {
  const { cart, removeFromCart } = useCart();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/reservation', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        localStorage.removeItem('kinesvelt_machine_cart');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#FAF8F7] py-24 flex items-center justify-center px-4">
        <div className="bg-white rounded-[2rem] p-10 max-w-lg w-full text-center shadow-sm border border-gray-100">
          <div className="w-20 h-20 bg-[#E38F75]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-medium text-[#2A2A2A] mb-4">Réservation Confirmée !</h2>
          <p className="text-gray-500 mb-8">Nous avons bien reçu votre demande pour vos soins. Un email récapitulatif vous a été envoyé. Notre équipe vous contactera très rapidement pour valider définitivement cet horaire.</p>
          <Link href="/prestations" className="text-[#E38F75] font-medium hover:underline">Découvrir d'autres soins</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F7] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl lg:text-5xl font-medium text-[#2A2A2A] mb-12">Finaliser votre réservation</h1>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Left Column: Selected Services & Payment Info */}
          <div className="flex flex-col gap-8">
            
            {/* Cart Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm">
              <h2 className="text-2xl font-medium text-[#2A2A2A] mb-6">Soins & Équipements sélectionnés</h2>
              
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-6">Votre sélection est vide.</p>
                  <div className="flex justify-center gap-4">
                    <Link href="/prestations" className="bg-[#2A2A2A] text-white px-6 py-3 rounded-full font-medium text-sm">Voir les prestations</Link>
                    <Link href="/equipements" className="bg-[#E38F75] text-white px-6 py-3 rounded-full font-medium text-sm">Voir les équipements</Link>
                  </div>
                </div>
              ) : (
                <ul className="divide-y divide-gray-50">
                  {cart.map((item, idx) => (
                    <li key={idx} className="py-5 flex justify-between items-center">
                      <span className="font-medium text-[#2A2A2A]">{item}</span>
                      <button 
                        onClick={() => removeFromCart(item)}
                        className="text-red-400 hover:text-red-600 text-sm font-medium transition-colors"
                      >
                        Retirer
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Acompte / Bank Info Card */}
            {cart.length > 0 && (
              <div className="bg-orange-50/40 rounded-[2rem] p-8 border border-[#E38F75]/20 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#E38F75]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#2A2A2A]">Validation du créneau</h3>
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                  Afin de garantir la réservation de votre créneau, un acompte de <strong className="text-[#2A2A2A]">200 MAD</strong> est requis.
                </p>
                <div className="relative w-full h-[200px] rounded-2xl overflow-hidden bg-white border border-white shadow-sm">
                  <Image 
                    src="/bank.png" 
                    alt="Informations bancaires" 
                    fill 
                    className="object-contain p-2" 
                  />
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Info Form */}
          {cart.length > 0 && (
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 sticky top-32">
              <h2 className="text-xl font-medium text-[#2A2A2A] mb-6">Vos coordonnées & Date</h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="hidden" name="soins_selectionnes" value={cart.join(", ")} />

                <div>
                  <input type="text" name="nom_complet" required placeholder="Nom Complet *" disabled={status === 'loading'} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E38F75]/20 focus:border-[#E38F75] bg-[#FAF8F7] disabled:opacity-50" />
                </div>
                <div>
                  <input type="tel" name="telephone" required placeholder="Téléphone (ex: 06...) *" disabled={status === 'loading'} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E38F75]/20 focus:border-[#E38F75] bg-[#FAF8F7] disabled:opacity-50" />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Adresse Email (Optionnel)" disabled={status === 'loading'} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E38F75]/20 focus:border-[#E38F75] bg-[#FAF8F7] disabled:opacity-50" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Date souhaitée *</label>
                  <input type="date" name="date_souhaitee" required disabled={status === 'loading'} className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E38F75]/20 focus:border-[#E38F75] bg-[#FAF8F7] text-gray-600 disabled:opacity-50" />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                    Une erreur s'est produite lors de l'envoi. Veuillez réessayer.
                  </p>
                )}

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#E38F75] hover:bg-[#d47b60] disabled:bg-gray-400 text-white py-4 rounded-xl font-medium mt-2 transition-colors flex justify-center items-center"
                >
                  {status === 'loading' ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : 'Confirmer la réservation'}
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
