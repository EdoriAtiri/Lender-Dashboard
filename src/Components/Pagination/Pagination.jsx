import React from 'react'
import style from './Pagination.module.scss'

function Pagination({ usersPerPage, totalUsers }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className={style.nav}>
      <ul className={style.pagination}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="!#">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
{
}

export default Pagination
