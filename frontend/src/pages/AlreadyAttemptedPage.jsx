import React from 'react';
import { Link } from 'react-router-dom';

const AlreadyAttemptedPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex justify-center items-center">
      <div className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg">
        <img
          src="/enquire.png"
          alt="Logo"
          className="w-32 h-32 mx-auto object-cover mb-8"
        />
        <h1 className="text-white font-bold text-4xl text-center mb-4">Quiz Attempted</h1>
        <h3 className="text-gray-400 text-center font-medium text-lg mb-8">
          It seems you have already attempted the quiz.
        </h3>
        <p className="text-gray-300 text-center mb-8">
          Thank you for your participation! You can explore more quizzes or check your previous results.
        </p>
        <div className="flex flex-col gap-y-4">
          
          <Link
            to="/"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg text-center transition duration-300 ease-in-out"
          >
            Exit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlreadyAttemptedPage;
