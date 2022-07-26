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
import PlayByPlay from "./components/PlayByPlay";
import "./gameInfo.css";

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
      // console.log(playByPlay.lineups)
      // console.log(playByPlay.scoreablePlays)
      setGameLineups(playByPlay.lineups);
      setSimpleScore(playByPlay.finalScore); // uses play by play data, could we use something else?
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
        <SimpleScore simpleScore={simpleScore} />
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
          <Lineups lineup={gameLineups.awayTeam} team="Away" />
          <Lineups lineup={gameLineups.homeTeam} team="Home" />
        </div>
      ) : (
        <h1>Lineups</h1>
      )}
      {gamePlayByPlay ? (
        <div>
          {/* {gamePlayByPlay.reverse().map(inning => { */}
          {gamePlayByPlay.map(inning => {
            return <PlayByPlay inningData={inning} />;
          })}
        </div>
      ) : (
        <h1>Play by Play</h1>
      )}
    </div>
  );
}
