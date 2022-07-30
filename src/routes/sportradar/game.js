// get single day data
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
    let test = await response.json();
    console.log(test);
  });
};

// get single game boxscore data
const getSingleGameBoxscore = () => {
  let gameId = "04849b31-5a13-422c-bb6d-cf8e50a77e8b";
  fetch(`sportradar/game/single/${gameId}`).then(async response => {
    console.log("possibly?");
    let test = await response.json();
    console.log(test);
  });
};

module.exports = { getGamesInADay, getSingleGameBoxscore };
