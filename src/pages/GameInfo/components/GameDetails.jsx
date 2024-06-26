import React from "react";
// import { gameStatusTranslator } from "../../../services/gameStatusTranslator";
import teams from "../../../data/teams";

export default function GameDetails({ gameInfo, firstPitch }) {
  const { scheduled, homeTeam, awayTeam, attendance, duration, venue } =
    gameInfo;

  // TODO: lift this into utilities
  const date = scheduled.split("").slice(0, 10).join("");

  const attendanceDisplay = attendance
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const durationDisplay = duration => {
    let timeArr = duration.split(":");
    timeArr[0] += "hr";
    timeArr[1] += "min";
    return timeArr.join(" ");
  };

  // TODO: lift this into utilities
  const displayDate = dateStr => {
    let year = dateStr.split("").slice(0, 4).join("");
    let month = dateStr.split("").slice(5, 7).join("");
    let day = dateStr.split("").slice(8, 10).join("");
    return `${month}/${day}/${year}`;
  };

  // Generates a paragraph tag with the game status from sportradar
  // TODO: lift this into utilities
  // const generateText = gameStatus => {
  //   let text = gameStatusTranslator(gameStatus);
  //   return <p>{text}</p>;
  // };

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
  return (
    <div>
      <p>
        <img
          className="logo"
          alt={`${awayTeam.name}-logo`}
          src={getLogo(awayTeam.teamAbbr, "home")}
        />
        {awayTeam.market} {awayTeam.name} @ {homeTeam.market} {homeTeam.name}
        <img
          className="logo"
          alt={`${homeTeam.name}-logo`}
          src={getLogo(homeTeam.teamAbbr, "home")}
        />
      </p>
      <p>{displayDate(date)}</p>
      <p>{venue.name} </p>
      <p>{venue.address}</p>
      <p>
        {venue.city}, {venue.state}
      </p>
      {/* <p> {generateText(gameStatus)}</p> */}
      <p>Attendance: {attendanceDisplay}</p>
      <p>First Pitch: {firstPitch.start_time}</p>
      <p>Duration: {durationDisplay(duration)}</p>
    </div>
  );
}
