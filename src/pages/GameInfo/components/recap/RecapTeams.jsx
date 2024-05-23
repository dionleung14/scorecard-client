// The play by play text; need to handle bottom of the last inning if home team is leading
import React from "react";

export default function RecapTeams(props) {
  const { inningData, team, inningHalf } = props;
  return (
    <div
      className="inning-top"
      style={{
        color: `#${team.colors.secondary}`,
        backgroundColor: `#${team.colors.primary}`,
      }}>
      <h5 className="inning-top-or-bottom">{inningHalf}</h5>
      <ol>
        {inningData.map(inningEvent => {
          return (
            <li key={inningEvent.eventId} data-pbp-id={inningEvent.eventId}>
              {inningEvent.description}
              {/* {inningEvent.eventId} */}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
