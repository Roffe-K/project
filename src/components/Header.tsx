import React, { useState, useEffect } from 'react';
import { PartyPopper as Party, Menu, X } from 'lucide-react';
import Flag from 'react-world-flags';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Link as UiLink } from './ui/Link';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'sv' | 'en'>('sv');
  const [showLang, setShowLang] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [nickname, setNickname] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const snap = await getDoc(doc(db, 'users', user.uid));
        if (snap.exists()) {
          const data = snap.data();
          setNickname(data.nickname || '');
          setAvatarUrl(data.avatarUrl || '');
        }
      };
      fetchProfile();
    }
  }, [user]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const currentPath = location.pathname;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Party className="h-8 w-8 text-green-400 mr-2" />
            <span className="text-white font-bold text-xl">PartyPrep</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {!user && (
              <>
                {currentPath !== '/' && (
                  <UiLink href="/" className="relative">
                    Hem
                  </UiLink>
                )}
                <UiLink
                  href="/contact"
                  className={`relative ${currentPath === '/contact' ? 'text-green-400' : ''}`}
                >
                  Kontakt
                </UiLink>
              </>
            )}

            <UiLink href="#about">{lang === 'sv' ? 'Om oss' : 'About'}</UiLink>

            {user ? (
              <>
                <UiLink href="#games">Spel</UiLink>
                <UiLink href="#drinks">Drinkar</UiLink>
                <RouterLink to="/dashboard" className="text-white font-semibold hover:text-green-400 transition-colors">Dashboard</RouterLink>
                <RouterLink to="/profile" className="flex items-center gap-2 text-white hover:text-green-400 font-semibold">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt="Avatar" className="h-6 w-6 rounded-full object-cover" />
                  ) : (
                    <span className="bg-gray-700 rounded-full px-2 text-sm">{nickname || user.email?.split('@')[0]}</span>
                  )}
                  <span>Min profil</span>
                </RouterLink>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">Logga ut</button>
              </>
            ) : (
              <RouterLink to="/login" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
                {lang === 'sv' ? 'Börja nu' : 'Get Started'}
              </RouterLink>
            )}

            {/* Språk */}
            <div className="relative ml-4">
              <button onClick={() => setShowLang(!showLang)} className="focus:outline-none">
                <Flag code={lang === 'sv' ? 'SE' : 'US'} style={{ width: 32, height: 20, objectFit: 'cover', borderRadius: 6 }} />
              </button>
              {showLang && (
                <div className="absolute right-0 mt-2 bg-gray-800 text-white shadow-md rounded z-50 w-40">
                  <button onClick={() => { setLang('sv'); setShowLang(false); }} className="flex items-center px-4 py-2 hover:bg-gray-700 w-full text-left">
                    <Flag code="SE" style={{ width: 20, height: 14, marginRight: 8, borderRadius: 4 }} />
                    Svenska
                  </button>
                  <button onClick={() => { setLang('en'); setShowLang(false); }} className="flex items-center px-4 py-2 hover:bg-gray-700 w-full text-left">
                    <Flag code="US" style={{ width: 20, height: 14, marginRight: 8, borderRadius: 4 }} />
                    English
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden bg-gray-900 shadow-xl absolute top-full left-0 right-0 z-40">
          <nav className="flex flex-col py-4 px-4 space-y-4">
            {!user && (
              <>
                {currentPath !== '/' && (
                  <UiLink href="/" onClick={() => setIsOpen(false)}>Hem</UiLink>
                )}
                <UiLink
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={currentPath === '/contact' ? 'text-green-400' : ''}
                >
                  Kontakt
                </UiLink>
              </>
            )}

            <UiLink href="/about" onClick={() => setIsOpen(false)}>
              {lang === 'sv' ? 'Om oss' : 'About'}
            </UiLink>

            {user ? (
              <>
                <UiLink href="#games" onClick={() => setIsOpen(false)}>Spel</UiLink>
                <UiLink href="#drinks" onClick={() => setIsOpen(false)}>Drinkar</UiLink>
                <RouterLink to="/dashboard" onClick={() => setIsOpen(false)} className="text-white font-semibold">Dashboard</RouterLink>
                <RouterLink to="/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-white font-semibold">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt="Avatar" className="h-6 w-6 rounded-full object-cover" />
                  ) : (
                    <span className="bg-gray-700 rounded-full px-2 text-sm">{nickname || user.email?.split('@')[0]}</span>
                  )}
                  <span>Min profil</span>
                </RouterLink>
                <button onClick={() => { handleLogout(); setIsOpen(false); }} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">Logga ut</button>
              </>
            ) : (
              <RouterLink to="/login" onClick={() => setIsOpen(false)} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full text-center">
                {lang === 'sv' ? 'Börja nu' : 'Get Started'}
              </RouterLink>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
