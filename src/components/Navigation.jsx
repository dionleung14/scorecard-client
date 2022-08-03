import React from 'react'
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      Navigation
    <div>
      <Link to="/">Home</Link>
      <Link to="/game-lookup">Search game</Link>
      <Link to="/pbp">PBP</Link>
    </div>

    </div>
  )
}
