import React from 'react'
import { Outlet } from 'react-router-dom'
import style from './Dashboard.module.scss'
import Header from '../../Partials/Header/Header'
import SideBar from '../../Partials/SideBar/SideBar'

function Dashboard() {
  return (
    <div className={style.container}>
      <Header />
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Dashboard
