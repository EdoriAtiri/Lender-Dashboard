import React from 'react'
import style from './UserStats.module.scss'
import UserCount from '../../assets/Images/SVG/UserStats/UserCount.svg'
import ActiveUsers from '../../assets/Images/SVG/UserStats/ActiveUsers.svg'
import UserLoans from '../../assets/Images/SVG/UserStats/UserLoans.svg'
import UserSavings from '../../assets/Images/SVG/UserStats/UserSavings.svg'

function UserStats({ totalUsers, totalActiveUsers, usersLoans, usersSavings }) {
  return (
    <div className={style.container}>
      <div className={style.stats}>
        <figure>
          <img src={UserCount} alt="total users" />
        </figure>
        <table>
          <thead>
            <tr>
              <th scope="col">Users</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{totalUsers}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={style.stats}>
        <figure>
          <img src={ActiveUsers} alt="active users" />
        </figure>
        <table>
          <thead>
            <tr>
              <th scope="col">Active Users</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{totalActiveUsers}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={style.stats}>
        <figure>
          <img src={UserLoans} alt="users with loans" />
        </figure>
        <table>
          <thead>
            <tr>
              <th scope="col">users with loans</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{usersLoans}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={style.stats}>
        <figure>
          <img src={UserSavings} alt="users with savings" />
        </figure>
        <table>
          <thead>
            <tr>
              <th scope="col">Users with Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{usersSavings}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserStats
