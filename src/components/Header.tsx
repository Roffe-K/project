import React, { useState, useEffect } from 'react';
import { PartyPopper as Party, Menu, X, Lock } from 'lucide-react';
import Flag from 'react-world-flags';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      } text-white`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <RouterLink to="/" className="text-xl font-bold flex items-center gap-1">
          <Party className="w-5 h-5 text-purple-400" />
          PartyPrep
        </RouterLink>

        {/* Desktop Menu */}
        <div className="md:flex items-center gap-4 hidden">
          {user && (
            <>
              <a href="#games" className="hover:underline">Spel</a>
              <a href="#drinks" className="hover:underline">Drinkar</a>
            </>
          )}

          {user ? (
            <>
              <RouterLink to="/profile" className="flex items-center gap-2">
                <img
                  src={avatarUrl || user.photoURL || '/default-avatar.png'}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm">{nickname || user.email}</span>
              </RouterLink>
              <button onClick={handleLogout} className="text-sm text-red-400 hover:underline">Logga ut</button>
            </>
          ) : (
            <RouterLink to="/login" className="text-sm hover:underline">Logga in</RouterLink>
          )}

          <button onClick={() => setShowLang(!showLang)}>
            <Flag code={lang === 'sv' ? 'SE' : 'US'} className="w-5 h-5 rounded-sm" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-2">
            {user && (
              <>
                <a href="#games" className="hover:underline">Spel</a>
                <a href="#drinks" className="hover:underline">Drinkar</a>
              </>
            )}

            {user ? (
              <>
                <RouterLink to="/profile" className="flex items-center gap-2">
                  <img
                    src={avatarUrl || user.photoURL || '/default-avatar.png'}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm">{nickname || user.email}</span>
                </RouterLink>
                <button onClick={handleLogout} className="text-sm text-red-400 hover:underline">Logga ut</button>
              </>
            ) : (
              <RouterLink to="/login" className="text-sm hover:underline">Logga in</RouterLink>
            )}

            <button onClick={() => setShowLang(!showLang)} className="mt-2">
              <Flag code={lang === 'sv' ? 'SE' : 'US'} className="w-5 h-5 rounded-sm" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
