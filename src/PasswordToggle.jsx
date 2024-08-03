/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const PasswordToggle = () => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="relative w-72 mb-4">
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded w-full pr-12 transition-colors duration-300 focus:border-blue-500"
          placeholder="Enter your password"
        />
        <button
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 px-3 bg-blue-500 text-white rounded-r hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        >
          {isPasswordVisible ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
};

export default PasswordToggle;
