// src/pages/Dashboard.tsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Välkommen, {user?.email}</h1>
      <p>Här är alla dina festspel och drinkar 🎉</p>
    </div>
  );
};

export default Dashboard;
