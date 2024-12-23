import React from 'react';

function QuizPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <header className="text-center py-8">
        <h2 className="text-white text-3xl font-bold">Quiz Platform</h2>
      </header>

      <div className="flex flex-col items-center">
        <div className="text-center text-white bg-gray-800 rounded-lg py-2 px-6 shadow-lg">
          <h1 className="text-4xl font-extrabold">00:59</h1>
        </div>

        <div className="grid grid-cols-3 gap-8 w-full max-w-5xl mt-12">
          <div className="col-span-2 p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-white text-2xl font-semibold mb-4">Question 1</h3>
            <p className="text-gray-300 text-lg leading-7">
              The Great Wall of China is one of the most remarkable architectural feats in history. 
              It stretches across thousands of kilometers, with construction spanning several centuries. 
              Initially built to protect the northern borders of China from invasions, the wall underwent 
              multiple phases of construction and reconstruction. Which of the following statements about 
              the Great Wall of China is true?
            </p>

            <div className="mt-8 space-y-4">
              <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-lg scale-[105%] transition-all duration-300">
                The Great Wall is visible from space.
              </button>
              <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300">
                It was built by multiple dynasties over centuries.
              </button>
              <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300">
                It is located entirely in modern-day Beijing.
              </button>
              <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300">
                It has never been restored after the Ming dynasty.
              </button>
            </div>
          </div>

          <div className="col-span-1 bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
            <h4 className="text-white text-lg font-semibold mb-4">Progress</h4>
            <ul className="text-gray-300 space-y-2">
              <li>Question 1 of 10</li>
              <li>Answered: 0</li>
              <li>Remaining: 9</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
