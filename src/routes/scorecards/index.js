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
