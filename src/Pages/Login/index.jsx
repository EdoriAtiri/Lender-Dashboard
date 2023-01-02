import React, { useState } from 'react'
import style from './index.module.scss'
import logo from '../../assets/Images/SVG/LendsqrLogo.svg'
import BgImg from '../../assets/Images/SVG/LoginBg.svg'
function Login() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  const handleLogin = () => {
    console.log('object')
  }

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
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <div className={style.pass__container}>
            <input
              className={style.password}
              type={passwordIsVisible ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Password"
              required
              max={14}
            />
            <button
              onClick={() => {
                setPasswordIsVisible(!passwordIsVisible)
              }}
              type="button"
              className={style.show__pass}
            >
              {passwordIsVisible ? 'hide' : 'show'}
            </button>
          </div>

          <button type="button" className={style.forgot}>
            Forgot password?
          </button>
          <button type="button" onClick={handleLogin} className={style.submit}>
            LOG IN
          </button>
        </form>
      </main>
    </div>
  )
}

export default Login
