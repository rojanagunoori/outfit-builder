// app/page.tsx
import OutfitSidebar from '../components/OutfitSidebar';
import Canvas from '../components/Canvas';
import "../styles/global.css"

export default function HomePage() {
  return (
    <main className="flex h-screen">
      <OutfitSidebar />
      <Canvas />
    </main>
  );
}
