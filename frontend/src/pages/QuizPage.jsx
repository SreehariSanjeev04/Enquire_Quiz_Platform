import React, { useEffect, useState } from 'react';
import Timer from '../components/Timer';

function QuizPage() {
  const storedAnswers = JSON.parse(localStorage.getItem('EnquireStoredAnswers')) || [];
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(storedAnswers);

  useEffect(() => {
    const fetchQuestions = () => {
      fetch('/data/general_questions.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((response) => setQuestions(response.questions.sort(() => Math.random() - 0.5)));
    };
    fetchQuestions();
  }, []);

  const handleAnswerChange = (e, questionIndex) => {
    const newValue = e.target.value;
    const updatedAnswers = { ...answers };
    if (newValue === '' || newValue === null) {
      delete updatedAnswers[questions[questionIndex]];
    } else {
      updatedAnswers[questions[questionIndex]] = newValue;
    }
    localStorage.setItem('EnquireStoredAnswers', JSON.stringify(updatedAnswers));
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const progressWidth = (Object.keys(answers).length * 100) / questions.length;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="text-center text-white font-bold bg-gray-800 rounded-lg py-2 px-6 shadow lg inline-block absolute left-4 top-4">
        UserName
      </div>
      <header className="text-center py-16 md:py-8">
        <h2 className="text-white text-3xl font-bold">Quiz Platform</h2>
      </header>

      <div className="flex flex-col items-center">
        <div className="text-center text-white bg-gray-800 rounded-lg py-2 px-6 shadow-lg">
          <Timer initalSeconds={3600} />
        </div>

        <div className="grid grid-cols-1 p-4 md:p-0 md:grid-cols-3 md:gap-8 gap-y-8 w-full max-w-5xl mt-12">
          <div className="col-span-2 p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-white text-2xl font-semibold mb-4">Question {questionIndex + 1}</h3>
            <p className="text-gray-300 text-lg leading-7">{questions[questionIndex]}</p>

            <div className="mt-8 space-y-4">
              <input
                value={answers[questions[questionIndex]] || ''}
                onChange={(e) => handleAnswerChange(e, questionIndex)}
                type="text"
                placeholder="Enter your answer here"
                className="h-full p-2 w-full font-semibold bg-transparent border-[2px] border-zinc-400 rounded-lg text-white focus:outline-none focus:border-white"
              />
            </div>
            <div className="flex gap-2 mx-auto justify-center mt-10">
              <button
                onClick={handlePreviousQuestion}
                className="bg-gradient-to-r w-28 from-cyan-500 to-indigo-500 text-white font-bold rounded-lg py-2 px-6 shadow-md transition-all duration-300"
              >
                Previous
              </button>
              {
                questionIndex !== questions.length - 1 ? <button
                onClick={handleNextQuestion}
                className="bg-gradient-to-r w-28 from-indigo-500 to-cyan-500 text-white font-bold rounded-lg py-2 px-6 shadow-md transition-all duration-300"
              >
                Next
              </button> : null
              }
              
            </div>
          </div>

          <div className="col-span-1 bg-gray-800 flex flex-col justify-between rounded-lg shadow-lg p-6 border border-gray-700">
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Progress</h4>
              <div
                    style={{ width: `${progressWidth}%` }}
                    className={`h-8 mb-4 rounded-lg shadow-lg bg-green-500 transition-all duration-300`}
                  ></div>
              <ul className="text-gray-300 space-y-2">
                <li>Question {questionIndex + 1} of {questions.length}</li>
                <li>Answered: {Object.keys(answers).length}</li>
                <li>Remaining: {questions.length - Object.keys(answers).length}</li>
              </ul>
            </div>
            {
              questionIndex === questions.length - 1 ? <button
              onClick={handleNextQuestion}
              className="bg-gradient-to-r w-28 from-green-700 to-green-500 hover:from-green-600 hover:to-green-400 text-white font-bold rounded-lg py-2 px-6 shadow-md transition-all duration-300"
            >
              Submit
            </button> : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
