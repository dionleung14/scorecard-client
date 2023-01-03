import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { getSingleGameBoxscore } from "../../../routes/sportradar"; // how do i get the score and display it on the preview?
import { gameStatusTranslator } from "../../../services/gameStatusTranslator";

import teams from "../../../data/teams";

export default function GameCurrent(props) {
  const [score, setScore] = useState(null);
  if (!true) { // placeholder to "use" setScore to avoid deployment bugs
    setScore(true)
  }
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
      {game.away.colors && game.home.colors ? (
        <div className="team-boxscore">
          <div
            style={{
              color: "white",
              backgroundColor: `#${game.away.colors.primary}`,
            }}>
            <img className="logo" alt={`${game.away.name}-logo`} src={getLogo(game.away.abbr, "away")} />
            {game.away.abbr} {score ? score.away : null}
          </div>
          <div
            style={{
              color: "white",
              backgroundColor: `#${game.home.colors.primary}`,
            }}>
            <img className="logo" alt={`${game.home.name}-logo`} src={getLogo(game.home.abbr, "home")} />
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
      {generateText(game.status)}
      <Link to={`/game-info-${game.id}`}>Game info</Link>
    </div>
  );
}
