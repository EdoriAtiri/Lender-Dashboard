import React from 'react'
import style from './index.module.scss'
import logo from '../../assets/SVG/LendsqrLogo.svg'
import BgImg from '../../assets/SVG/LoginBg.svg'
function Login() {
  return (
    <div className={style.login}>
      <header>
        <img className={style.logo} src={logo} alt="lendsqr Logo" />
        <figure className={style.art}>
          <img src={BgImg} alt="" aria-hidden="true" />
        </figure>
      </header>

      <main className={style.main}>
        <h1>Welcome!</h1>
        <span>Enter details to login.</span>
        <form>
          <input type="email" name="email" id="email" />
          <input type="password" name="password" id="password" />
          <span>Forgot password?</span>
          <button>LOG IN</button>
        </form>
      </main>
    </div>
  )
}

export default Login
