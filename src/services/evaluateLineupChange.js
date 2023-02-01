export const evaluateLineupChange = lineupChange => {
  let homeLineupBefore = lineupChange.lineupsBeforeSub.homeLineup;
  let awayLineupBefore = lineupChange.lineupsBeforeSub.awayLineup;
  let homeLineupAfter = lineupChange.lineupsAfterSub.homeLineup;
  let awayLineupAfter = lineupChange.lineupsAfterSub.awayLineup;
  if (
    homeLineupBefore.length === 10 &&
    awayLineupBefore.length === 10 &&
    homeLineupAfter.length === 10 &&
    awayLineupAfter.length === 10
  ) {
    for (let i = 0; i < 10; i++) {
      let homeBefore = homeLineupBefore[i];
      let homeAfter = homeLineupAfter[i];
      if (homeBefore !== homeAfter) {
        return { subbedOut: homeBefore, subbedIn: homeAfter };
      }
    }
    for (let j = 0; j < 10; j++) {
      let awayBefore = awayLineupBefore[j];
      let awayAfter = awayLineupAfter[j];
      if (awayBefore !== awayAfter) {
        return { subbedOut: awayBefore, subbedIn: awayAfter };
      }
    }
  }
  // console.log(lineupChange);
};

// arranges batters into an array of length 9, batters grouped by batting order
// put this on the server
export const arrangeBattersByOrder = battingLineupWithSubs => {
  let lineup = [];
  for (let battingOrder = 1; battingOrder < 10; battingOrder++) {
    let lineupArr = battingLineupWithSubs.filter(player => {
      return player.order === battingOrder;
    });
    if (lineupArr.length > 1) {
      lineup.push({ lineupArr });
    } else {
      lineup.push(lineupArr[0]);
    }
  }
  return lineup;
};

export const didPlayerGetSubbedOut = (player, outgoingPlayersArr) => {
  if (outgoingPlayersArr.includes(player.playerId)) {
    return true;
  } else {
    return false;
  }
};

export const createBattedAroundColumn = inningOfPlaysObj => {
  let inningColumns = Math.ceil(inningOfPlaysObj.plays.length / 9);
  let inningColumnHeaders = [];
  for (let i = 0; i < inningColumns; i++) {
    inningColumnHeaders.push({
      inning: inningOfPlaysObj.inning,
      columnNumber: i + 1,
    });
  }
  console.log("js script" + inningColumnHeaders);
};
