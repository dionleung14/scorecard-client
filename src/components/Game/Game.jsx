// This file contains the Game element that is rendered in the Array.map for a season
// There is also a GameCurrent element/component for today's games that is very similar
import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { getSingleGameBoxscore } from "../../routes/sportradar"; // how do i get the score and display it on the preview?
import "./game.css";
import teams from "../../data/teams";

export default function Game(props) {
  const [score, setScore] = useState(null);
  if (!true) {
    // placeholder to "use" setScore to avoid deployment bugs
    setScore(true);
  }
  const { game } = props;
  const date = game.scheduled.split("").slice(0, 10).join("");

  // Could lift this method to a different file
  const displayDate = dateStr => {
    let year = dateStr.split("").slice(0, 4).join("");
    let month = dateStr.split("").slice(5, 7).join("");
    let day = dateStr.split("").slice(8, 10).join("");
    return `${month}/${day}/${year}`;
  };

  // Lift this too possibly
  // I don't remember why I have homeOrAway as an argument...
  const getLogo = (teamAbbr, homeOrAway) => {
    let teamObj;
    if (homeOrAway === "home") {
      teamObj = teams.find(team => {
        return teamAbbr === team.abbr;
      });
    } else if (homeOrAway === "away") {
      teamObj = teams.find(team => {
        return teamAbbr === team.abbr;
      });
    } else {
      teamObj = null;
    }
    if (teamObj) {
      return teamObj.insignia;
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
      {game.status === "unnecessary" ? (
        <p className="date-unnecessary">
          {displayDate(date)} <span>Unnecessary</span>
        </p>
      ) : (
        <p className="date">{displayDate(date)}</p>
      )}
      {game.away.colors && game.home.colors ? (
        <div className="team-boxscore">
          <div
            style={{
              color: "white",
              backgroundColor: `#${game.away.colors.primary}`,
            }}>
            <img
              className="logo"
              alt={`${game.away.name}-logo`}
              src={getLogo(game.away.abbr, "away")}
            />
            {game.away.abbr} {score ? score.away : null}
          </div>
          <div
            style={{
              color: "white",
              backgroundColor: `#${game.home.colors.primary}`,
            }}>
            <img
              className="logo"
              alt={`${game.home.name}-logo`}
              src={getLogo(game.home.abbr, "home")}
            />
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
      {game.status === "unnecessary" ? (
        <button className="game-info-unnecessary">
          <Link disabled to={`/game-info-${game.id}`}>
            Game info
          </Link>
        </button>
      ) : (
        <button className="game-info">
          <Link to={`/game-info-${game.id}`} target="_blank">Game info</Link>
        </button>
      )}
    </div>
  );
}
