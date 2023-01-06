import React from 'react'
import { Link } from 'react-router-dom'
import style from './SideBar.module.scss'
import AuditLogs from '../../assets/Images/SVG/Sidebar/AuditLogs.svg'
import Briefcase from '../../assets/Images/SVG/Sidebar/Briefcase.svg'
import ChevronDown from '../../assets/Images/SVG/Sidebar/ChevronDown.svg'
import Dashboard from '../../assets/Images/SVG/Sidebar/Dashboard.svg'
import DecisionModels from '../../assets/Images/SVG/Sidebar/DecisionModels.svg'
import Fees from '../../assets/Images/SVG/Sidebar/Fees.svg'
import FeesCharges from '../../assets/Images/SVG/Sidebar/FeesCharges.svg'
import Guarantors from '../../assets/Images/SVG/Sidebar/Guarantors.svg'
import Karma from '../../assets/Images/SVG/Sidebar/Karma.svg'
import LoanRequests from '../../assets/Images/SVG/Sidebar/LoanRequests.svg'
import Loans from '../../assets/Images/SVG/Sidebar/Loans.svg'
import Preferences from '../../assets/Images/SVG/Sidebar/Preferences.svg'
import Reports from '../../assets/Images/SVG/Sidebar/Reports.svg'
import Savings from '../../assets/Images/SVG/Sidebar/Savings.svg'
import SavingsProducts from '../../assets/Images/SVG/Sidebar/SavingsProducts.svg'
import ServiceAccount from '../../assets/Images/SVG/Sidebar/ServiceAccount.svg'
import Services from '../../assets/Images/SVG/Sidebar/Services.svg'
import Settlements from '../../assets/Images/SVG/Sidebar/Settlements.svg'
import Transactions from '../../assets/Images/SVG/Sidebar/Transactions.svg'
import Users from '../../assets/Images/SVG/Sidebar/Users.svg'
import Whitelist from '../../assets/Images/SVG/Sidebar/Whitelist.svg'

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
            <Link className={style.link}>
              <img src={Users} alt="Users" />
              <span>Users</span>
            </Link>
          </li>
          <li className={style.link}>
            <img src={Guarantors} alt="Guarantors" />
            <span>Guarantors</span>
          </li>
          <li className={style.link}>
            <img src={Loans} alt="Loans" />
            <span>Loans</span>
          </li>
          <li className={style.link}>
            <img src={DecisionModels} alt="Decision Models" />
            <span>Decision Models</span>
          </li>
          <li className={style.link}>
            <img src={Savings} alt="Savings" />
            <span>Savings</span>
          </li>
          <li className={style.link}>
            <img src={LoanRequests} alt="Loan Requests" />
            <span>Loan Requests</span>
          </li>
          <li className={style.link}>
            <img src={Whitelist} alt="Whitelist" />
            <span>Whitelist</span>
          </li>
          <li className={style.link}>
            <img src={Karma} alt="Karma" />
            <span>Karma</span>
          </li>
        </ul>
      </div>

      <div className={style.subheading}>
        <h2>Businesses</h2>

        <ul>
          <li className={style.link}>
            <img src={Briefcase} alt="Organization" />
            <span>Organization</span>
          </li>
          <li className={style.link}>
            <img src={LoanRequests} alt="Loan Products" />
            <span>Loan Products</span>
          </li>
          <li className={style.link}>
            <img src={SavingsProducts} alt="Savings Products" />
            <span>Savings Products</span>
          </li>
          <li className={style.link}>
            <img src={FeesCharges} alt="Fees and Charges" />
            <span>Fees and Charges</span>
          </li>
          <li className={style.link}>
            <img src={Transactions} alt="Transactions" />
            <span>Transactions</span>
          </li>
          <li className={style.link}>
            <img src={Services} alt="Services" />
            <span>Services</span>
          </li>
          <li className={style.link}>
            <img src={ServiceAccount} alt="Service Account" />
            <span>Service Account</span>
          </li>
          <li className={style.link}>
            <img src={Settlements} alt="Settlements" />
            <span>Settlements</span>
          </li>
          <li className={style.link}>
            <img src={Reports} alt="Reports" />
            <span>Reports</span>
          </li>
        </ul>

        <div className={style.subheading}>
          <h2>Settings</h2>

          <ul>
            <li className={style.link}>
              <img src={Preferences} alt="Preferences" />
              <span>Preferences</span>
            </li>
            <li className={style.link}>
              <img src={Fees} alt="Fees and Pricing" />
              <span>Fees and Pricing</span>
            </li>
            <li className={style.link}>
              <img src={AuditLogs} alt="Audit Logs" />
              <span>Audit Logs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
