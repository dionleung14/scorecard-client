// This file is a big page that holds pretty much all the functionality of the client for a specific game

import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getPBPForAGame,
  // setGameLineups, // placeholder for the live roster; could leverage it for a generated scorecard?
  getSingleGameBoxScore,
} from "../../routes/sportradar";
import BoxScore from "./components/BoxScore";
import Lineups from "./components/Lineups";
import SimpleScore from "./components/SimpleScore";
import PlayByPlay from "./components/PlayByPlay";
import CombinedScorecard from "../../components/CombinedScorecard/CombinedScorecard"; // placed this outside of the ./components folder because it is very likely this page will be refactored
import "./gameInfo.css";

export default function GameInfo() {
  const { gameId } = useParams(); // React hook to grab the game id from the url parameters; used to query for the data from sportradar
  const [showPbpOrNah, setShowPbpOrNah] = useState(true); // intended to be for development only since pbp is so long; toggle visibility
  const [gameBoxScore, setGameBoxScore] = useState(null); // longer score with runs per inning
  const [simpleScore, setSimpleScore] = useState(null); // simple score with runs/hits/errors
  const [gamePlayByPlay, setGamePlayByPlay] = useState(null); // the big array of play by play data
  const [playByPlayTeams, setPlayByPlayTeams] = useState(null); // the pbp data but separated by team
  const [gameLineups, setGameLineups] = useState(null); // starting lineups

  const getGameInfo = async () => { // Hopefully this can be done automatically w/ useEffect or something
    let boxscore = await getSingleGameBoxScore(gameId); // could possibly get a boxscore from pbp data and avoid the 1.5s delay
    setTimeout(async () => {
      let playByPlay = await getPBPForAGame(gameId); 
      setGameLineups(playByPlay.lineups); // currently only does starting lineups
      setSimpleScore(playByPlay.finalScore); // uses play by play data, could we use something else?
      setGamePlayByPlay(playByPlay.scoreablePlays);
      console.log(playByPlay.scoreablePlaysByTeam)
      setPlayByPlayTeams(playByPlay.scoreablePlaysByTeam);
    }, 1500);
    setGameBoxScore(boxscore);
  };

  const toggleShowHide = () => {
    setShowPbpOrNah(!showPbpOrNah);
  };
  // useEffect(() => {
  //   console.log("game PBP state has changed");
  //   if (gamePlayByPlay) {
  //     setGameLineups(gamePlayByPlay.innings[0]);
  //   }
  // }, [gamePlayByPlay]);

  return (
    <div>
      <h3>GameInfo</h3>
      <button onClick={getGameInfo}>Get game info</button>
      {simpleScore ? (
        <SimpleScore simpleScore={simpleScore} />
      ) : (
        <h1>Simple score</h1>
      )}
      {gameBoxScore && gameBoxScore.status !== "canceled" ? (
        <BoxScore gameInfo={gameBoxScore} />
      ) : (
        <h1>Box score</h1>
      )}
      {gameLineups ? (
        <div>
          <h1>Starting Lineups (Lineups component)</h1>
          <div className="lineup-card">
            <Lineups lineup={gameLineups.awayTeam} team="Away" />
            <Lineups lineup={gameLineups.homeTeam} team="Home" />
          </div>
        </div>
      ) : (
        <h1>Lineups</h1>
      )}
      {gamePlayByPlay ? (
        <div>
          <h1>
            Play by Play{" "}
            <button onClick={toggleShowHide}>toggle show/hide</button>
          </h1>
          {/* {gamePlayByPlay.reverse().map(inning => { // could have a toggle button to do reverse chronological, makes more sense for the live scorecard to have that though  */}
          {showPbpOrNah ? (
            gamePlayByPlay.map((inning, index) => {
              return <PlayByPlay key={index} inningData={inning} />;
            })
          ) : (
            <h2>hidden</h2>
          )}
        </div>
      ) : (
        <h1>Play by Play</h1>
      )}
      {gamePlayByPlay && playByPlayTeams && gameLineups ? (
        <div>
          <h1>Combined Scorecard</h1>
          <CombinedScorecard pbp={gamePlayByPlay} teamPbp={playByPlayTeams} lineups={gameLineups} />
        </div>
      ) : (
        <h1>Combined Scorecard</h1>
      )}
    </div>
  );
}
