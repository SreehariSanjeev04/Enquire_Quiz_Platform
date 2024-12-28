import React from 'react';
import LeaderBoardComponent from '../components/LeaderBoardComponent';
import { useNavigate } from 'react-router-dom';

const LeaderBoard = () => {
    const navigate = useNavigate();
    const leaderboardData = [
        {
          rank: 1,
          score: 95,
          name: "John Doe",
          phone: "123-456-7890",
          email: "john.doe@example.com",
          userClass: "10th Grade",
          school: "Springfield High School",
          district: "Springfield",
        },
        {
          rank: 2,
          score: 89,
          name: "Jane Smith",
          phone: "987-654-3210",
          email: "jane.smith@example.com",
          userClass: "9th Grade",
          school: "Greenwood Academy",
          district: "Greenwood",
        },
        {
          rank: 3,
          score: 85,
          name: "Alice Johnson",
          phone: "555-678-1234",
          email: "alice.johnson@example.com",
          userClass: "8th Grade",
          school: "Blue Valley School",
          district: "Blue Valley",
        },
      ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100">
      <header className="text-center py-16 md:py-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-indigo-300">Leaderboard</h2>
      </header>
      <div className="absolute left-4 top-4 flex gap-4 items-center">
        <div className="text-center font-bold bg-gray-800 rounded-lg py-2 px-6 shadow-lg">
          Admin Name
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
        {leaderboardData.map((user, index) => (
          <LeaderBoardComponent
            key={index}
            rank={user.rank}
            score={user.score}
            name={user.name}
            phone={user.phone}
            email={user.email}
            userClass={user.userClass}
            school={user.school}
            district={user.district}
          />
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
