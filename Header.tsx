import React, { useState, useEffect } from 'react';
import { PartyPopper as Party, GlassWater, Menu, X } from 'lucide-react';
import { Link } from './ui/Link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900 shadow-lg py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Party className="h-8 w-8 text-green-400 mr-2" />
            <span className="text-white font-bold text-xl">PartyPrep</span>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#games">Spel</Link>
            <Link href="#drinks">Drinkar</Link>
            <Link href="#about">Om oss</Link>
            <Link 
              href="#get-started" 
              className="bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-full"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile nav */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex flex-col py-4 px-4 space-y-4">
          <Link href="#games" onClick={() => setIsOpen(false)}>Spel</Link>
          <Link href="#drinks" onClick={() => setIsOpen(false)}>Drinkar</Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>Om oss</Link>
          <Link 
            href="#get-started" 
            onClick={() => setIsOpen(false)}
            className="bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-full text-center"
          >
            Börja nu
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;