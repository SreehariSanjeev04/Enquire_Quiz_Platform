import React from 'react'
import { FaTrash } from "react-icons/fa";

function UserCard() {
  return (
    <div className="mb-5 py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
        <div>
            <p className="text-sm font-semibold">Name: John Doe</p>
            <p className="text-sm font-semibold">School: Random School</p>
            <p className="text-sm font-semibold">District: Kozhikode</p>
            <p className="text-sm font-semibold">Phone: 2342432423</p>
        </div>



    </div>
  )
}

export default UserCard
