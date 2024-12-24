import React from "react";

function RegisterPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-gray-900 p-8 rounded-lg shadow-lg">
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
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="text-gray-300 text-sm mb-2 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Name"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-gray-300 text-sm mb-2 block"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Phone Number"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-gray-300 text-sm mb-2 block"
            >
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
            <label
              htmlFor="class"
              className="text-gray-300 text-sm mb-2 block"
            >
              Class
            </label>
            <input
              type="text"
              id="class"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Class"
            />
          </div>
          <div>
            <label
              htmlFor="school"
              className="text-gray-300 text-sm mb-2 block"
            >
              School
            </label>
            <input
              type="text"
              id="school"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your School"
            />
          </div>
          <div>
            <label
              htmlFor="district"
              className="text-gray-300 text-sm mb-2 block"
            >
              District
            </label>
            <input
              type="text"
              id="district"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your District"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300 ease-in-out"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
