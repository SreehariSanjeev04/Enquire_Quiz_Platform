import React from 'react'
import { useState } from 'react'
import { IoIosClose } from "react-icons/io";
const LeaderBoardComponent = ({rank, score, name, phone, email, userClass, school, district}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePopUp = () => {
        setIsPopupOpen((prevState) => !prevState);
    }
  return (
    <>
        <div className='w-full h-20 py-4 px-8 bg-transparent flex justify-between items-center' onClick={handlePopUp}>
            {rank === 1 ? <img src="/firstRank.png" alt="" className='w-16 h-16' /> : <p className='text-3xl px-6 font-semibold'>{rank}</p>}
            <div>
                <p className='text-2xl'>{name}</p>
            </div>
            <div className='font-semibold text-3xl'>{score}</div>
            
        </div>
        <hr className='border-[1px] border-slate-500 w-[95%] mx-auto'/>
        {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className='bg-white p-4 h-80 w-96 rounded-lg shadow-lg relative'>
                <div className='mb-5 flex justify-between items-center'>
                    <h2 className='text-black font-semibold text-2xl'>Details</h2>
                    <IoIosClose className='h-10 w-10 text-black cursor-pointer' onClick={handlePopUp}/>
                </div>
                <div className='text-black text-lg font-semibold'>   
                    <p>Rank: {rank}</p>
                    <p>Score: {score}</p>
                    <p>Name: {name}</p>
                    <p>School: {school}</p>
                    <p>Phone: {phone}</p>
                    <p>Class: {userClass}</p>
                    <p>District: {district}</p>
                    <p>Email: {email}</p>
                </div>
              </div>
            </div>
          )}
    </>  
  )
}

export default LeaderBoardComponent
