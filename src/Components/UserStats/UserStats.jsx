import React from 'react'
import style from './UserStats.module.scss'

function UserStats({ icon, stat, value }) {
  return (
    <div className={style.container}>
      <figure>
        <img src={icon} alt={stat} />
      </figure>
      <table>
        <tbody>
          <th scope="col">{stat}</th>
          <td>{value}</td>
        </tbody>
      </table>
    </div>
  )
}

export default UserStats
