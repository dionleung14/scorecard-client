// The Home page. Has placeholder bits for user accounts for the time being
import React from "react";
// import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // const [user, setUser] = useState(null);

  return (
    <div>
      <h2>What would you like to do?</h2>
      <button>
        <Link to="/game-lookup">Get a scorecard for a past game</Link>
      </button>
      <button>
        <Link to="/todays-schedule">
          Get a scorecard for a current game (live)
        </Link>
      </button>
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
  );
}
