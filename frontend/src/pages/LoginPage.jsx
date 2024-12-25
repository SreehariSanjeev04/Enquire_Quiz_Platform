import React from 'react'
import { Link } from 'react-router-dom';
const LoginPage = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex justify-center items-center">
          <div className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg">
            <img
              src="/enquire.png"
              alt="Logo"
              className="w-32 h-32 mx-auto object-cover mb-8"
            />
            <h1 className="text-white font-bold text-4xl text-center mb-4">
              Login
            </h1>
            <h3 className="text-gray-400 text-center font-medium text-lg mb-8">
              Challenge your mind, ignite your curiosity
            </h3>
            <form className="flex flex-col gap-y-6">
                <div>
                <label htmlFor="email" className="text-gray-300 text-sm mb-2 block">
                    Email Id
                    </label>
                    <input
                    type="email"
                    id="email"
                    required
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your Email"
                    />
                </div>
                <div>
                <label htmlFor="password" className="text-gray-300 text-sm mb-2 block">
                    Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    required
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your Password"
                    />
                </div>
              <p className='font-semibold text-zinc-400'>Don't have an account? <Link className='font-bold text-white' to={"/"}>Register</Link></p>
              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 ease-in-out"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default LoginPage
