// import React, { useState } from "react";
import React from "react";
import StatefulLineups from "./StatefulLineups";
import Scoring from "./Scoring";
import PitchingRecords from "./PitchingRecords";
import FullScorecard from "./FullScorecard";

export default function ScorecardsTeam({ team }) {
  // const { team } = props;

  // const [showCombinedScoreCards, setShowCombinedScoreCards] = useState(true);
  // const [battingLineupsWithSubs, setBattingLineupsWithSubs] = useState(null);
  // const [pitchersRecords, setPitchersRecords] = useState(null);

  // setBattingLineupsWithSubs(scorecards.battingLineupsWithSubstitutions);

  // const toggleShowHideCombinedSC = () => {
  //   setShowCombinedScoreCards(!showCombinedScoreCards);
  // };

  return (
    <div>
      <h3>
        {team.team.market} {team.team.name}
      </h3>
      <div className="scorecard">
        {/* <tr>
            <th>Batting Order</th>
            <th>Number</th>
            <th>Player</th>
            <th>Position</th>
            {team.inningsPlays.map((inning, index) => {
              if (inning.columns && inning.columns.length > 0) {
                return inning.columns.map(inningCol => {
                  return (
                    <th
                      className="scorecard-inning-header"
                      key={inningCol.columnNumber}>
                      {inningCol.inningNumber}
                    </th>
                  );
                });
              } else {
                return (
                  <th className="scorecard-inning-header" key={index}>
                    {inning.inningNumber}
                  </th>
                );
              }
            })}
          </tr> */}
        {/* <table>
          <tbody>
            <tr>
              <th>Batting Order</th>
              <th>Number</th>
              <th>Player</th>
              <th>Position</th>
              {team.inningsPlays.map((inning, index) => {
                if (inning.columns && inning.columns.length > 0) {
                  return inning.columns.map(inningCol => {
                    return (
                      <th
                        className="scorecard-inning-header"
                        key={inningCol.columnNumber}>
                        {inningCol.inningNumber}
                      </th>
                    );
                  });
                } else {
                  return (
                    <th className="scorecard-inning-header" key={index}>
                      {inning.inningNumber}
                    </th>
                  );
                }
              })}
            </tr>
          </tbody>
        </table> */}
        {/* <StatefulLineups
          battingLineupsWithSubs={team.lineups}
          pitchersRecords={team.pitchersUsed}
          team={team.team.teamAbbr}
        />
        <Scoring
          innings={team.inningsPlays}
          team={team.team}
          scoring={team.scorecard}
        /> */}
        <FullScorecard fullScorecard={team.fullScorecard}/>
      </div>
      <h5>{team.team.market} pitchers</h5>
      <PitchingRecords pitchers={team.pitchersUsed} />
    </div>
  );
}
