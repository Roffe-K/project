import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center">
      <div className="max-w-2xl w-full px-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Välkommen {user?.email}</h1>
        <p className="text-center text-gray-300">
          Här kommer du snart kunna se alla festspel och drinkar! 🎉🍸
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
