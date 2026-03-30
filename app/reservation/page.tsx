'use client';

import { useCart } from '../components/CartProvider';
import { useState } from 'react';
import Link from 'next/link';

export default function ReservationPage() {
  const { cart, removeFromCart } = useCart();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const targetEmail = "youness.filali.ma@gmail.com"; // CHANGE THIS

  // Generate time slots from 09:00 to 17:00
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", 
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", 
    "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
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
          <p className="text-gray-500 mb-8">Nous avons bien reçu votre demande pour vos soins. Notre équipe vous contactera très rapidement pour valider définitivement cet horaire.</p>
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
          
          {/* Left Column: Selected Services */}
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
              <ul className="divide-y divide-gray-100">
                {cart.map((item, idx) => (
                  <li key={idx} className="py-4 flex justify-between items-center">
                    <span className="font-medium text-[#2A2A2A]">{item}</span>
                    <button 
                      onClick={() => removeFromCart(item)}
                      className="text-red-400 hover:text-red-600 text-sm font-medium"
                    >
                      Retirer
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Column: Date, Time & Info Form */}
          {cart.length > 0 && (
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 sticky top-32">
              <h2 className="text-xl font-medium text-[#2A2A2A] mb-6">Vos coordonnées & Date</h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="hidden" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nouvelle Réservation Multiservices" />
                
                {/* Passes the whole cart in the email */}
                <input type="hidden" name="soins_selectionnes" value={cart.join(", ")} />

                <div>
                  <input type="text" name="nom_complet" required placeholder="Nom Complet" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E38F75] bg-[#FAF8F7]" />
                </div>
                <div>
                  <input type="tel" name="telephone" required placeholder="Téléphone (ex: 06...)" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E38F75] bg-[#FAF8F7]" />
                </div>

                {/* DATE AND TIME ROW */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input type="date" name="date_souhaitee" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E38F75] bg-[#FAF8F7] text-gray-600 text-sm" />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#E38F75] hover:bg-[#d47b60] text-white py-4 rounded-xl font-medium mt-2"
                >
                  {status === 'loading' ? 'Envoi en cours...' : 'Confirmer la réservation'}
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}