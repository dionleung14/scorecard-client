export const getPlayerIdsPerInning = inningEventArr => {
  let playerIdArr = [];
  inningEventArr.forEach(inningEvent => {
    playerIdArr.push(inningEvent.batterId);
  });
};
