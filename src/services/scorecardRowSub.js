export const wasBatterInvolved = (playerIdsArr, battersInvolvedArr) => {
  let result = false;
  playerIdsArr.forEach(playerId => {
    if (battersInvolvedArr.includes(playerId)) {
      result = true;
      // cannot break out of a forEach loop
      // would 'break;' here if the result is true and further evaluation is unnecessary
    }
  });
  return result;
};
