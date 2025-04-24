// components/Cart.tsx
'use client';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems } = useCart();
  return (
    <div className="absolute top-4 right-4 bg-white border px-4 py-2 rounded shadow">
      🛒 Cart ({cartItems.length})
    </div>
  );
}