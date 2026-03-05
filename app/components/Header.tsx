'use client';

import { useState } from "react";
import Link from "next/link";
import { useCart } from './CartProvider';
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Le Centre", href: "/le-centre" },
    { name: "Prestations", href: "/prestations" },
    { name: "Équipements", href: "/equipements" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-[#694e6e] text-white/90 py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[13px] font-medium">
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Casablanca, Bd. Al Qods</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>05 22 21 73 91</span>
            </div>
          </div>
          <div className="flex items-center gap-6 ml-auto sm:ml-0">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lun-Ven: 09h00 - 19h30</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo-kinesvelt.png"
                  alt="Kinesvelt Logo" 
                  width={160}
                  height={40}
                  className="object-contain h-auto w-auto max-h-12"
                />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  className="text-[15px] font-medium text-gray-600 hover:text-[#E38F75] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <Link href="/reservation" className="relative p-2 text-gray-600 hover:text-[#E38F75] transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-[#E38F75] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white box-content">
                    {cart.length}
                  </span>
                )}
              </Link>

              <Link 
                href="/contact"
                className="bg-[#694e6e] hover:bg-[#49364d] transition-colors text-white px-7 py-3 rounded-full font-medium text-sm"
              >
                Prendre Rendez-vous
              </Link>
            </div>

            <div className="flex items-center gap-4 lg:hidden">
              <Link href="/demande-devis" className="relative p-2 text-gray-600 hover:text-[#E38F75] transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-[#E38F75] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white box-content">
                    {cart.length}
                  </span>
                )}
              </Link>

              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#2A2A2A] hover:text-[#E38F75] focus:outline-none p-2"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg pb-6 pt-4 px-4 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-800 hover:text-[#E38F75] transition-colors py-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-gray-100">
            <Link 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex justify-center bg-[#E38F75] hover:bg-[#d47b60] transition-colors text-white px-6 py-3.5 rounded-full font-medium text-sm w-full"
            >
              Prendre Rendez-vous
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}