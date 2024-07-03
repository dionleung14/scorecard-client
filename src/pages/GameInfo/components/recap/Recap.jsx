// The play by play text; need to handle bottom of the last inning if home team is leading
import React from "react";
import RecapTeams from "./RecapTeams";

export default function Recap(props) {
  const { inningData, teams, displayFlex } = props;
  return (
    <div className="inning-whole">
      <h3 className="inning-number">{inningData.inningInfo.inningNumber}</h3>
      {displayFlex ? (
        <div className="recap-halfs-container-flex">
          <RecapTeams
            displayFlex={displayFlex}
            inningHalf="Top"
            team={teams.awayTeam}
            inningData={inningData.events.top}
          />
          {inningData.events.bottom.length > 0 ? (
            <RecapTeams
              displayFlex={displayFlex}
              inningHalf="Bottom"
              team={teams.homeTeam}
              inningData={inningData.events.bottom}
            />
          ) : null}
        </div>
      ) : (
        <div className="recap-halfs-container-standard">
          <RecapTeams
            displayFlex={displayFlex}
            inningHalf="Top"
            team={teams.awayTeam}
            inningData={inningData.events.top}
          />
          {inningData.events.bottom.length > 0 ? (
            <RecapTeams
              displayFlex={displayFlex}
              inningHalf="Bottom"
              team={teams.homeTeam}
              inningData={inningData.events.bottom}
            />
          ) : null}
        </div>
      )}
    </div>
  );
}
