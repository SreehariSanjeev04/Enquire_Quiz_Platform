import React, { useState, useEffect } from "react";

const CorrectionPage = ({ selectedUser }) => {
  const [responses, setResponses] = useState([
    { id: 1, question: "What is React?", answer: "A JavaScript library", isCorrect: null },
    { id: 2, question: "What is JSX?", answer: "Syntax extension for JavaScript", isCorrect: null },
    { id: 3, question: "What is a state?", answer: "A way to manage data in React", isCorrect: null },
    { id: 4, question: "What is React?", answer: "A JavaScript library", isCorrect: null },
    { id: 5, question: "What is JSX?", answer: "Syntax extension for JavaScript", isCorrect: null },
    { id: 6, question: "What is a state?", answer: "A way to manage data in React", isCorrect: null },
  ]);

//   fetch responses according to the selectedUser

  const [questions, setQuestions] = useState([]);

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

  const handleMark = (id, isCorrect) => {
    setResponses((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, isCorrect } : q))
    );
  };

  const updateMarks = () => {
    const marks = responses.filter((q) => q.isCorrect).length;
    console.log(`Updating marks (${marks}) in the database...`);
  };

  const totalMarks = responses.filter((q) => q.isCorrect).length;

  return (
    <div className="col-span-1 md:col-span-2 bg-gray-800 rounded-lg shadow-lg p-6">

        {/* marks panel */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Response</h2>
        <div className="flex items-center gap-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
            onClick={updateMarks}
          >
            Update Marks
          </button>
          <span className="px-4 py-2 bg-green-500 text-white rounded-md shadow">
            Total Marks: {totalMarks}
          </span>
        </div>
      </div>

        {/* correction panel */}
      <div className="w-full h-screen overflow-y-auto">
        {selectedUser ? (
          <ul className="space-y-4">
            {responses.map((q, index) => (
              <li
                key={q.id}
                className="p-4 bg-white rounded-md shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold text-black">{questions[index+1]}</p>
                  <p className="text-gray-600">Answer: {q.answer}</p>
                </div>

                {/* correction buttons */}
                <div className="flex gap-2">
                  <button
                    className={`px-4 py-2 rounded-md ${
                      q.isCorrect
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-black hover:bg-green-500 hover:text-white"
                    }`}
                    onClick={() => handleMark(q.id, true)}
                  >
                    Correct
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${
                      !q.isCorrect
                        ? "bg-red-500 text-white"
                        : "bg-gray-300 text-black hover:bg-red-500 hover:text-white"
                    }`}
                    onClick={() => handleMark(q.id, false)}
                  >
                    Wrong
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-400">Select a user to view their responses.</p>
        )}
      </div>
    </div>
  );
};

export default CorrectionPage;
