import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleGameFullInfo, getPBPForAGame } from "../../routes/sportradar";
import BoxScore from "./components/BoxScore";

export default function GameInfo() {
  const { gameId } = useParams();
  const [gameState, setGameState] = useState(null);
  const [gamePlayByPlay, setGamePlayByPlay] = useState(null);
  const getGameInfo = async () => {
    let info = await getSingleGameFullInfo(gameId);
    setTimeout(async () => {
      let pbp = await getPBPForAGame(gameId);
      setGamePlayByPlay(pbp.game);
    }, 3000);
    setGameState(info.game);
  };
  return (
    <div>
      GameInfo
      <button onClick={getGameInfo}>Get game info</button>
      {gameState && gameState.status !== "canceled" ? (
        <div>
          <h3>
            Score: {gameState.away.abbr} {gameState.away.runs} @{" "}
            {gameState.home.abbr} {gameState.home.runs}
          </h3>
          <BoxScore gameInfo={gameState} />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
      {gamePlayByPlay && gamePlayByPlay.status !== "canceled" ? (
        <div>{gamePlayByPlay.scoring.home.name}</div>
      ) : (
        <h1>none</h1>
      )}
    </div>
  );
}
