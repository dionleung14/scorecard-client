import React from "react";

export default function Home() {
  const defFunc = () => {
    console.log("hey");
    fetch("/scorecards/home").then(async response => {
      console.log("maybe?");
      await response.text();

    });
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <h3>hey</h3>
        <button onClick={defFunc}>Click me</button>
      </div>
    </div>
  );
}
