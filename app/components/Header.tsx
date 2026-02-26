'use client';

import { useState } from "react";
import Link from "next/link";
import { useCart } from './CartProvider';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-serif tracking-widest text-[#2A2A2A]">
              KINESVELT<span className="text-[#E38F75]">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA & Cart */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* Cart Icon */}
            <Link href="/demande-devis" className="relative p-2 text-gray-600 hover:text-[#E38F75] transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute 0 right-0 bg-[#E38F75] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white box-content">
                  {cart.length}
                </span>
              )}
            </Link>

            <Link 
              href="/contact"
              className="bg-[#E38F75] hover:bg-[#d47b60] transition-colors text-white px-7 py-3 rounded-full font-medium text-sm"
            >
              Prendre Rendez-vous
            </Link>
          </div>

          {/* Mobile Cart & Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            
            {/* Mobile Cart Icon */}
            <Link href="/demande-devis" className="relative p-2 text-gray-600 hover:text-[#E38F75] transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute 0 right-0 bg-[#E38F75] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white box-content">
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

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg pb-6 pt-4 px-4 flex flex-col gap-4">
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