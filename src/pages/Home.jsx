import React from "react";

export default function Home() {
  const defFunc = () => {
    fetch("/scorecards/home").then(async response => {
      console.log("maybe?");
      let test = await response.text();
      console.log(test);
    });
  };

  const newFunc = () => {
    fetch("/scorecards/test", {
      method: "POST",
      body: JSON.stringify({ key1: "value 1" }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async response => {
      console.log("maybe?");
      let test = await response.text();
      console.log(test);
    });
  };

  const getGamesInADay = () => {
    fetch("sportradar/game/day", {
      method: "POST",
      body: JSON.stringify({
        year: 2021,
        month: 4,
        day: 16,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async response => {
      console.log("possibly?");
      let test = await response.text();
      console.log(test);
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <h3>hey</h3>
        <button onClick={defFunc}>Click me</button>
        <button onClick={newFunc}>new Func</button>
        <button onClick={getGamesInADay}>Games in a day</button>
      </div>
    </div>
  );
}
