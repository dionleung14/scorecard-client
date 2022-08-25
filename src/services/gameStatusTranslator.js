// translates a game status from sportradar to a string to display on the game status button
export const gameStatusTranslator = gameStatus => {
  switch (gameStatus) {
    case "scheduled":
      return "Scheduled";
    case "inprogress":
      return "In progress";
    case "complete":
      return "Game concluded, statistics unofficial";
    case "closed":
      return "Game concluded";
    case "wdelay":
      return "Weather delay";
    case "fdelay":
      return "facility delay";
    default:
      return "Error";
  }
};
