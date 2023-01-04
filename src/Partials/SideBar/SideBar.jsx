import React from 'react'
import { Link } from 'react-router-dom'
import style from './SideBar.module.scss'
import Briefcase from '../../assets/Images/SVG/Sidebar/Briefcase.svg'
import ChevronDown from '../../assets/Images/SVG/Sidebar/ChevronDown.svg'
import Dashboard from '../../assets/Images/SVG/Sidebar/Dashboard.svg'

function SideBar() {
  return (
    <div className={style.container}>
      <button className={style.switch_organization}>
        <img src={Briefcase} alt="briefcase" aria-hidden="true" />
        <span className={style.switch}>Switch Organization</span>
        <img src={ChevronDown} alt="dropdown" aria-hidden="true" />
      </button>

      <Link className={style.link}>
        <img src={Dashboard} alt="Dashboard Icon" />
        <span>Dashboard</span>
      </Link>
    </div>
  )
}

export default SideBar
