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

          <ScorecardsTeam team={scorecards.awayTeam}/>
          <ScorecardsTeam team={scorecards.homeTeam}/>
        </div>
      ) : (
        <h2>Scorecards are hidden</h2>
      )}
    </div>
  );
}

/* from Dion.jsx 
import React from "react";
import ScorecardRowDion from "./components/ScorecardRowDion";

export default function Dion({ dion, teamPbp }) {
  const { awayScorecard, homeScorecard } = dion;
  const awayRows = awayScorecard.batterRows;
  const homeRows = homeScorecard.batterRows;

  return (
    <div className="scorecards-dion">
      <div>
        <h3>Away team</h3>
        <div className="scorecard away-scorecard">
          <table className="away-roster">
            <tbody>
              <tr className="player-columns-categories">
                <th>Number</th>
                <th>Player</th>
                <th>Position</th>
                // {/* Scorecard row inning headers }
                {teamPbp.awayInnings.map((inning, index) => {
                  if (inning.columns && inning.columns.length > 0) {
                    return inning.columns.map(inningCol => {
                      return (
                        <th className="scorecard-inning-header" key={inningCol.columnNumber}>{inningCol.inning}</th>
                      );
                    });
                  } else {
                    return <th className="scorecard-inning-header" key={index}>{inning.inning}</th>;
                  }
                })}
              </tr>
              {awayRows.map((battingOrder, index) => {
                return (
                  <ScorecardRowDion
                    order={battingOrder.order}
                    players={battingOrder.players}
                    innings={battingOrder.innings}
                    idx={index}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3>Home team</h3>
        <div className="scorecard home-scorecard">
          <table className="home-roster">
            <tbody>
              <tr className="player-columns-categories">
                <th>Number</th>
                <th>Player</th>
                <th>Position</th>
                {teamPbp.homeInnings.map((inning, index) => {
                  if (inning.columns && inning.columns.length > 0) {
                    return inning.columns.map(inningCol => {
                      return (
                        <th className="scorecard-inning-header" key={inningCol.columnNumber}>{inningCol.inning}</th>
                      );
                    });
                  } else {
                    return <th className="scorecard-inning-header" key={index}>{inning.inning}</th>;
                  }
                })}
              </tr>
              {homeRows.map((battingOrder, index) => {
                return (
                  <ScorecardRowDion
                    order={battingOrder.order}
                    players={battingOrder.players}
                    innings={battingOrder.innings}
                    idx={index}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


*/
