import React from "react";

export default function PlayByPlay(props) {
  const { inningData } = props;
  return (
    <div>
      <h3>{inningData.number}</h3>
      <div>
        <h5>Top</h5>
        {inningData.top.map(inningEvent => {
          return <p>{inningEvent.description}</p>
        })}
      </div>
      <div>
        <h5>Bottom</h5>
        {inningData.bottom.map(inningEvent => {
          return <p>{inningEvent.description}</p>
        })}
      </div>
    </div>
  );
}
