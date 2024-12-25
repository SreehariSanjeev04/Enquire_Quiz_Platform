import { useState } from 'react'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import QuizPage from './pages/QuizPage'
import AdminPage from './pages/AdminPage'
import LoginPage from './pages/LoginPage'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
