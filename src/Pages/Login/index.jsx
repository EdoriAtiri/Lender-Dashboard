import React from 'react'
import style from './index.module.scss'
import logo from '../../assets/Images/SVG/LendsqrLogo.svg'
import BgImg from '../../assets/Images/SVG/LoginBg.svg'
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
        <span className={style.desc}>Enter details to login.</span>
        <form>
          <input type="email" name="email" id="email" placeholder="Email" />
          <div className={style.pass__container}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button className={style.show__pass}>Show</button>
          </div>

          <span>Forgot password?</span>
          <button className={style.submit}>LOG IN</button>
        </form>
      </main>
    </div>
  )
}

export default Login
