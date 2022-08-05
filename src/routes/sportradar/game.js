// get single day data
export const getGamesInADay = async date => {
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
        let test = await response.json();
        return test;
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
        let parsed = await response.json();
        return parsed;
      })
      .catch(err => {
        console.error(err);
      });
    return games;
  }
};

// get single game boxscore data
export const getSingleGameBoxscore = async gameId => {
  console.log("getting single game box score");
  if (gameId) {
    console.log("hitting live api");
    let scores = fetch(`sportradar/game/single/${gameId}`).then(
      async response => {
        // let test = await response.json();
        // console.log(test);
        console.log(response);
        // return test;
      }
    );
    return scores;
  } else {
    console.log("hitting saved data");
    let gameId = "04849b31-5a13-422c-bb6d-cf8e50a77e8b";
    let scores = fetch(`sportradar/game/single/${gameId}`).then(
      async response => {
        let test = await response.json();
        console.log(test);
        return test;
      }
    );
    return scores;
  }
};

// get single game full info data
export const getSingleGameFullInfo = async gameId => {
  console.log("getting single game full info");
  if (gameId) {
    console.log("hitting live api");
    let scores = fetch(`sportradar/game/game-info/${gameId}`).then(
      async response => {
        return response.json();
      }
    );
    return scores;
  } else {
    console.log("hitting saved data");
    let gameId = "04849b31-5a13-422c-bb6d-cf8e50a77e8b";
    let scores = fetch(`sportradar/game/single/${gameId}`).then(
      async response => {
        let test = await response.json();
        return test;
      }
    );
    return scores;
  }
};
