// get the starting lineup for a given game
export const getStartingLineupForAGame = () => {
  let gameId = "04849b31-5a13-422c-bb6d-cf8e50a77e8b";
  fetch(`sportradar/pbp/${gameId}`).then(async response => {
    console.log("possibly?");
    let test = await response.json();
    console.log(test);
  });
};

// get the play-by-play data for a given game
export const getPBPForAGame = gameId => {
  // let gameId = "04849b31-5a13-422c-bb6d-cf8e50a77e8b";
  if (gameId) {
    let playByPlay = fetch(`sportradar/pbp/${gameId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async response => {
      let test = await response.json();
      return test;
    });
    return playByPlay;
  } else {
    fetch("sportradar/pbp/home", {
      method: "POST",
      body: JSON.stringify({
        year: 2021,
        season: "REG",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async response => {
      console.log("possibly?");
      let test = await response.text();
      console.log(test);
    });
  }
};
