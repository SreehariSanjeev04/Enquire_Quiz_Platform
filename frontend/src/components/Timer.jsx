import React, { useEffect, useState } from 'react'

function Timer({ initalSeconds }) {
  const savedSeconds = parseInt(JSON.parse(localStorage.getItem('EnquireQuizSeconds'))) || 0;
  const [seconds, setSeconds] = useState(savedSeconds ?? initalSeconds);
  const [isTimeLow, setIsTimeLow] = useState(false);

  useEffect(() => {
    if(seconds <= 0) {
        localStorage.removeItem('EnquireQuizSeconds');
        return;
    }

    const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    localStorage.setItem('EnquireQuizSeconds', JSON.stringify(seconds));
    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = () => {
    const hours = Math.floor(seconds / 3600);
    const calcMinutes = Math.floor(seconds / 60);
    const minutes = calcMinutes === 60 ? 0 : calcMinutes;
    const remainingSeconds = seconds % 60;

    if(!isTimeLow && hours <= 0 && minutes <= 15) {
        setIsTimeLow(true);
    }
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }
  return (
    <h1 className={`text-4xl font-extrabold ${isTimeLow ? 'text-red-400' : 'text-white'}`}>{formatTime()}</h1>
  )
}

export default Timer
