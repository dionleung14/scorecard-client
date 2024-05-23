import React, {useState} from "react";
// import StatefulLineups from "./components/StatefulLineups";
import ScorecardsTeam from "./ScorecardsTeam";

export default function Scorecards( props) {
  const { scorecards } = props;

  const [showCombinedScoreCards, setShowCombinedScoreCards] = useState(true);
  // const [battingLineupsWithSubs, setBattingLineupsWithSubs] = useState(null);
  // const [pitchersRecords, setPitchersRecords] = useState(null);

  // setBattingLineupsWithSubs(scorecards.battingLineupsWithSubstitutions);

  const toggleShowHideCombinedSC = () => {
    setShowCombinedScoreCards(!showCombinedScoreCards);
  };

  return (
    <div>
      <h1>
        Scorecard Table
        <button onClick={toggleShowHideCombinedSC}>toggle show/hide</button>
      </h1>
      {showCombinedScoreCards ? (
        <div className="scorecards">

          <h3>hi</h3>
          <ScorecardsTeam team={scorecards.awayTeam}/>
          <ScorecardsTeam team={scorecards.homeTeam}/>
        </div>
      ) : (
        <h2>Scorecards are hidden</h2>
      )}
    </div>
  );
}
