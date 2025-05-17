import React, { useState, useEffect } from 'react';
import { PartyPopper as Party, Menu, X } from 'lucide-react';
import { Link } from './ui/Link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Party className="h-8 w-8 text-green-400 mr-2" />
            <span className="text-white font-bold text-xl">PartyPrep</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#games">Spel</Link>
            <Link href="#drinks">Drinkar</Link>
            <Link href="#about">Om oss</Link>
            <Link
              href="#get-started"
              className="bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-full"
            >
              Börja nu
            </Link>
          </nav>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-900 shadow-xl absolute top-full left-0 right-0 z-40">
          <nav className="flex flex-col py-4 px-4 space-y-4">
            <Link href="#games" onClick={() => setIsOpen(false)}>
              Spel
            </Link>
            <Link href="#drinks" onClick={() => setIsOpen(false)}>
              Drinkar
            </Link>
            <Link href="#about" onClick={() => setIsOpen(false)}>
              Om oss
            </Link>
            <Link
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-full text-center"
            >
              Börja nu
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
