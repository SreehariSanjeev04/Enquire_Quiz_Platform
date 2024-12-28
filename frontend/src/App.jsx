import { useState } from 'react'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import QuizPage from './pages/QuizPage'
import AdminPage from './pages/AdminPage'
import LoginPage from './pages/LoginPage'
import LeaderBoard from './pages/LeaderBoard'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </Router>
  )
}

export default App
