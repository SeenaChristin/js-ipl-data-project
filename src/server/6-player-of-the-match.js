function playerOfTheMatch(matchesData) {
  let playerOfTheMatchObj = {};
  let playerOfTheMatcMax = {};
  let result = {};
  matchesData.map((match) => {
    if (match.season != undefined) {
      if (playerOfTheMatchObj[match.season] != undefined) {
        if (
          playerOfTheMatchObj[match.season][match.player_of_match] != undefined
        ) {
          playerOfTheMatchObj[match.season][match.player_of_match] =
            playerOfTheMatchObj[match.season][match.player_of_match] + 1;
        } else {
          playerOfTheMatchObj[match.season][match.player_of_match] = 1;
        }
      } else {
        playerOfTheMatchObj[match.season] = {};
        playerOfTheMatchObj[match.season][match.player_of_match] = 1;
      }
    }
  });

  for (const year in playerOfTheMatchObj) {
    let obj = playerOfTheMatchObj[year];
    result[year] = {};
    let maxValue = 0;
    for (const key in obj) {
      const values = Object.values(obj);
      values.map((el) => {
        maxValue = Math.max(maxValue, el);
      });
    }
    for (const key in obj) {
      if (obj[key] == maxValue) {
        result[year][key] = obj[key];
      }
    }
  }

  return result;
}

module.exports = playerOfTheMatch;
