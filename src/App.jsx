import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import style from './App.module.scss'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'

function App() {
  return (
    <Router>
      <div className={style.app}>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
