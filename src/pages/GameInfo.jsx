import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleGameFullInfo } from "../routes/sportradar";

export default function GameInfo() {
  const { gameId } = useParams();
  const [gameState, setGameState] = useState(null);
  const getGameInfo = async () => {
    let info = await getSingleGameFullInfo(gameId);
    setGameState(info.game);
  };
  return (
    <div>
      GameInfo
      <button onClick={getGameInfo}>Get game info</button>
      {gameState ? (
        <div>
          <h3>
            Score: {gameState.away.abbr} {gameState.away.runs} @ {gameState.home.abbr} {gameState.home.runs}
          </h3>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}
