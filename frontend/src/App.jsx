import { useState } from 'react'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import QuizPage from './pages/QuizPage'
import AdminPage from './pages/AdminPage'
import LoginPage from './pages/LoginPage'
import LeaderBoard from './pages/LeaderBoard'
import { Toaster } from 'sonner'
import { ProtectedRoutes } from './service/ProtectedRoutes'
import AlreadyAttemptedPage from './pages/AlreadyAttemptedPage'
function App() {

  return (
    <Router>
      <Toaster position="top-right" richColors/>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/quiz" element={<ProtectedRoutes allowedUsers={['User', 'Admin']}><QuizPage /></ProtectedRoutes>} />
        <Route path="/admin" element={<ProtectedRoutes allowedUsers={["Admin", "User"]}><AdminPage /></ProtectedRoutes>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/leaderboard" element={<ProtectedRoutes allowedUsers={["Admin"]}>{<LeaderBoard />}</ProtectedRoutes>} />
        <Route path="/already-attempted" element={<ProtectedRoutes allowedUsers={["User"]}><AlreadyAttemptedPage /></ProtectedRoutes>} />
      </Routes>
    </Router>
  )
}

export default App
