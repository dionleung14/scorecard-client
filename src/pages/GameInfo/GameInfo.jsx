// This file is a big page that holds pretty much all the functionality of the client for a specific game

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  getPBPForAGame,
  // setGameLineups, // placeholder for the live roster; could leverage it for a generated scorecard?
} from "../../routes";
import GameDetails from "./components/GameDetails";
import BoxScoreSimple from "./components/boxscore/BoxScoreSimple";
import BoxScoreDetailed from "./components/boxscore/BoxScoreDetailed";
import Lineups from "./components/Lineups";
// import StatefulLineups from "./components/StatefulLineups";
import Recap from "./components/recap/Recap";
// import CombinedScorecard from "../../components/CombinedScorecard/CombinedScorecard"; // placed this outside of the ./components folder because it is very likely this page will be refactored
import "./gameInfo.css";
// import Dion from "../../components/Dion/Dion";
import Scorecards from "./components/scorecards/Scorecards";
import { FeedbackForm } from "../../components";

export default function GameInfo() {
  // const { saved } = props;
  const { gameId, saved } = useParams();
  // toggle for showing and hiding the play by play text
  const [displayRecap, setDisplayRecap] = useState(false);
  const [recapFlex, setRecapFlex] = useState(false);
  const [scoreToggle, setScoreToggle] = useState(true);

  // toggle for showing and hiding the scorecards
  // const [showCombinedScoreCards, setShowCombinedScoreCards] = useState(true);
  const [gameBoxScore, setGameBoxScore] = useState(null);
  const [gameRecap, setGameRecap] = useState(null);
  const [scorecardPlays, setScorecardPlays] = useState(null);
  const [startingLineups, setStartingLineups] = useState(null);
  const [gameInfo, setGameInfo] = useState(null);
  const [firstPitch, setFirstPitch] = useState(null);
  // const [pitchersRecords, setPitchersRecords] = useState(null);
  // const [dion, setDion] = useState(null);
  const getGameInfo = async () => {
    // let boxscore = await getSingleGameBoxScore(gameId);
    let playByPlay = await getPBPForAGame(gameId, saved);
    console.log("heyyyyyyyyy")
    console.log(playByPlay)
    setGameInfo(playByPlay.gameInfo);
    setFirstPitch(playByPlay.firstPitchTime);
    setStartingLineups(playByPlay.startingLineups);
    // setBattingLineupsWithSubs(playByPlay.battingLineupsWithSubstitutions);
    setGameRecap(playByPlay.recap.recap);
    setScorecardPlays(playByPlay.scorecardPlays);
    // setPitchersRecords(playByPlay.pitchersRecords);
    // setDion(playByPlay.dion);
    setGameBoxScore(playByPlay.boxscore);
  };

  const toggleShowHideRecap = () => {
    setDisplayRecap(!displayRecap);
  };
  const toggleRecapFlex = () => {
    setRecapFlex(!recapFlex);
  };
  // const toggleShowHideCombinedSC = () => {
  //   setShowCombinedScoreCards(!showCombinedScoreCards);
  // };
  const toggleSimpleOrBoxscore = () => {
    setScoreToggle(!scoreToggle);
  };
  // useEffect(() => {
  //   console.log("game PBP state has changed");
  //   if (gamePlayByPlay) {
  //     setGameLineups(gamePlayByPlay.innings[0]);
  //   }
  // }, [gamePlayByPlay]);
  // useEffect(() => {
  //   if (startingLineups && startingLineups.length > 0) {
  //     setStatefulLineups(startingLineups);
  //   }
  // }, [startingLineups]);

  return (
    <div>
      <FeedbackForm />
      <div className="game-info-header">
        <h2>Game Information         {saved? "- Sample Game" : null}</h2>

        {gameInfo ? (
          <button className="get-game-info-btn" onClick={getGameInfo}>
            Refresh game info
          </button>
        ) : (
          <button className="get-game-info-btn" onClick={getGameInfo}>
            Get game info
          </button>
        )}
      </div>
      {gameInfo ? (
        <GameDetails gameInfo={gameInfo} firstPitch={firstPitch} />
      ) : null}
      {/* TODO: create a boxscore container */}
      <div className="boxscore-container">
        {gameBoxScore && scoreToggle === true ? (
          <BoxScoreSimple
            gameInfo={gameBoxScore}
            toggleSimpleDetailed={toggleSimpleOrBoxscore}
          />
        ) : gameBoxScore && scoreToggle === false ? (
          <BoxScoreDetailed
            gameInfo={gameBoxScore}
            toggleSimpleDetailed={toggleSimpleOrBoxscore}
          />
        ) : null}
      </div>
      {startingLineups ? (
        // TODO: create a lineups container
        <div>
          <h1>Starting Lineups</h1>
          <div className="lineup-card">
            <Lineups lineup={startingLineups.awayTeam} />
            <Lineups lineup={startingLineups.homeTeam} />
          </div>
        </div>
      ) : null}
      {gameRecap ? (
        // TODO: create a recap container
        <div>
          <h1>
            Play by Play{" "}
            <button onClick={toggleShowHideRecap}>toggle show/hide</button>
            <button onClick={toggleRecapFlex}>toggle display</button>
          </h1>
          {/* {gamePlayByPlay.reverse().map(inning => { // could have a toggle button to do reverse chronological, makes more sense for the live scorecard to have that though  */}
          {displayRecap ? (
            gameRecap.map((inning, index) => {
              return (
                <Recap
                  key={index}
                  inningData={inning}
                  teams={inning.teams}
                  displayFlex={recapFlex}
                />
              );
            })
          ) : (
            <h2>Play by Play is hidden</h2>
          )}
        </div>
      ) : null}
      {scorecardPlays ? <Scorecards scorecards={scorecardPlays} /> : null}
    </div>
  );
}
