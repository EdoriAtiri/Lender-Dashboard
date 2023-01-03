import React from 'react'
import style from './Header.module.scss'
import logo from '../../assets/Images/SVG/LendsqrLogo.svg'
import searchIcon from '../../assets/Images/SVG/SearchIcon.svg'
import Bell from '../../assets/Images/SVG/Bell.svg'
import Dropdown from '../../assets/Images/SVG/Dropdown.svg'
import user from '../../assets/Images/PNG/User.png'

function Header() {
  return (
    <header className={style.container}>
      <img className={style.logo} src={logo} alt="Lendsqr Logo" />

      <div className={style.search}>
        <input type="text" placeholder="Search for anything" />
        <button type="button">
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </div>

      <div className={style.header__end}>
        <a href="">Docs</a>
        <img className={style.bell} src={Bell} alt="Bell Icon" />
        <figure>
          <img src={user} alt="user" />
        </figure>

        <button type="button">
          <span>Adedeji </span> <img src={Dropdown} alt="dropdown menu" />
        </button>
      </div>
    </header>
  )
}

export default Header
