function matchesPerYear(matchesData) {
  let yearMap = new Map();
  matchesData.map((match) => {
    if (yearMap.has(match.season)) {
      yearMap.set(match.season, yearMap.get(match.season) + 1);
    } else if (match.season) {
      yearMap.set(match.season, 1);
    }
  });
  var obj = Object.fromEntries(yearMap);
  return obj;
}

module.exports = matchesPerYear;
