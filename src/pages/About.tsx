import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const team = [
  {
    name: 'Robin K.',
    role: 'Grundare & Utvecklare',
    image: '/images/robin.jpg',
  },
  {
    name: 'Sofia L.',
    role: 'Design & UI',
    image: '/images/sofia.jpg',
  },
  {
    name: 'Anton J.',
    role: 'Test & Feedback',
    image: '/images/anton.jpg',
  },
];

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'Om oss - PartyPrep';
  }, []);

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-20 px-4">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6">Om PartyPrep</h2>
          <p className="mb-4 text-gray-300">
            PartyPrep är byggt med kärlek för att göra dina fester enklare, roligare och mer minnesvärda.
          </p>
          <p className="mb-4 text-gray-400">
            Vårt lilla men drivna team kombinerar teknisk kunskap med partyglädje – allt för att du ska slippa tänka och bara kunna ha kul.
          </p>
          <p className="text-sm text-gray-500">
            Vi tror på skratt, spontanitet och riktigt bra användarupplevelser 🍻
          </p>
        </div>

        {/* Team */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center" data-aos="fade-up">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow border border-gray-600">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border border-gray-500"
              />
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Kontaktknapp */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <p className="text-gray-400 mb-4">Vill du komma i kontakt med oss?</p>
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
