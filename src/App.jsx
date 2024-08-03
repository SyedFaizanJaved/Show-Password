import React from 'react';
import './index.css';
import PasswordToggle from './PasswordToggle';

function App() {
  return (
    <div className="App bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <header className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Hide and Show Password
        </h1>
        <PasswordToggle />
      </header>
    </div>
  );
}

export default App;
