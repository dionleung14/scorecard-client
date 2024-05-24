// Nav bar
import React from 'react'
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className='nav-bar'>
      <Link to="/">Home</Link>
      <Link to="/game-lookup">Search past games</Link>
      <Link to="/todays-schedule">Today's schedule</Link>
      <Link to="/about">About</Link>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="business" value="R8W2J7W4MF4XW" />
        <input type="hidden" name="no_recurring" value="1" />
        <input
          type="image"
          src="https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  )
}
