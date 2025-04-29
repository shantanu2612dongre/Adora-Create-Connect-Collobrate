import { useEffect, useRef } from 'react';

const Logo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      container.style.setProperty('--mouse-x', `${mouseRef.current.x}px`);
      container.style.setProperty('--mouse-y', `${mouseRef.current.y}px`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[400px] bg-black overflow-hidden"
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(30px,1fr))] grid-rows-[repeat(auto-fit,minmax(30px,1fr))] opacity-10">
        {Array.from({ length: 200 }).map((_, i) => (
          <div 
            key={i} 
            className="border border-gray-800/30"
          />
        ))}
      </div>

      {/* Luminous Effect */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(220, 38, 38, 0.15), transparent 40%)',
          transition: 'all 0.2s',
        }}
      />

      {/* Logo Text */}
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-8xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-white/80 to-white/70 [text-shadow:_0_2px_10px_rgba(255,255,255,0.3)] transition-all duration-300">
          OWLED
        </h1>
      </div>
    </div>
  );
};

export default Logo;
