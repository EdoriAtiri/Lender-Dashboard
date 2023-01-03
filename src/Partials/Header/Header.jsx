import React from 'react'
import style from './Header.module.scss'
import logo from '../../assets/Images/SVG/LendsqrLogo.svg'
import searchIcon from '../../assets/Images/SVG/Icons/SearchIcon.svg'

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
    </header>
  )
}

export default Header
