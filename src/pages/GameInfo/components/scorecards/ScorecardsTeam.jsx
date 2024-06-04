// import React, { useState } from "react";
import React from "react";
// import StatefulLineups from "./StatefulLineups";
// import Scoring from "./Scoring";
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
