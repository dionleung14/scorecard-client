import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { getSingleGameBoxscore } from "../routes/sportradar";

export default function Game(props) {
  const [ score, setScore ] = useState(null)
  const {game} = props
  const date = game.scheduled.split("").slice(0,10).join("")
  // useEffect(() => {
  //   const loadScores = async () => {
  //     let schedule = await getSingleGameBoxscore(game.id)
  //     // console.log(schedule.score)
  //     setScore(schedule.score);
  //   };
  //   loadScores();
  // }, []);
  return (
    <div>
      {date}: {game.away.abbr} {score ? score.away : null} @ {game.home.abbr} {score ? score.home : null}
      <Link to={`/game-info-${game.id}`}>Game info</Link>
    </div>
  );
}
