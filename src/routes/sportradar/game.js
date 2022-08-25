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

// get single game extended summary data
export const getSingleGameExtendedSummary = async gameId => {
  console.log("getting extended summary for a single game");
  if (gameId) {
    let scores = fetch(
      `/sportradar/game/game-info/extended-summary/${gameId}`
    ).then(async response => {
      if (response.status === 202) {
        console.log("extended summary data is from file");
      } else if (response.status === 200) {
        console.log("extended summary data is from api");
      }
      let parsed = await response.json();
      return parsed;
    });
    return scores;
  }
};
