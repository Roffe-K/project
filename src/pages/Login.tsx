import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      alert('Fel vid inloggning: ' + err.message);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Logga in</h2>
        <input
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded placeholder-gray-400"
          placeholder="E-post"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="w-full p-3 mb-6 bg-gray-700 text-white rounded placeholder-gray-400"
          type="password"
          placeholder="Lösenord"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-semibold mb-4"
        >
          Logga in
        </button>

        <p className="text-center text-sm text-gray-300">
          Har du inget konto?{' '}
          <Link to="/register" className="text-green-400 hover:underline">
            Skapa konto
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
