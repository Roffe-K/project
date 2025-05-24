import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'Om oss - PartyPrep';
  }, []);

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">Om PartyPrep</h2>
            <p className="mb-4 text-gray-300">
              PartyPrep är en passionerad plattform skapad för att göra dina fester oförglömliga.
              Vi kombinerar roliga spel, kreativa drinkar och enkel användarupplevelse.
            </p>
            <p className="mb-4 text-gray-400">
              Projektet började som ett hobbyprojekt men har vuxit till en seriös produkt med fokus på användarvänlighet och nöje.
            </p>
            <p className="text-sm text-gray-500">
              Vi är ett litet team med en stor vision: att förbättra varje fest – en lek och en drink i taget. 🍻
            </p>
          </div>

          {/* Bild */}
          <div data-aos="fade-up">
            <img
              src="/images/about-party.jpg"
              alt="Teamet bakom PartyPrep"
              className="rounded-xl shadow-lg border border-gray-700"
            />
          </div>
        </div>

        {/* CTA-knapp längst ner */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-gray-400 mb-4">Har du frågor eller feedback?</p>
          <a
            href="/contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Kontakta oss
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
