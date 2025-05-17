// src/pages/Register.tsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate('/dashboard');
  };

  return (
    <div className="p-6 max-w-sm mx-auto text-white">
      <h2 className="text-xl font-bold mb-4">Skapa konto</h2>
      <input className="w-full p-2 mb-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-post" />
      <input className="w-full p-2 mb-4" value={password} onChange={e => setPassword(e.target.value)} placeholder="Lösenord" type="password" />
      <button className="bg-green-500 px-4 py-2 rounded w-full" onClick={handleRegister}>Registrera</button>
    </div>
  );
};

export default Register;
