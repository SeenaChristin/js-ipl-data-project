function matchesWonPerTeam(matchesData) {
  let matchesWonObj = {};
  matchesData.map((match, index) => {
    if (matchesWonObj[match.season] === undefined) {
      matchesWonObj[match.season] = {};
    }
    if (matchesWonObj[match.season][match.winner] === undefined) {
      matchesWonObj[match.season][match.winner] = 1;
    } else {
      matchesWonObj[match.season][match.winner] =
        matchesWonObj[match.season][match.winner] + 1;
    }
  });
  return matchesWonObj;
}

module.exports = matchesWonPerTeam;
