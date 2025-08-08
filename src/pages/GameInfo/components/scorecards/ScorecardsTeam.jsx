// import React, { useState } from "react";
import React from "react";
// import StatefulLineups from "./StatefulLineups";
// import Scoring from "./Scoring";
import { PitchingRecords, FullScorecard } from "./index.js";

export default function ScorecardsTeam({ team }) {
  const { team: teamData, fullScorecard, pitchersUsed } = team;

  // const [showCombinedScoreCards, setShowCombinedScoreCards] = useState(true);
  // const [battingLineupsWithSubs, setBattingLineupsWithSubs] = useState(null);
  // const [pitchersRecords, setPitchersRecords] = useState(null);

  // setBattingLineupsWithSubs(scorecards.battingLineupsWithSubstitutions);

  // const toggleShowHideCombinedSC = () => {
  //   setShowCombinedScoreCards(!showCombinedScoreCards);
  // };

  return (
    <div className="scorecards-team">
      <h3 className="scorecards-team-team-header">
        {teamData.market} {teamData.name}
      </h3>
      {/* <div className="scorecard-container"> */}
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
        <FullScorecard fullScorecard={fullScorecard} />
      {/* </div> */}
      <h3 className="scorecards-team-pitchers-header">
        {teamData.market} pitchers
      </h3>
      <div className="pitching-records">
        <PitchingRecords pitchers={pitchersUsed} />
      </div>
    </div>
  );
}
