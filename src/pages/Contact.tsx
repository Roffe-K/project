import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Kontakta oss - PartyPrep';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Info + bild */}
          <div className="order-1 md:order-1 text-gray-300" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-4">Varför kontakta oss?</h3>
            <p className="mb-4">
              Vi älskar att höra från dig! Oavsett om du har feedback, vill rapportera ett fel, föreslå ett spel eller bara säga hej – tveka inte.
            </p>
            <p className="mb-4">
              Vi svarar vanligtvis inom 24 timmar. Under helger kan det ta lite längre tid.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              PS. Vi gillar memes också, så skicka gärna några 🍻
            </p>

            {/* Bild under text */}
            <img
              src="https://handelsnollning.se/wp-content/uploads/2019/07/Bild-N%C3%B6jes.jpg"
              alt="Party illustration"
              className="rounded-lg shadow-md border border-gray-700"
            />
          </div>

          {/* Formulär */}
          <div
            className="order-2 md:order-2 bg-gray-800 rounded-xl shadow-lg p-8 border-2 border-green-500"
            data-aos="fade-up"
          >
            <h2 className="text-2xl font-bold mb-4">Kontakta oss</h2>
            <p className="text-gray-400 mb-8">Fyll i formuläret nedan så hör vi av oss!</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Namn</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={form.name}
                  required
                  className="w-full bg-gray-800 text-white rounded-md p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">E-post</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={form.email}
                  required
                  className="w-full bg-gray-800 text-white rounded-md p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Meddelande</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  onChange={handleChange}
                  value={form.message}
                  required
                  className="w-full bg-gray-800 text-white rounded-md p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-3 rounded-md text-white font-semibold transition-all duration-300 ${
                  submitted ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                {submitted ? 'Skickat!' : 'Skicka meddelande'}
              </button>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

