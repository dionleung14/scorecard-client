// Styling component for games
import React from 'react'
import "./gamesContainer.css";

export default function GamesContainer(props) {
  return (
    <div className='games-container'>{props.children}</div>
  )
}
