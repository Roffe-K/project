import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // fake reset
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Kontakta oss</h2>
        <p className="text-gray-400 mb-8">Fyll i formuläret nedan så hör vi av oss så snart vi kan!</p>

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
              className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
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
  );
};

export default Contact;
