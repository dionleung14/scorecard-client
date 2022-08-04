// get single day data
export const getGamesInADay = async date => {
  const { year, month, day } = date;
  if (year && month && day) {
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
        // console.log("possibly?");
        // console.log(response);
        let test = await response.json();
        console.log(test);
        return test;
        // return test;
      })
      .catch(err => {
        console.error(err);
      });
    return games;
  } else {
    let games = fetch("sportradar/game/day", {
      method: "POST",
      body: JSON.stringify({
        year: 2021,
        month: 4,
        day: 16,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async response => {
        // console.log("possibly?");
        // console.log(response);
        let test = await response.json();
        console.log(test);
        return test;
        // return test;
      })
      .catch(err => {
        console.error(err);
      });
    return games;
  }
};

// get single game boxscore data
export const getSingleGameBoxscore = () => {
  let gameId = "04849b31-5a13-422c-bb6d-cf8e50a77e8b";
  fetch(`sportradar/game/single/${gameId}`).then(async response => {
    let test = await response.json();
    console.log(test);
  });
};
