import React from 'react'
import style from './Filter.module.scss'

function Filter() {
  return (
    <div className={style.container}>
      <div className={style.filter__method}>
        <label htmlFor="organization">Organization</label>
        <input id="organization" type="text" />
      </div>
      <div className={style.filter__method}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div className={style.filter__method}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>
      <div className={style.filter__method}>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" />
      </div>
      <div className={style.filter__method}>
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" type="number" />
      </div>
      <div className={style.filter__method}>
        <label htmlFor="status">Status</label>
        <select name="" id="status"></select>
      </div>

      <div className={style.filter__actions}>
        <button type="button">Reset</button>
        <button type="button">Filter</button>
      </div>
    </div>
  )
}

export default Filter
