import React, { useState, useEffect } from 'react';
import { PartyPopper as Party, Menu, X } from 'lucide-react';
import { Flag } from 'react-flagpack';
import { Link } from './ui/Link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'sv' | 'en'>('sv');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const FlagIcon = () => (
    <Flag country={lang === 'sv' ? 'SE' : 'US'} size="L" hasDropShadow={false} />
  );

  const LangDropdown = () => (
    <div className="relative ml-4">
      <button
        onClick={() => setIsOpen(false)}
        className="flex items-center rounded-full focus:outline-none"
      >
        <FlagIcon />
      </button>
      <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
        <button
          onClick={() => setLang('sv')}
          className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
        >
          <Flag country="SE" size="S" className="mr-2" />
          Svenska
        </button>
        <button
          onClick={() => setLang('en')}
          className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
        >
          <Flag country="US" size="S" className="mr-2" />
          English
        </button>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Party className="h-8 w-8 text-green-400 mr-2" />
            <span className="text-white font-bold text-xl">PartyPrep</span>
          </div>

          {/* Desktop */}
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
            {/* Desktop flag */}
            <LangDropdown />
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
            {/* Mobile flag toggle */}
            <div className="flex justify-center pt-2">
              <button
                onClick={() => setLang(lang === 'sv' ? 'en' : 'sv')}
                className="rounded-full"
              >
                <FlagIcon />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
