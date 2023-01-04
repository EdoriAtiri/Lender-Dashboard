import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import style from './App.module.scss'
import Login from './Pages/Login/Login'
import Dashboard from './Pages/Dashboard/Dashboard'
import Users from './Pages/Users/Users'
import Header from './Partials/Header/Header'

function App() {
  return (
    <Router>
      <div className={style.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Users />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
