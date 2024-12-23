import { useState } from 'react'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import QuizPage from './pages/QuizPage'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router>
  )
}

export default App
