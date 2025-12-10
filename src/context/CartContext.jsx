import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'nikee-cart';

export function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(() => {
    const cached = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    return cached ? JSON.parse(cached) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product, qty = 1, size) => {
    setItems(prev => {
      const idx = prev.findIndex(p => p.id === product.id && p.size === (size || p.size));
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...prev, { ...product, qty, size: size || product.size || 'M' }];
    });
    setIsOpen(true);
  };

  const updateQty = (id, size, qty) =>
    setItems(prev =>
      prev
        .map(p => (p.id === id && p.size === size ? { ...p, qty } : p))
        .filter(p => p.qty > 0)
    );

  const removeItem = (id, size) =>
    setItems(prev => prev.filter(p => !(p.id === id && p.size === size)));

  const clear = () => setItems([]);
  const toggleCart = () => setIsOpen(v => !v);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const totalCount = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);
  const totalPrice = useMemo(() => items.reduce((s, i) => s + i.qty * i.price, 0), [items]);

  const value = {
    items,
    addItem,
    updateQty,
    removeItem,
    clear,
    totalCount,
    totalPrice,
    isOpen,
    toggleCart,
    openCart,
    closeCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

