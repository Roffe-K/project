import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GamesSection from './components/GamesSection';
import DrinksSection from './components/DrinksSection';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'PartyPrep - Games & Drinks';
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <GamesSection />
        <DrinksSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;