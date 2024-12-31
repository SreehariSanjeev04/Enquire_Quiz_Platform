import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import CorrectionPage from "../components/Correction";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useContext } from "react";
import { AuthContext} from "../service/AuthContext";


function AdminPage() {
  const { user, loading, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(0);

  const handleUserClick = (index) => {
    setSelectedUser(index);
  };

  const handleLogout = () => {
    localStorage.removeItem('enquireUserToken');
    setUser(null);
  }

  useEffect(() => {
    const token = localStorage.getItem('enquireUserToken');
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/quiz/get-responses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      if (response.ok) {
        setData(result);
        toast.success("Data fetched successfully");
      } else {
        toast.error("Failed to fetch data");
      }
    };

    if(!loading) {
      fetchData();
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="absolute left-4 top-4 flex gap-4 items-center">
        <div className="text-center font-bold bg-gray-800 rounded-lg py-2 px-6 shadow-lg">
          { user.name }
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-700 hover:bg-red-600 text-white font-bold rounded-lg py-2 px-6 shadow-md transition-all duration-300"
        >
          Logout
        </button>
        <button
          onClick={() => navigate("/leaderboard")}
          className="bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-lg py-2 px-6 shadow-md transition-all duration-300"
        >
          Leaderboard
        </button>
      </div>

      <header className="text-center py-20 md:py-8">
      <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-indigo-300">Admin Panel</h2>
      </header>

      <div className="max-w-7xl mx-auto h-[700px] grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="col-span-1 h-96 md:h-auto bg-gray-800 rounded-lg shadow-lg p-6 overflow-auto">
          <h2 className="mb-6 text-2xl font-semibold">Latest Submissions</h2>
          {data.map((user, index) => (
            <div key={user.id} onClick={() => handleUserClick(index)}>
              <UserCard name={user.user.name} email={user.user.email} />
            </div>
          ))}
        </div>
        <CorrectionPage userId={user.id} response={data[selectedUser]?.response} />
      </div>
    </div>
  );
}

export default AdminPage;
