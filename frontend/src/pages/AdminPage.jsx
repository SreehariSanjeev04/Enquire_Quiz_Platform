import React, { useState } from "react";
import UserCard from "../components/UserCard";
import CorrectionPage from "../components/Correction";

const mockUsers = [
  { id: 1, name: "John Doe", responses: [{ qNo: "1", answer: "A library", isCorrect: null }] },
  { id: 2, name: "Jane Smith", responses: [{ qNo: "2", answer: "A syntax extension", isCorrect: null }] },
  { id: 3, name: "Alice Brown", responses: [{ qNo: "3", answer: "Data management", isCorrect: null }] },
];

function AdminPage() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

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
        {/* User List */}
        <div className="col-span-1 h-96 md:h-auto bg-gray-800 rounded-lg shadow-lg p-6 overflow-auto">
          <h2 className="mb-6 text-2xl font-semibold">Latest Submissions</h2>
          {mockUsers.map((user) => (
            <div key={user.id} onClick={() => handleUserClick(user)}>
              <UserCard name={user.name} />
            </div>
          ))}
        </div>

        {/* Response Section */}
        <CorrectionPage selectedUser={selectedUser} />
      </div>
    </div>
  );
}

export default AdminPage;

