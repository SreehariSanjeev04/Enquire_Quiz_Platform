import React from 'react';

function RegisterPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex justify-center items-center">
      <div className="w-96 bg-gray-900 p-8 rounded-lg shadow-lg">
        <img
          src="/enquire.png"
          alt="Logo"
          className="w-32 h-32 mx-auto object-cover mb-8"
        />
        <h1 className="text-white font-bold text-4xl text-center mb-4">
          Register
        </h1>
        <h3 className="text-gray-400 text-center font-medium text-lg mb-8">
          Challenge your mind, ignite your curiosity
        </h3>
        <form className="flex flex-col">
          <label htmlFor="email" className="text-gray-300 text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          <label htmlFor="email" className="text-gray-300 text-sm mb-2">
            School
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your School"
          />
          <label htmlFor="email" className="text-gray-300 text-sm mb-2">
            Phone Number
          </label>
          <input
            type="number"
            id="email"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Phone Number"
          />
          <label htmlFor="email" className="text-gray-300 text-sm mb-2">
            Roll Number
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Roll Number"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
