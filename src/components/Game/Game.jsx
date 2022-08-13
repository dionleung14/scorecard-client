import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSingleGameBoxscore } from "../../routes/sportradar";
import "./game.css";

export default function Game(props) {
  const [score, setScore] = useState(null);
  const { game } = props;
  const date = game.scheduled.split("").slice(0, 10).join("");

  const displayDate = (dateStr) => {
    let year = dateStr.split("").slice(0,4).join("")
    let month = dateStr.split("").slice(5,7).join("")
    let day = dateStr.split("").slice(8,10).join("")
    return `${month}/${day}/${year}`
  }
  // useEffect(() => {
  //   const loadScores = async () => {
  //     let schedule = await getSingleGameBoxscore(game.id)
  //     // console.log(schedule.score)
  //     setScore(schedule.score);
  //   };
  //   loadScores();
  // }, []);
  return (
    <div className="game">
      <p>{displayDate(date)}</p>
      <div>
        <p>
          {game.away.abbr} {score ? score.away : null}
        </p>
        <p>
          {game.home.abbr}
          {score ? score.home : null}
        </p>
      </div>
      <Link to={`/game-info-${game.id}`}>Game info</Link>
    </div>
  );
}
