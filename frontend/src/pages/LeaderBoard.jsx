import React, { useState } from 'react';
import LeaderBoardComponent from '../components/LeaderBoardComponent';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'sonner'
import { useContext } from 'react';
import { AuthContext } from '../service/AuthContext';

const LeaderBoard = () => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [leaderboard, setLeaderboardData] = useState([]);
    
  useEffect(() => {
    const token = localStorage.getItem('enquireTokenUser');
    const fetchData = async() => {
      const response = await fetch("http://localhost:3000/quiz/get-leaderboard", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const result = await response.json();
      if(response.ok) {
        toast.success('Data fetched successfully');
        console.log(result);
        setLeaderboardData(result);
      } else {
        toast.error('Failed to fetch data');
      }
    }
    if(!loading) {
      fetchData();
    }
    
  }, [])
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100">
      <header className="text-center py-16 md:py-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-indigo-300">Leaderboard</h2>
      </header>
      <div className="absolute left-4 top-4 flex gap-4 items-center">
        <div className="text-center font-bold bg-gray-800 rounded-lg py-2 px-6 shadow-lg">
          { user.name }
        </div>
        <button onClick={() => navigate("/admin")} className="bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-lg py-2 px-6 shadow-md transition-all duration-300">
          Dashboard
        </button>
      </div>
    

      <div className='min-h-[700px] max-w-6xl mx-auto bg-gray-800 rounded-2xl shadow-lg'>
        <div className='py-4 px-10 w-full flex items-center justify-between text-lg font-semibold bg-gradient-to-r from-gray-700 to-gray-800 rounded-t-2xl'>
          <h3 className="text-indigo-300">Rank</h3>
          <h3 className="text-indigo-300">Name</h3>
          <h3 className="text-indigo-300">Score</h3>
        </div>
        {leaderboard.map((response, index) => (
          <LeaderBoardComponent
            key={index}
            rank={index + 1}
            score={response.score}
            name={response.user.name ?? "No name available"}
            phone={response.user.phone ?? "No phone number"}
            email={response.user.email ?? "No email"}
            userClass={response.user.classes ?? "No classes mentioned"}
            school={response.user.school ?? "No school name"}
            district={response.user.district ?? "No district name"}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
