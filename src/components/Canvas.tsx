'use client';
import { useState, useRef } from 'react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';
import html2canvas from 'html2canvas';
import Image from 'next/image';

interface Item {
  id: number;
  type: string;
  x: number;
  y: number;
}

export default function Canvas() {
  const [items, setItems] = useState<Item[]>([]);
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const offset = useRef({ x: 0, y: 0 });
  const [showSuccess, setShowSuccess] = useState(false);

  const { addToCart } = useCart();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('clothing-type');
    const canvasRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const newItem = {
      id: Date.now(),
      type,
      x: e.clientX - canvasRect.left - 24,
      y: e.clientY - canvasRect.top - 24,
    };
    setItems((prev) => [...prev, newItem]);
  };

  const handleMouseDown = (e: React.MouseEvent, id: number) => {
    setDraggingId(id);
    const canvasRect = (e.currentTarget.parentElement?.parentElement as HTMLElement).getBoundingClientRect();
    const item = items.find((item) => item.id === id);
    if (item) {
      offset.current = {
        x: e.clientX - canvasRect.left - item.x,
        y: e.clientY - canvasRect.top - item.y,
      };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingId === null) return;
    const canvasRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const newX = e.clientX - canvasRect.left - offset.current.x;
    const newY = e.clientY - canvasRect.top - offset.current.y;

    setItems((prev) =>
      prev.map((item) =>
        item.id === draggingId ? { ...item, x: newX, y: newY } : item
      )
    );
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  const handleReset = () => {
    setItems([]);
  };

  const handleSaveOutfit = async () => {
    const canvasElement = document.getElementById('canvas-area');
    const buttons = document.getElementById('canvas-buttons');
    if (!canvasElement || !buttons) return;

     // Temporarily hide buttons
    buttons.style.display = 'none';
  
    setTimeout(async () => {
        const canvasImage = await html2canvas(canvasElement);
        const dataUrl = canvasImage.toDataURL('image/png');
    
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'my-outfit.png';
        link.click();
    
        // Show buttons again after download
        buttons.style.display = 'flex';
      }, 100); // small delay ensures DOM update
    
  };

  const handleAddToCart = () => {
    items.forEach((item) => addToCart(item.type));
    setShowSuccess(true); // ✅ 2. Show message
    setTimeout(() => setShowSuccess(false), 3000);
    //alert('Items added to cart!');
  };

  return (
    <section
    id="canvas-area" 
      className="flex-1 relative bg-white"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Cart />
      {items.map((item) => (
        <div
          key={item.id}
          style={{ top: item.y, left: item.x }}
          className="absolute"
        >
          <Image  width={500} height={300}  
            src={`/icons/${item.type}.png`}
            alt={item.type}
            className="w-12 h-12 cursor-grab"
            style={{ width: '48px', height: '48px' }}
            onMouseDown={(e) => handleMouseDown(e, item.id)}
          />
        </div>
      ))}

      {/* Footer Buttons */}
      <div id="canvas-buttons" className="absolute bottom-4 left-4 flex gap-3 z-50">
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Reset Canvas
        </button>
        <button
          onClick={handleSaveOutfit}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Save Outfit
        </button>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add All to Cart
        </button>
        {showSuccess && (
          <p className="mt-2 text-green-600 font-semibold">
            Items added to cart!
          </p>
        )}
      </div>
    </section>
  );
}
