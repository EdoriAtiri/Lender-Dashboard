import React from 'react'
import style from './UserStats.module.scss'

function UserStats() {
  return (
    <div className={style.container}>
      <table>
        <tbody>
          <th scope="col">Users</th>
          <td>2453</td>
        </tbody>
      </table>
    </div>
  )
}

export default UserStats
