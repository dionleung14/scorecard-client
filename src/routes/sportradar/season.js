// Get all games in a given season
export const getAllGamesInASeason = () => {
  fetch("sportradar/season/all", {
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
    let test = await response.json();
    console.log(test);
  });
};

// get all games in a season for a given team
export const getSeasonGamesForATeam = async () => {
  let games = fetch(`sportradar/season/team`, {
    method: "POST",
    body: JSON.stringify({
      year: 2021,
      season: "REG",
      team: "SEA",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async response => {
    console.log("fetching games in a season for a team");
    let test = await response.json();
    return test;
  });
  return games;
};
