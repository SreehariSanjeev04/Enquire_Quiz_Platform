import React from 'react';

function RegisterPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex justify-center items-center">
      <div className="w-[90%] bg-gray-900 p-8 rounded-lg shadow-lg lg:w-[70%] lg:flex lg:p-0">

        {/* description section */}
        <div className='lg:w-[50%] lg:p-8'>
          {/* logo and catchline */}
          <div className='lg:flex lg:flex-col lg:justify-center'>
            <img
              src="/enquire.png"
              alt="Logo"
              className="w-32 h-32 mx-auto object-cover mb-8"
            />
            <h3 className="text-gray-400 text-center font-medium text-lg mb-8">
              Challenge your mind, ignite your curiosity
            </h3>
          </div>

          {/* we can add small description of the quiz here */}
        </div>

        {/* Register section */}
        <div className='text-white lg:p-8 lg:w-[50%] lg:bg-slate-50 lg:rounded-r-lg lg:text-black'>
          <h1 className=" font-bold text-4xl text-center mb-4">
            Register
          </h1>
        <form className="flex flex-col">
          <label htmlFor="email" className="text-gray-300 text-sm mb-2 lg:text-black">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:bg-slate-200"
            placeholder="Enter your email"
          />
          <label htmlFor="email" className="text-gray-300 text-sm mb-2 lg:text-black">
            School
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:bg-slate-200"
            placeholder="Enter your School"
          />
          <label htmlFor="email" className="text-gray-300 text-sm mb-2 lg:text-black">
            Phone Number
          </label>
          <input
            type="number"
            id="email"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:bg-slate-200"
            placeholder="Enter your Phone Number"
          />
          <label htmlFor="email" className="text-gray-300 text-sm mb-2 lg:text-black">
            Roll Number
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:bg-slate-200"
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
    </div>
  );
}

export default RegisterPage;
