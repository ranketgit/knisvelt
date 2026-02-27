'use client';

import { useCart } from './CartProvider';
import Link from 'next/link';

interface AddToCartCardProps {
  machineName: string;
}

export default function AddToCartCard({ machineName }: AddToCartCardProps) {
  const { addToCart, removeFromCart, isInCart, cart } = useCart();
  const added = isInCart(machineName);

  return (
    <div className="bg-[#FAF8F7] rounded-[2.5rem] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-white sticky top-32 flex flex-col items-center text-center">
      
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
        <svg className="w-8 h-8 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>

      <h2 className="text-2xl font-medium text-[#2A2A2A] mb-2">
        Réserver cet équipement
      </h2>
      <p className="text-gray-500 text-[14px] mb-8">
        Ajoutez cette machine à votre réservation pour choisir votre date et heure.
      </p>

      {added ? (
        <div className="w-full flex flex-col gap-3">
          <button 
            onClick={() => removeFromCart(machineName)}
            className="w-full bg-white border-2 border-gray-200 hover:border-red-200 hover:text-red-500 text-gray-600 transition-colors py-3.5 rounded-xl font-medium flex justify-center items-center gap-2"
          >
            Retirer l'équipement
          </button>
          <Link 
            href="/reservation"
            className="w-full bg-[#E38F75] hover:bg-[#d47b60] transition-colors text-white py-4 rounded-xl font-medium flex justify-center items-center gap-2"
          >
            Finaliser ma réservation ({cart.length})
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      ) : (
        <button 
          onClick={() => addToCart(machineName)}
          className="w-full bg-[#2A2A2A] hover:bg-black transition-colors text-white py-4 rounded-xl font-medium flex justify-center items-center gap-2"
        >
          Ajouter à ma réservation
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      )}

      {cart.length > 0 && !added && (
         <Link href="/reservation" className="text-sm font-medium text-[#E38F75] hover:underline mt-6">
           Voir ma sélection actuelle ({cart.length} choix)
         </Link>
      )}
    </div>
  );
}