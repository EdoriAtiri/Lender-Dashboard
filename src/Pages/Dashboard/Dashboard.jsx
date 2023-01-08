import React from 'react'
import { Outlet } from 'react-router-dom'
import style from './Dashboard.module.scss'
import SideBar from '../../Partials/SideBar/SideBar'

function Dashboard() {
  return (
    <div className={style.container}>
      <SideBar />
      <div className={style.outlet}>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
