import React, { useState } from 'react'
import style from './Header.module.scss'
import logo from '../../assets/Images/SVG/LendsqrLogo.svg'
import searchIcon from '../../assets/Images/SVG/SearchIcon.svg'
import Bell from '../../assets/Images/SVG/Bell.svg'
import Dropdown from '../../assets/Images/SVG/Dropdown.svg'
import WhiteBackBtn from '../../assets/Images/SVG/WhiteBackBtn.svg'
import user from '../../assets/Images/PNG/User.png'

function Header() {
  const [isMobileSearchEnabled, setIsMobileSearchEnabled] = useState(false)

  return (
    <header className={style.container}>
      <img
        className={`${style.logo} ${isMobileSearchEnabled ? style.hide : ''}`}
        src={logo}
        alt="Lendsqr Logo"
      />

      <button
        onClick={() => {
          setIsMobileSearchEnabled(false)
        }}
        className={`${style.back__btn} ${
          isMobileSearchEnabled ? '' : style.hide
        }`}
      >
        <img src={WhiteBackBtn} alt="back button" />
      </button>

      <div
        className={`${style.search} ${isMobileSearchEnabled ? '' : style.hide}`}
      >
        <input type="text" placeholder="Search for anything" />
        <button className={style.search__desktop} type="button">
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </div>

      <button
        className={`${style.search__mobile} ${
          isMobileSearchEnabled ? style.hide : ''
        }`}
        onClick={() => {
          setIsMobileSearchEnabled(true)
        }}
        type="button"
      >
        <img src={searchIcon} alt="Search Icon" />
      </button>

      <div
        className={`${style.header__end} ${
          isMobileSearchEnabled ? style.hide : ''
        }`}
      >
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
