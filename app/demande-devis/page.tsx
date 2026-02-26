'use client';

import { useCart } from '../components/CartProvider';
import { useState } from 'react';
import Link from 'next/link';

export default function DemandeDevisPage() {
  const { cart, removeFromCart } = useCart();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const targetEmail = "VOTRE_EMAIL@domaine.com"; // CHANGE THIS

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
        localStorage.removeItem('kinesvelt_machine_cart'); // Clear cart on success
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
        <div className="bg-white rounded-[2rem] p-10 max-w-lg w-full text-center shadow-sm">
          <h2 className="text-3xl font-medium text-[#2A2A2A] mb-4">Demande Envoyée !</h2>
          <p className="text-gray-500 mb-8">Nous avons bien reçu votre demande de devis pour vos équipements. Notre équipe commerciale vous contactera très rapidement.</p>
          <Link href="/equipements" className="text-[#E38F75] font-medium hover:underline">Retourner aux équipements</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F7] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl lg:text-5xl font-medium text-[#2A2A2A] mb-12">Votre demande de devis</h1>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          
          {/* Left Column: Cart Items */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm">
            <h2 className="text-2xl font-medium text-[#2A2A2A] mb-6">Équipements sélectionnés</h2>
            
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-6">Votre sélection est vide.</p>
                <Link href="/equipements" className="bg-[#E38F75] text-white px-6 py-3 rounded-full font-medium">Parcourir nos machines</Link>
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {cart.map((machine, idx) => (
                  <li key={idx} className="py-4 flex justify-between items-center">
                    <span className="font-medium text-[#2A2A2A]">{machine}</span>
                    <button 
                      onClick={() => removeFromCart(machine)}
                      className="text-red-400 hover:text-red-600 text-sm font-medium"
                    >
                      Retirer
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Column: FormSubmit Form */}
          {cart.length > 0 && (
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 sticky top-32">
              <h2 className="text-xl font-medium text-[#2A2A2A] mb-6">Vos coordonnées</h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="hidden" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nouvelle Demande de Devis - Machines" />
                
                {/* We pass the cart as a hidden string so FormSubmit sends it in the email! */}
                <input type="hidden" name="machines_selectionnees" value={cart.join(", ")} />

                <div>
                  <input type="text" name="nom_complet" required placeholder="Nom Complet / Entreprise" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E38F75] bg-[#FAF8F7]" />
                </div>
                <div>
                  <input type="email" name="email" required placeholder="Email professionnel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E38F75] bg-[#FAF8F7]" />
                </div>
                <div>
                  <input type="tel" name="telephone" required placeholder="Téléphone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E38F75] bg-[#FAF8F7]" />
                </div>
                <div>
                  <textarea name="message" rows={3} placeholder="Détails de votre projet (optionnel)" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E38F75] bg-[#FAF8F7]"></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#E38F75] hover:bg-[#d47b60] text-white py-4 rounded-xl font-medium mt-2"
                >
                  {status === 'loading' ? 'Envoi en cours...' : 'Demander le devis'}
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}