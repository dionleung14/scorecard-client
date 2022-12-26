import React from "react";

export default function PlayByPlay(props) {
  const { inningData } = props;
  return (
    <div className="inning-whole">
      <h3 className="inning-number">{inningData.number}</h3>
      <div className="inning-top">
        <h5 className="inning-top-or-bottom">Top</h5>
        <ol>
          {inningData.top.map(inningEvent => {
            return <li key={inningEvent.eventId}>{inningEvent.description}</li>;
          })}
        </ol>
      </div>
      <div className="inning-bottom">
        <h5 className="inning-top-or-bottom">Bottom</h5>
        <ol>
          {inningData.bottom.map(inningEvent => {
            return <li key={inningEvent.eventId}>{inningEvent.description}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
