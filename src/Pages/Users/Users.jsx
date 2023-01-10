import React, { useEffect, useState } from 'react'
import style from './Users.module.scss'
import UserStats from '../../Components/UserStats/UserStats'
import Pagination from '../../Components/Pagination/Pagination'
import FilterIcon from '../../assets/Images/SVG/Filter.svg'
import Menu from '../../assets/Images/SVG/ThreeDotMenu.svg'

function Users() {
  const [users, setUsers] = useState([])
  const [stats, setStats] = useState({
    usersCount: '',
    activeUsers: '',
    usersWithLoans: '',
    usersWithSavings: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(9)

  function processUsersStats() {
    const userslength = users.length
    const activeUsers = users.filter((user) => {
      const lastActiveYear = new Date(user.lastActiveDate).getFullYear()
      const currentYear = new Date().getFullYear()

      return lastActiveYear >= currentYear
    })
    console.log(activeUsers)
  }

  useEffect(() => {
    fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        console.log(data)
        setUsers(data)
      })
      .catch((error) => {
        console.error('Error fetching users data', error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const usersCount = users.length
    const activeUsers = users.filter((user) => {
      const lastActiveYear = new Date(user.lastActiveDate).getFullYear()
      const currentYear = new Date().getFullYear()
      return lastActiveYear >= currentYear
    }).length
    const usersWithLoans = users.filter(
      (user) => parseInt(user.education.loanRepayment) > 0
    ).length
    const usersWithSavings = users.filter(
      (user) => parseInt(user.accountBalance) > 0
    ).length

    setStats({
      usersCount,
      activeUsers,
      usersWithLoans,
      usersWithSavings,
    })
  }, [users])

  // Get current posts
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

  return (
    <div className={style.container}>
      <h1>Users</h1>

      <section className={style.stats} aria-label="User Stats">
        <UserStats
          totalUsers={stats.usersCount}
          totalActiveUsers={stats.activeUsers}
          usersLoans={stats.usersWithLoans}
          usersSavings={stats.usersWithSavings}
        />
      </section>

      <section className={style.user__table} aria-label="Users data table">
        <table className={style.table}>
          <thead>
            <tr className={style.table__header}>
              <th className={style.org}>
                <button>
                  Organization{' '}
                  <img src={FilterIcon} alt="filter by Organization" />
                </button>
              </th>
              <th className={style.username}>
                <button>
                  username
                  <img src={FilterIcon} alt="filter by username" />
                </button>
              </th>
              <th className={style.email}>
                <button>
                  email
                  <img src={FilterIcon} alt="filter by email" />
                </button>
              </th>
              <th className={style.phone}>
                <button>
                  phone number
                  <img src={FilterIcon} alt="filter by phone number" />
                </button>
              </th>
              <th className={style.date}>
                <button>
                  date joined
                  <img src={FilterIcon} alt="filter by date joined" />
                </button>
              </th>
              <th className={style.status}>
                <button>
                  status
                  <img src={FilterIcon} alt="filter by status" />
                </button>
              </th>
            </tr>
          </thead>

          <tbody className={style.table__item_container}>
            {users &&
              currentUsers.map((user) => (
                <tr key={user.id} className={style.table__item}>
                  <td className={style.data__organization}>{user.orgName}</td>
                  <td className={style.data__username}>{user.userName}</td>
                  <td className={style.data__email}>
                    {user.email.length > 20
                      ? user.email.slice(0, 20) + '...'
                      : user.email}
                  </td>
                  <td className={style.data__phone}>{user.phoneNumber}</td>
                  <td className={style.data__date}>May 15, 2020 10:00 AM</td>
                  <td className={style.data__status}>Inactive</td>
                  <button>
                    <img src={Menu} alt="menu " />
                  </button>
                </tr>
              ))}
          </tbody>
        </table>
      </section>

      <Pagination usersPerPage={usersPerPage} totalUsers={stats.usersCount} />
    </div>
  )
}

export default Users
