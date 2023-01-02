import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import style from './App.module.scss'
import Login from './Pages/Login'

function App() {
  return (
    <Router>
      <div className={style.app}>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
