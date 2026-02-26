'use client';

import { useState } from 'react';

interface BookingFormProps {
  serviceName: string;
}

export default function BookingForm({ serviceName }: BookingFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // CHANGE THIS TO YOUR ACTUAL EMAIL ADDRESS
  const targetEmail = "medmezzat1964@gmail.com";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to a standard object
    const data = Object.fromEntries(formData.entries());

    try {
      // Using FormSubmit's AJAX endpoint to prevent redirects
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        form.reset(); // Clear the form
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#FAF8F7] rounded-[2.5rem] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-[#E38F75]/30 sticky top-32 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
        <div className="w-16 h-16 bg-[#E38F75]/10 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-[#E38F75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-medium text-[#2A2A2A] mb-4">Demande Envoyée !</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed">
          Merci pour votre intérêt pour <span className="font-semibold text-[#2A2A2A]">{serviceName}</span>. Notre équipe vous contactera très rapidement pour confirmer votre rendez-vous.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm font-medium text-[#E38F75] hover:text-[#d47b60] transition-colors"
        >
          Faire une autre demande
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F7] rounded-[2.5rem] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-white sticky top-32">
      <h2 className="text-2xl font-medium text-[#2A2A2A] mb-2">
        Réserver une séance
      </h2>
      <p className="text-gray-500 text-[14px] mb-8">
        Remplissez ce formulaire pour planifier votre séance de <span className="font-semibold text-[#2A2A2A]">{serviceName}</span>. Nous vous rappellerons pour confirmer la date.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
        {/* Anti-Spam Honeypot for FormSubmit (Hidden) */}
        <input type="text" name="_honey" style={{ display: 'none' }} />
        {/* Disable Captcha to ensure seamless AJAX flow */}
        <input type="hidden" name="_captcha" value="false" />
        {/* Set email subject */}
        <input type="hidden" name="_subject" value={`Nouvelle réservation: ${serviceName}`} />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom Complet *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E38F75]/20 focus:border-[#E38F75] transition-all bg-white disabled:opacity-50"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E38F75]/20 focus:border-[#E38F75] transition-all bg-white disabled:opacity-50"
            placeholder="06 XX XX XX XX"
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date Souhaitée</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            disabled={status === 'loading'}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E38F75]/20 focus:border-[#E38F75] transition-all bg-white text-gray-600 disabled:opacity-50"
          />
        </div>

        {/* This hidden field attaches the service name to the form data! */}
        <input type="hidden" name="service" value={serviceName} />

        {status === 'error' && (
          <p className="text-red-500 text-sm text-center font-medium bg-red-50 py-2 rounded-lg">
            Une erreur s'est produite. Veuillez réessayer.
          </p>
        )}

        <button 
          type="submit"
          disabled={status === 'loading'}
          className="mt-2 w-full bg-[#E38F75] hover:bg-[#d47b60] disabled:bg-gray-400 transition-colors text-white py-4 rounded-xl font-medium flex justify-center items-center"
        >
          {status === 'loading' ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            "Envoyer la demande"
          )}
        </button>
        
        <p className="text-xs text-gray-400 text-center mt-2">
          Vos données sont sécurisées et strictement confidentielles.
        </p>
      </form>
    </div>
  );
}