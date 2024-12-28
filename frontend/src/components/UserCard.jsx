import React from 'react';
import { FaTrash } from 'react-icons/fa';

function UserCard() {
  return (
    <div className="mb-5 cursor-pointer py-4 px-6 bg-blue-900 rounded-lg flex justify-between items-center hover:shadow-lg hover:shadow-blue-700 transition-shadow duration-300">
      <div>
        <p className="text-sm text-gray-300 font-semibold">
          Name: <span className="text-white">John Doe</span>
        </p>
        <p className="text-sm text-gray-300 font-semibold">
          School: <span className="text-white">Random School</span>
        </p>
        <p className="text-sm text-gray-300 font-semibold">
          District: <span className="text-white">Kozhikode</span>
        </p>
        <p className="text-sm text-gray-300 font-semibold">
          Phone: <span className="text-white">2342432423</span>
        </p>
      </div>
      <button
        className="text-gray-300 hover:text-red-500 transition duration-300 ease-in-out"
        aria-label="Delete User"
      >
        <FaTrash size={18} />
      </button>
    </div>
  );
}

export default UserCard;
