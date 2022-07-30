import React, { useState } from "react";
export default function Game(props) {
  const {game} = props
  const date = game.scheduled.split("").slice(0,10).join("")
  return (
    <div>
      {date}: {game.away.abbr} @ {game.home.abbr}
    </div>
  );
}
