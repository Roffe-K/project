import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import GamesSection from '../components/GamesSection';
import DrinksSection from '../components/DrinksSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  useEffect(() => {
    document.title = 'PartyPrep - Start';
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <GamesSection showLockedContent={!!user} />
        <DrinksSection showLockedContent={!!user} />
        {/* CTA är borttagen */}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
