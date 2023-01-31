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
import StatefulLineups from "./components/StatefulLineups";
import SimpleScore from "./components/SimpleScore";
import PlayByPlay from "./components/PlayByPlay";
import CombinedScorecard from "../../components/CombinedScorecard/CombinedScorecard"; // placed this outside of the ./components folder because it is very likely this page will be refactored
import "./gameInfo.css";

export default function GameInfo() {
  const { gameId } = useParams();
  const [showPbpOrNah, setShowPbpOrNah] = useState(true);
  const [gameBoxScore, setGameBoxScore] = useState(null);
  const [simpleScore, setSimpleScore] = useState(null);
  const [gamePlayByPlay, setGamePlayByPlay] = useState(null);
  const [playByPlayTeams, setPlayByPlayTeams] = useState(null);
  const [startingLineups, setStartingLineups] = useState(null);
  const [statefulLineup, setStatefulLineups] = useState(null);
  const [lineupChanges, setLineupChanges] = useState(null);
  const [battingLineupsWithSubs, setBattingLineupsWithSubs] = useState(null);
  const [pitchersRecords, setPitchersRecords] = useState(null);
  const getGameInfo = async () => {
    let boxscore = await getSingleGameBoxScore(gameId);
    setTimeout(async () => {
      let playByPlay = await getPBPForAGame(gameId);
      // console.log(playByPlay.lineups)
      setStartingLineups(playByPlay.startingLineups);
      setStatefulLineups(playByPlay.startingLineups);
      setLineupChanges(playByPlay.lineupChanges);
      setBattingLineupsWithSubs(playByPlay.battingLineupsWithSubstitutions)
      setSimpleScore(playByPlay.finalScore); // uses play by play data, could we use something else?
      setGamePlayByPlay(playByPlay.scoreablePlays);
      setPlayByPlayTeams(playByPlay.scoreablePlaysByTeam);
      setPitchersRecords(playByPlay.pitchersRecords)
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
  // useEffect(() => {
  //   if (startingLineups && startingLineups.length > 0) {
  //     setStatefulLineups(startingLineups);
  //   }
  // }, [startingLineups]);

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
      {startingLineups ? (
        <div>
          <h1>Starting Lineups (Lineups component)</h1>
          <div className="lineup-card">
            <Lineups lineup={startingLineups.awayTeam} team="Away" />
            <Lineups lineup={startingLineups.homeTeam} team="Home" />
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
      {statefulLineup && lineupChanges ? (
        <div>
          <h1>Stateful Lineup</h1>
          <div className="lineup-card">
            <StatefulLineups
              startingLineup={startingLineups.awayTeam}
              battingChanges={lineupChanges.battingChanges}
              battingLineupsWithSubs={battingLineupsWithSubs.awayTeam}
              pitchersRecords={pitchersRecords.awayTeam}
              team="Away"
              />
            <StatefulLineups
              startingLineup={startingLineups.homeTeam}
              battingChanges={lineupChanges.battingChanges}
              battingLineupsWithSubs={battingLineupsWithSubs.homeTeam}
              pitchersRecords={pitchersRecords.homeTeam}
              team="Home"
            />
          </div>
        </div>
      ) : (
        <h1>Stateful Lineup loading</h1>
      )}
      {gamePlayByPlay && playByPlayTeams && startingLineups ? (
        <div>
          <h1>Combined Scorecard Table</h1>
          <CombinedScorecard
            pbp={gamePlayByPlay}
            teamPbp={playByPlayTeams}
            lineups={startingLineups}
            battingLineupsWithSubs={battingLineupsWithSubs}
          />
        </div>
      ) : (
        <h1>Combined Scorecard</h1>
      )}
    </div>
  );
}
