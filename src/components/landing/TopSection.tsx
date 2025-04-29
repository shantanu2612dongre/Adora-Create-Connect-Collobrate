import React, { useEffect, useState } from 'react';
import '@fontsource/orbitron';

const TopSection: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="relative bg-black h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(/nebula.jpg)' }} 
    >
 <div className="mt-5 text-4xl md:text-6xl font-light relative z-10 flex space-x-4 font-orbitron bg-gradient-to-r from-red-500 via-gray-500 to-black-100 to-#09263a-800 bg-clip-text text-transparent tracking-widest">
  <span>A</span>
  <span>D</span>
  <span>O</span>
  <span>R</span>
  <span>A</span>
</div>
      <div className="mt-6 text-lg md:text-2xl text-white/80 font-light tracking-wide animate-fadeIn">
          Create • Connect • Collaborate
        </div>
    </div>
  );
};

export default TopSection;