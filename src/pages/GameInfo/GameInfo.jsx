// This file is a big page that holds pretty much all the functionality of the client for a specific game

import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getPBPForAGame,
  // setGameLineups, // placeholder for the live roster; could leverage it for a generated scorecard?
  getSingleGameBoxScore,
} from "../../routes";
import BoxScore from "./components/BoxScore";
import Lineups from "./components/Lineups";
import StatefulLineups from "./components/StatefulLineups";
import SimpleScore from "./components/SimpleScore";
import Recap from "./components/Recap";
import CombinedScorecard from "../../components/CombinedScorecard/CombinedScorecard"; // placed this outside of the ./components folder because it is very likely this page will be refactored
import "./gameInfo.css";
import Dion from "../../components/Dion/Dion";

export default function GameInfo() {
  const { gameId } = useParams();
  // toggle for showing and hiding the play by play text
  const [displayRecap, setDisplayRecap] = useState(true);
  const [scoreToggle, setScoreToggle] = useState(true);

  // toggle for showing and hiding the scorecards
  const [showCombinedScoreCards, setShowCombinedScoreCards] = useState(true);
  const [gameBoxScore, setGameBoxScore] = useState(null);
  const [gameRecap, setGameRecap] = useState(null);
  const [scorecardPlays, setScorecardPlays] = useState(null);
  const [startingLineups, setStartingLineups] = useState(null);
  const [battingLineupsWithSubs, setBattingLineupsWithSubs] = useState(null);
  const [pitchersRecords, setPitchersRecords] = useState(null);
  const [dion, setDion] = useState(null);
  const getGameInfo = async () => {
    // let boxscore = await getSingleGameBoxScore(gameId);
    let playByPlay = await getPBPForAGame(gameId);
    setStartingLineups(playByPlay.startingLineups);
    setBattingLineupsWithSubs(playByPlay.battingLineupsWithSubstitutions);
    setGameRecap(playByPlay.recap.recap);
    setScorecardPlays(playByPlay.scorecardPlays);
    setPitchersRecords(playByPlay.pitchersRecords);
    setDion(playByPlay.dion);
    setGameBoxScore(playByPlay.boxscore);
  };

  const toggleShowHidePbp = () => {
    setDisplayRecap(!displayRecap);
  };
  const toggleShowHideCombinedSC = () => {
    setShowCombinedScoreCards(!showCombinedScoreCards);
  };
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
      <h3>GameInfo</h3>
      <button onClick={getGameInfo}>Get game info</button>
      <h1>Boxscore</h1>
      {gameBoxScore ? (
        <button onClick={toggleSimpleOrBoxscore}>
          {scoreToggle ? "View more details" : "View fewer details"}
        </button>
      ) : null}
      {gameBoxScore && scoreToggle === true ? (
        <SimpleScore gameInfo={gameBoxScore} />
      ) : gameBoxScore && scoreToggle === false ? (
        <BoxScore gameInfo={gameBoxScore} />
      ) : null}
      {startingLineups ? (
        <div>
          <h1>Starting Lineups (Lineups component)</h1>
          <div className="lineup-card">
            <Lineups lineup={startingLineups.awayTeam} />
            <Lineups lineup={startingLineups.homeTeam} />
          </div>
        </div>
      ) : (
        <h1>Lineups</h1>
      )}
      {gameRecap ? (
        <div>
          <h1>
            Play by Play{" "}
            <button onClick={toggleShowHidePbp}>toggle show/hide</button>
          </h1>
          {/* {gamePlayByPlay.reverse().map(inning => { // could have a toggle button to do reverse chronological, makes more sense for the live scorecard to have that though  */}
          {displayRecap ? (
            // gameRecap.events.map((inning, index) => {
            gameRecap.map((inning, index) => {
              return <Recap key={index} inningData={inning} teams={inning.teams} />;
            })
          ) : (
            <h2>Play by Play text is hidden</h2>
          )}
        </div>
      ) : (
        <h1>Play by Play Recap</h1>
      )}
      {battingLineupsWithSubs && pitchersRecords ? (
        <div>
          <h1>Lineup with substitutions</h1>
          <div className="lineup-card">
            <StatefulLineups
              battingLineupsWithSubs={battingLineupsWithSubs.awayLineup}
              pitchersRecords={pitchersRecords.awayTeam}
              team="Away"
            />
            <StatefulLineups
              battingLineupsWithSubs={battingLineupsWithSubs.homeLineup}
              pitchersRecords={pitchersRecords.homeTeam}
              team="Home"
            />
          </div>
        </div>
      ) : (
        <h1>Stateful Lineup</h1>
      )}
      {/* {gamePlayByPlay && scorecardPlays && battingLineupsWithSubs ? (
        <div>
          <h1>
            Combined Scorecard Table{" "}
            <button onClick={toggleShowHideCombinedSC}>toggle show/hide (this is bugged so please hide)</button>
          </h1>
          {showCombinedScoreCards ? (
            <CombinedScorecard
              pbp={gamePlayByPlay}
              teamPbp={scorecardPlays}
              battingLineupsWithSubs={battingLineupsWithSubs}
            />
          ) : (
            <h2>hidden</h2>
          )}
        </div>
      ) : (
        <h1>Combined Scorecard</h1>
      )} */}
      {dion && scorecardPlays ? (
        <div>
          <h1>
            Scorecard Table
            <button onClick={toggleShowHideCombinedSC}>toggle show/hide</button>
          </h1>
          {showCombinedScoreCards ? (
            <Dion dion={dion} teamPbp={scorecardPlays} />
          ) : (
            <h2>Scorecards are hidden</h2>
          )}
        </div>
      ) : (
        <h1>Scorecard</h1>
      )}
    </div>
  );
}
