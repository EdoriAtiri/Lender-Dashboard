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

      <div className={style.subheading}>
        <h2>Customers</h2>

        <ul>
          <li>
            <Link className={style.link}>Users</Link>
          </li>
          <li className={style.link}>Guarantors</li>
          <li className={style.link}>Loans</li>
          <li className={style.link}>Decision Models</li>
          <li className={style.link}>Savings</li>
          <li className={style.link}>Loan Requests</li>
          <li className={style.link}>Whitelist</li>
          <li className={style.link}>Karma</li>
        </ul>
      </div>

      <div className={style.subheading}>
        <h2>Businesses</h2>

        <ul>
          <li className={style.link}>Organization</li>
          <li className={style.link}>Loan Products</li>
          <li className={style.link}>Savings Product</li>
          <li className={style.link}>Fees and Charges</li>
          <li className={style.link}>Transactions</li>
          <li className={style.link}>Services</li>
          <li className={style.link}>Service Account</li>
          <li className={style.link}>Settlement</li>
          <li className={style.link}>Reports</li>
        </ul>

        <div className={style.subheading}>
          <h2>Settings</h2>

          <ul>
            <li className={style.link}>Preferences</li>
            <li className={style.link}>Fees and Pricing</li>
            <li className={style.link}>Audit Logs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
