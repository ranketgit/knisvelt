'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type CartContextType = {
  cart: string[];
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
  isInCart: (item: string) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<string[]>([]);

  // Load cart from local storage so it survives page reloads
  useEffect(() => {
    const savedCart = localStorage.getItem('kinesvelt_machine_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (item: string) => {
    setCart((prev) => {
      // Prevent adding the same machine twice
      if (prev.includes(item)) return prev;
      const newCart = [...prev, item];
      localStorage.setItem('kinesvelt_machine_cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (item: string) => {
    setCart((prev) => {
      const newCart = prev.filter((i) => i !== item);
      localStorage.setItem('kinesvelt_machine_cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const isInCart = (item: string) => cart.includes(item);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};