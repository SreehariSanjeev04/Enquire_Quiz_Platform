import React, { useState, useEffect } from "react";
import { toast } from 'sonner';

const CorrectionPage = ({ userId, response }) => {
  const validResponse = response || [];
  const mappedData = Object.entries(validResponse).map(([question, answer], index) => ({
    id: index + 1,
    question,
    answer,
    marks: null,
  }));

  const [responses, setResponses] = useState(mappedData);

  useEffect(() => {
    const validResponse = response && typeof response === 'object' ? response : {};
    const mappedData = Object.entries(validResponse).map(([question, answer], index) => ({
      id: index + 1,
      question,
      answer,
      marks: null,
    }));
    setResponses(mappedData);
  }, [response]);

  const handleMark = (id, mark) => {
    setResponses((prevResponses) =>
      prevResponses.map((q) => (q.id === id ? { ...q, marks: mark } : q))
    );
  };
  const totalMarks = responses.reduce((total, q) => total + (q.marks || 0), 0); 

  const updateMarks = async () => {
    const token = localStorage.getItem('enquireUserToken');
    const response = await fetch('http://localhost:3000/quiz/update-score', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
        score: totalMarks,
      }),
    });

    const result = await response.json();

    if(response.ok) {
      toast.success("Score updated successfully");
      window.location.reload();
    } else {
      toast.error("Failed to update score");
    }
  }

  return (
    <div className="col-span-1 overflow-auto md:col-span-2 bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">Response</h2>
        <div className="flex items-center gap-4">
          <button
            className="px-4 py-2 font-semibold bg-blue-900 hover:bg-blue-800 text-white rounded-md shadow-md"
            onClick={updateMarks}
          >
            Update Marks
          </button>
          <span className="px-4 font-semibold py-2 bg-green-700 text-white rounded-md shadow-md">
            Total Marks: {totalMarks}
          </span>
        </div>
      </div>

      <div className="w-full h-[90%] overflow-y-auto">
          <ul className="space-y-4">
            {responses.map((q) => (
              <li
                key={q.id}
                className="p-4 bg-gray-700 rounded-md shadow-md flex flex-col justify-between items-center"
              >
                <div className="w-full">
                  <p className="font-medium text-white">{q.question}</p>
                  <p className="text-gray-300 text-sm">Answer: {q.answer}</p>
                </div>
                <div className="w-full flex justify-end gap-2">
                  <button
                    className={`px-2 font-semibold py-1 rounded-md ${
                      q.marks === 1
                        ? "bg-green-700 text-white"
                        : "bg-gray-300 text-black hover:bg-green-600 hover:text-white"
                    }`}
                    onClick={() => handleMark(q.id, 1)}
                  >
                    Correct
                  </button>
                  <button
                    className={`px-2 py-1 font-semibold rounded-md ${
                      q.marks === 0
                        ? "bg-red-700 text-white"
                        : "bg-gray-300 text-black hover:bg-red-600 hover:text-white"
                    }`}
                    onClick={() => handleMark(q.id, 0)}
                  >
                    Wrong
                  </button>
                  <button
                    className={`px-2 py-1 font-semibold rounded-md ${
                      q.marks === 0.5
                        ? "bg-black text-white"
                        : "bg-gray-300 text-black hover:bg-gray-900 hover:text-white"
                    }`}
                    onClick={() => handleMark(q.id, 0.5)}
                  >
                    Partial
                  </button>
                </div>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default CorrectionPage;
