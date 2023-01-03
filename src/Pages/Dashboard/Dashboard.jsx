import React from 'react'
import style from './Dashboard.module.scss'
import Header from '../../Partials/Header/Header'
import SideBar from '../../Partials/SideBar/SideBar'

function Dashboard() {
  return (
    <div className={style.container}>
      <Header />
    </div>
  )
}

export default Dashboard
