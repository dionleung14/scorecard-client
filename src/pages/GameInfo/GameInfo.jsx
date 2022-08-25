import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getPBPForAGame,
  setGameLineups,
  getSingleGameBoxScore,
} from "../../routes/sportradar";
import BoxScore from "./components/BoxScore";
import Lineups from "./components/Lineups";
import SimpleScore from "./components/SimpleScore";
import './gameInfo.css'

export default function GameInfo() {
  const { gameId } = useParams();
  const [gameBoxScore, setGameBoxScore] = useState(null);
  const [simpleScore, setSimpleScore] = useState(null);
  const [gamePlayByPlay, setGamePlayByPlay] = useState(null);
  const [gameLineups, setGameLineups] = useState(null);
  const getGameInfo = async () => {
    let boxscore = await getSingleGameBoxScore(gameId);
    setTimeout(async () => {
      let playByPlay = await getPBPForAGame(gameId);
      console.log(playByPlay)
      setGameLineups(playByPlay.lineups);
      setSimpleScore(playByPlay.finalScore);
      setGamePlayByPlay(playByPlay.scoreablePlays);
    }, 1500);
    setGameBoxScore(boxscore);
  };

  // useEffect(() => {
  //   console.log("game PBP state has changed");
  //   if (gamePlayByPlay) {
  //     setGameLineups(gamePlayByPlay.innings[0]);
  //   }
  // }, [gamePlayByPlay]);

  return (
    <div>
      GameInfo
      <button onClick={getGameInfo}>Get game info</button>
      {simpleScore ? (
        <SimpleScore simpleScore={simpleScore}/>
      ) : (
        <h1>Final score</h1>
      )}
      {gameBoxScore && gameBoxScore.status !== "canceled" ? (
          <BoxScore gameInfo={gameBoxScore} />
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
        // <div>{gamePlayByPlay.innings.length}</div>
        <h3>{gamePlayByPlay.length}</h3>
      ) : (
        <h1>Play by Play</h1>
      )}
    </div>
  );
}
