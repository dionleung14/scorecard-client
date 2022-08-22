import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSingleGameBoxscore } from "../../routes/sportradar";
import "./game.css";
import teams from '../../data/teams'

export default function Game(props) {
  const [score, setScore] = useState(null);
  const { game } = props;
  const date = game.scheduled.split("").slice(0, 10).join("");

  const displayDate = dateStr => {
    let year = dateStr.split("").slice(0, 4).join("");
    let month = dateStr.split("").slice(5, 7).join("");
    let day = dateStr.split("").slice(8, 10).join("");
    return `${month}/${day}/${year}`;
  };

  const getLogo = (teamAbbr, homeOrAway) => {
    let teamObj;
    if (homeOrAway === "home") {
      teamObj = teams.find(team => {
        return game.home.abbr === team.abbr
      })
    } else if (homeOrAway === "away") {
      teamObj = teams.find(team => {
        return game.away.abbr === team.abbr
      })
    } else {
      teamObj = null;
    }
    if (teamObj) {
      return teamObj.insignia
    }
  };
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
      <p className="date">{displayDate(date)}</p>
      {game.away.colors && game.home.colors ? (
        <div className="team-boxscore">
          <div
            style={{
              color: "white",
              backgroundColor: `#${game.away.colors.primary}`,
            }}>
            <img className="logo" src={getLogo(game.away.abbr, "away")}/>
            {game.away.abbr} {score ? score.away : null}
          </div>
          <div
            style={{
              color: "white",
              backgroundColor: `#${game.home.colors.primary}`,
            }}>
              <img className="logo" src={getLogo(game.home.abbr, "home")}/>
            {game.home.abbr}
            {score ? score.home : null}
          </div>
        </div>
      ) : (
        <div>
          <p>
            {game.away.abbr} {score ? score.away : null}
          </p>
          <p>
            {game.home.abbr}
            {score ? score.home : null}
          </p>
        </div>
      )}
      <button className="game-info">
        <Link to={`/game-info-${game.id}`}>Game info</Link>
      </button>
    </div>
  );
}
