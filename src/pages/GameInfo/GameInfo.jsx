import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getSingleGameFullInfo,
  getPBPForAGame,
  setGameLineups,
  getSingleGameBoxScore,
} from "../../routes/sportradar";
import BoxScore from "./components/BoxScore";
import Lineups from "./components/Lineups";
import './gameInfo.css'

export default function GameInfo() {
  const { gameId } = useParams();
  const [gameBoxScore, setGameBoxScore] = useState(null);
  const [gamePlayByPlay, setGamePlayByPlay] = useState(null);
  const [gameLineups, setGameLineups] = useState(null);
  const getGameInfo = async () => {
    let boxscore = await getSingleGameBoxScore(gameId);
    setTimeout(async () => {
      let playByPlay = await getPBPForAGame(gameId);
      setGameLineups(playByPlay.lineups);
      // setGamePlayByPlay(playByPlay);
    }, 1500);
    // setGameBoxScore(info.game);
    setGameBoxScore(boxscore);
  };

  useEffect(() => {
    console.log("game PBP state has changed");
    if (gamePlayByPlay) {
      setGameLineups(gamePlayByPlay.innings[0]);
    }
  }, [gamePlayByPlay]);
  return (
    <div>
      GameInfo
      <button onClick={getGameInfo}>Get game info</button>
      {gameBoxScore && gameBoxScore.status !== "canceled" ? (
        <div>
          <h3>
            Score: {gameBoxScore.away.abbr} {gameBoxScore.away.runs} @{" "}
            {gameBoxScore.home.abbr} {gameBoxScore.home.runs}
          </h3>
          <BoxScore gameInfo={gameBoxScore} />
        </div>
      ) : (
        <h1>Box score</h1>
      )}
      {gameLineups ? (
        <div className="lineup-card">
          <Lineups lineup={gameLineups.awayTeam} team="Away"/>
          <Lineups lineup={gameLineups.homeTeam} team="Home"/>
        </div>
      ) : (
        <h1>Lineups</h1>
      )}
      {gamePlayByPlay ? (
        // <div>{gamePlayByPlay.scoring.home.name}</div>
        <div>{gamePlayByPlay.innings.length}</div>
      ) : (
        <h1>Play by Play</h1>
      )}
    </div>
  );
}
