import React from 'react'
import style from './Users.module.scss'
import UserStats from '../../Components/UserStats/UserStats'

function Users() {
  return (
    <div className={style.container}>
      <h1>Users</h1>

      <section className={style.stats} aria-label="User Stats">
        <UserStats />
      </section>
    </div>
  )
}

export default Users
