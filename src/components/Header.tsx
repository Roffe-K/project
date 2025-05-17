import React, { useState, useEffect } from 'react';
import { PartyPopper as Party, Menu, X } from 'lucide-react';
import { Link } from './ui/Link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'sv' | 'en'>('sv');
  const [showLang, setShowLang] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="#games">{lang === 'sv' ? 'Spel' : 'Games'}</Link>
            <Link href="#drinks">{lang === 'sv' ? 'Drinkar' : 'Drinks'}</Link>
            <Link href="#about">{lang === 'sv' ? 'Om oss' : 'About'}</Link>
            <Link
              href="#get-started"
              className="bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-full"
            >
              {lang === 'sv' ? 'Börja nu' : 'Get Started'}
            </Link>

            {/* Language Switcher */}
            <div className="relative ml-4">
              <button
                onClick={() => setShowLang(!showLang)}
                className="text-2xl hover:ring-2 ring-green-400 rounded-full transition"
              >
                {lang === 'sv' ? '🇸🇪' : '🇺🇸'}
              </button>
              {showLang && (
                <div className="absolute right-0 mt-2 bg-white text-black shadow-md rounded z-50 overflow-hidden">
                  <button
                    onClick={() => {
                      setLang('sv');
                      setShowLang(false);
                    }}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    🇸🇪 Svenska
                  </button>
                  <button
                    onClick={() => {
                      setLang('en');
                      setShowLang(false);
                    }}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    🇺🇸 English
                  </button>
                </div>
              )}
            </div>
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
              {lang === 'sv' ? 'Spel' : 'Games'}
            </Link>
            <Link href="#drinks" onClick={() => setIsOpen(false)}>
              {lang === 'sv' ? 'Drinkar' : 'Drinks'}
            </Link>
            <Link href="#about" onClick={() => setIsOpen(false)}>
              {lang === 'sv' ? 'Om oss' : 'About'}
            </Link>
            <Link
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-full text-center"
            >
              {lang === 'sv' ? 'Börja nu' : 'Get Started'}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
