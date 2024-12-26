import React from 'react';
import UserCard from '../components/UserCard';


function AdminPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">

      <div className="absolute left-4 top-4 flex gap-4 items-center">
        <div className="text-center font-bold bg-gray-800 rounded-lg py-2 px-6 shadow-lg">
          Admin Name
        </div>
        <button className="bg-gradient-to-r from-green-700 to-green-500 hover:from-green-600 hover:to-green-400 text-white font-bold rounded-lg py-2 px-6 shadow-md transition-all duration-300">
          Save Changes
        </button>
      </div>


      <header className="text-center py-20 md:py-8">
        <h2 className="text-3xl md:text-4xl font-semibold">Admin Panel</h2>
      </header>

      <div className="max-w-7xl mx-auto h-[700px] grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="col-span-1 h-96 md:h-auto bg-gray-800 rounded-lg shadow-lg p-6 overflow-auto">
          <h2 className="mb-6 text-2xl font-semibold">Latest Submissions</h2>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>

        <div className="col-span-1 md:col-span-2 bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="mb-6 text-2xl font-semibold">Response</h2>
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-center text-gray-400">No responses available yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
