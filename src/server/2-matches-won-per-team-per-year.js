function matchesWonPerTeam(matchesData) {
  let matchesWonObj = {};
  matchesData.map((match) => {
    if (matchesWonObj[match.season] === undefined) {
      if (match.season != undefined) {
        matchesWonObj[match.season] = {};
      }
    } else if (
      matchesWonObj[match.season][match.winner] === undefined &&
      match.winner != undefined &&
      match.season != undefined
    ) {
      matchesWonObj[match.season][match.winner] = 1;
    } else {
      matchesWonObj[match.season][match.winner] =
        matchesWonObj[match.season][match.winner] + 1;
    }
  });
  return matchesWonObj;
}

module.exports = matchesWonPerTeam;
