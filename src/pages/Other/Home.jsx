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
    </div>
  );
}
