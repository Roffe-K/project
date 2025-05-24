import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Header from './components/Header';
import Hero from './components/Hero';
import GamesSection from './components/GamesSection';
import DrinksSection from './components/DrinksSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Contact from './pages/Contact';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import About from './pages/About';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { PartyPopper as Party } from 'lucide-react';

const LandingPage = () => {
  useEffect(() => {
    document.title = 'PartyPrep - Games & Drinks';

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <CTA />
        <GamesSection />
        <DrinksSection />
      </main>
      <Footer />
    </div>
  );
};

const AppWrapper = () => {
  const { loading } = useAuth();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-out',
    });
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50 animate-fade-in-out">
        <Party className="h-12 w-12 text-green-400 animate-spin" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <>
                <Header />
                <Hero />
                <Dashboard />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <>
                <Header />
                <Hero />
                <Profile />
              </>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <AuthProvider>
    <AppWrapper />
  </AuthProvider>
);

export default App;
