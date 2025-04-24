// components/OutfitSidebar.tsx
'use client';
import ClothingItem from './ClothingItem';

const clothingItems = ['shirt', 'pants', 'shoes', 'hat'];

export default function OutfitSidebar() {
  return (
    <aside className="w-1/4 p-4 border-r bg-gray-50">
      {clothingItems.map((item) => (
        <ClothingItem key={item} type={item} />
      ))}
    </aside>
  );
}