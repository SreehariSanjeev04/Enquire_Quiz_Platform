import React from 'react'
import LeaderBoardComponent from '../components/LeaderBoardComponent'
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
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <header className="text-center py-20 md:py-8">
        <h2 className="text-3xl md:text-4xl font-semibold">Leaderboard</h2>
        </header>

        <div className="absolute left-4 top-4 flex gap-4 items-center">
        <div className="text-center font-bold bg-gray-800 rounded-lg py-2 px-6 shadow-lg">
          Admin Name
        </div>
        <button onClick={() => navigate("/admin")} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg py-2 px-6 shadow-md transition-all duration-300">
          Dashboard
        </button>
      </div>
      <div className='min-h-[700px] max-w-7xl mx-auto bg-slate-800 rounded-lg'>
        <div className='py-3 px-8 w-full h-10 flex items-center justify-between text-xl font-semibold'>
            <h3>Rank</h3>
            <h3>Name</h3>
            <h3>Score</h3>
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
  )
}

export default LeaderBoard
