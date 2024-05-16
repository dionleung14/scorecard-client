// This file contains the Game element that is rendered in the Array.map for Today's Schedule
// There is also a Game element/component for a schedule that is very similar
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { getSingleGameBoxscore } from "../../../routes"; // how do i get the score and display it on the preview?
import { gameStatusTranslator } from "../../../services/gameStatusTranslator";

import teams from "../../../data/teams";

export default function GameCurrent(props) {
  const [score, setScore] = useState(null);
  if (!true) {
    // placeholder to "use" setScore to avoid deployment bugs
    setScore(true);
  }
  const { game } = props;
  // Could lift this to a function that returns a string
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

  // Generates a paragraph tag with the game status from sportradar
  const generateText = gameStatus => {
    let text = gameStatusTranslator(gameStatus);
    return <p>{text}</p>;
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
      {game.awayTeam.colors && game.homeTeam.colors ? (
        <div className="team-boxscore">
          <div
            style={{
              color: "white",
              backgroundColor: `#${game.awayTeam.colors.primary}`,
            }}>
            <img
              className="logo"
              alt={`${game.awayTeam.name}-logo`}
              src={getLogo(game.awayTeam.abbr, "away")}
            />
            {game.awayTeam.abbr} {score ? score.away : null}
          </div>
          <div
            style={{
              color: "white",
              backgroundColor: `#${game.homeTeam.colors.primary}`,
            }}>
            <img
              className="logo"
              alt={`${game.homeTeam.name}-logo`}
              src={getLogo(game.homeTeam.abbr, "home")}
            />
            {game.homeTeam.abbr}
            {score ? score.home : null}
          </div>
        </div>
      ) : (
        <div>
          <p>
            {game.awayTeam.abbr} {score ? score.away : null}
          </p>
          <p>
            {game.homeTeam.abbr}
            {score ? score.home : null}
          </p>
        </div>
      )}
      {generateText(game.gameStatus)}
      <Link to={`/game-info-${game.gameId}`} target="_blank">
        Game info
      </Link>
    </div>
  );
}
