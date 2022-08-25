// get single day data
export const getGamesInADay = async date => {
  console.log("getting schedule for games in a day");
  if (date) {
    const { year, month, day } = date;
    let games = fetch("sportradar/game/day", {
      method: "POST",
      body: JSON.stringify({
        year,
        month,
        day,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async response => {
        if (response.status === 202) {
          console.log("schedule data is from file");
        } else if (response.status === 200) {
          console.log("schedule data is from api");
        }
        let parsed = await response.json();
        return parsed;
      })
      .catch(err => {
        console.error(err);
      });
    return games;
  } else {
    let games = fetch("sportradar/game/day", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async response => {
        if (response.status === 202) {
          console.log("schedule data is from file");
        } else if (response.status === 200) {
          console.log("schedule data is from api");
        }
        let parsed = await response.json();
        return parsed.games;
      })
      .catch(err => {
        console.error(err);
      });
    return games;
  }
};

// get single game boxscore data
export const getSingleGameBoxScore = async gameId => {
  console.log("getting single game boxscore");
  if (gameId) {
    let scores = fetch(`sportradar/game/game-info/boxscore/${gameId}`).then(
      async response => {
        if (response.status === 202) {
          console.log("boxscore data is from file");
        } else if (response.status === 200) {
          console.log("boxscore data is from api");
        }
        let parsed = await response.json();
        return parsed;
      }
    );
    return scores;
  }
};

// get the lineups for both teams for a given game
export const getLineupsForBothTeamsAGame = gameId => {
  // let gameId = "04849b31-5a13-422c-bb6d-cf8e50a77e8b";
  if (gameId) {
    console.log("getting lineups home and away for a game");
    let playByPlay = fetch(`sportradar/pbp/${gameId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async response => {
      if (response.status === 202) {
        console.log("lineup data is from file");
      } else if (response.status === 200) {
        console.log("lineup data is from api");
      }
      let parsed = await response.json();
      console.log("lineups?");
      return parsed;
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
