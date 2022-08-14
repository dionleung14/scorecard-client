import React, { useState, useEffect } from "react";
import Game from "./components/GameCurrent";
import GamesContainer from "../../components/GamesContainer/GamesContainer";
import { getGamesInADay } from "../../routes/sportradar";
import './todaysSchedule.css'

export default function TodaysSchedule() {
  const [displayGames, setDisplayGames] = useState([]);
  // useEffect(() => {
  //   const loadGames = async () => {
  //     // let games = await getGamesInADay(); // no arguments = 4/16/2021
  //     let now = new Date(Date.now());
  //     let day = now.getDate();
  //     let month = now.getMonth() + 1;
  //     let year = now.getFullYear();
  //     let today = {
  //       day,
  //       month,
  //       year,
  //     };
  //     let schedule = await getGamesInADay(today);
  //     setDisplayGames(schedule.games);
  //   };
  //   loadGames();
  // }, []);

  // manual
  const loadGames = async () => {
    let schedule = await getGamesInADay(); // no arguments = 4/16/2021
    let now = new Date(Date.now());
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()
    let today = {
      day, month, year
    }
    // let schedule = await getGamesInADay(today);
    // let inProgress = schedule.games.filter(game => {
    //   return game.status === "inprogress"
    // })
    setDisplayGames(schedule.games)
  };
  return (
    <div>
      <h3>Today's Schedule</h3>
      <button onClick={loadGames}>Load games today</button>
      {displayGames.length > 0 ? (
        <GamesContainer>
        {displayGames.map(game => {
          return <Game game={game} key={game.id} />;
        })}
        </GamesContainer>
      ) : (
        <h1>no games in state</h1>
      )}
    </div>
  );
}
