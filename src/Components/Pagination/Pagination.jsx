import React, { useState } from 'react'
import style from './Pagination.module.scss'
import chevron from '../../assets/Images/SVG/backChevron.svg'

function Pagination({ usersPerPage, totalUsers, paginate, prev, next }) {
  const pageNumbers = []
  const [currentPage, setCurrentPage] = useState(1)
  const pagesNeeded = Math.ceil(totalUsers / usersPerPage)

  for (let i = 1; i <= pagesNeeded; i++) {
    pageNumbers.push(i)
  }

  function handlePaginate(number) {
    paginate(number)
    setCurrentPage(number)
  }

  function prevPage() {
    prev()
    setCurrentPage(currentPage - 1)
  }

  function nextPage() {
    next()
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className={style.nav}>
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className={`${style.prev} ${currentPage === 1 && style.disable}`}
      >
        <img src={chevron} alt="previous page" />
      </button>
      <div className={style.pagination}>
        {pageNumbers.map((number) => (
          <button
            className={currentPage === number ? style.current__page : ''}
            type="button"
            key={number}
            onClick={() => handlePaginate(number)}
            href=""
          >
            {number}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage === pagesNeeded}
        onClick={nextPage}
        className={`${style.next} ${
          currentPage === pagesNeeded && style.disable
        }`}
      >
        <img src={chevron} alt="next page" />
      </button>
    </div>
  )
}

export default Pagination
