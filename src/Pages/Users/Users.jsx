import React, { useEffect, useState } from 'react'
import style from './Users.module.scss'
import UserStats from '../../Components/UserStats/UserStats'
import UserCount from '../../assets/Images/SVG/UserStats/UserCount.svg'
import ActiveUsers from '../../assets/Images/SVG/UserStats/ActiveUsers.svg'
import UserLoans from '../../assets/Images/SVG/UserStats/UserLoans.svg'
import UserSavings from '../../assets/Images/SVG/UserStats/UserSavings.svg'
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

      <section className={style.user__table} aria-label="Users data table">
        <table className={style.table}>
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

          <tbody className={style.table__item_container}>
            <tr className={style.table__item}>
              <td className={style.data__organization}>Lendsqr</td>
              <td className={style.data__username}>Adedeji</td>
              <td className={style.data__email}>adedeji@lendsqr.com</td>
              <td className={style.data__phone}>08078903721</td>
              <td className={style.data__date}>May 15, 2020 10:00 AM</td>
              <td className={style.data__status}>Inactive</td>
              <button>
                <img src={Menu} alt="menu " />
              </button>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Users
