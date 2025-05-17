import React, { useState, useEffect } from 'react';
import { PartyPopper as Party, Menu, X } from 'lucide-react';
import Flag from 'react-world-flags';
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

          {/* Desktop navigation */}
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

            {/* Flag dropdown */}
            <div className="relative ml-4">
              <button onClick={() => setShowLang(!showLang)} className="focus:outline-none">
                <Flag code={lang === 'sv' ? 'SE' : 'US'} style={{ width: 32, height: 20, objectFit: 'cover', borderRadius: 6 }} />
              </button>
              {showLang && (
                <div className="absolute right-0 mt-2 bg-white text-black shadow rounded w-40 z-50">
                  <button
                    onClick={() => {
                      setLang('sv');
                      setShowLang(false);
                    }}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    <Flag code="SE" style={{ width: 20, marginRight: 8 }} /> Svenska
                  </button>
                  <button
                    onClick={() => {
                      setLang('en');
                      setShowLang(false);
                    }}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    <Flag code="US" style={{ width: 20, marginRight: 8 }} /> English
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

{/* Mobile flag dropdown */}
<div className="flex justify-center pt-2 relative">
  <button
    onClick={() => setShowLang(!showLang)}
    className="focus:outline-none"
  >
    <Flag
      code={lang === 'sv' ? 'SE' : 'US'}
      style={{ width: 32, height: 20, objectFit: 'cover', borderRadius: 6 }}
    />
  </button>

  {showLang && (
    <div className="absolute top-full mt-2 bg-white text-black shadow-md rounded z-50 w-40">
      <button
        onClick={() => {
          setLang('sv');
          setShowLang(false);
        }}
        className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left"
      >
        <Flag code="SE" style={{ width: 20, height: 14, marginRight: 8, borderRadius: 4 }} />
        Svenska
      </button>
      <button
        onClick={() => {
          setLang('en');
          setShowLang(false);
        }}
        className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left"
      >
        <Flag code="US" style={{ width: 20, height: 14, marginRight: 8, borderRadius: 4 }} />
        English
      </button>
    </div>
  )}
</div>
    </header>
  );
};

export default Header;
