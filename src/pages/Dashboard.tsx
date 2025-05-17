import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import GamesSection from '../components/GamesSection';
import DrinksSection from '../components/DrinksSection';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  useEffect(() => {
    document.title = 'PartyPrep - Dashboard';
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main>
        <Hero />
        <GamesSection showLockedContent={!!user} />
        <DrinksSection showLockedContent={!!user} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
