import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GamesSection from './components/GamesSection';
import DrinksSection from './components/DrinksSection';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const afterDrinksRef = useRef<HTMLDivElement>(null);
  const [hideGetStarted, setHideGetStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (afterDrinksRef.current) {
        const top = afterDrinksRef.current.getBoundingClientRect().top;
        setHideGetStarted(top <= 60); // 60px för headerhöjd
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header hideGetStarted={hideGetStarted} />
      {/* ...din kod för drinksektionen... */}
      <div id="drinks">
        {/* Drinksektionen */}
      </div>
      <div ref={afterDrinksRef}>
        {/* Sektionen efter drinkarna */}
      </div>
      {/* ...resten av din app... */}
    </>
  );
}

export default App;