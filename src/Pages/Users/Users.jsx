import React from 'react'
import style from './Users.module.scss'
import UserStats from '../../Components/UserStats/UserStats'
import UserCount from '../../assets/Images/SVG/UserStats/UserCount.svg'
import ActiveUsers from '../../assets/Images/SVG/UserStats/ActiveUsers.svg'
import UserLoans from '../../assets/Images/SVG/UserStats/UserLoans.svg'
import UserSavings from '../../assets/Images/SVG/UserStats/UserSavings.svg'

function Users() {
  return (
    <div className={style.container}>
      <h1>Users</h1>

      <section className={style.stats} aria-label="User Stats">
        <UserStats icon={UserCount} stat={'Users'} value={'2,453'} />
        <UserStats icon={ActiveUsers} stat={'Active Users'} value={'2,453'} />
        <UserStats
          icon={UserLoans}
          stat={'Users with loans'}
          value={'12,453'}
        />
        <UserStats
          icon={UserSavings}
          stat={'Users with savings'}
          value={'102,453'}
        />
      </section>
    </div>
  )
}

export default Users
