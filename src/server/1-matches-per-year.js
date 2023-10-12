const fs = require("fs");

function matchesPerYear(matchesData) {
  let yearMap = new Map();
  matchesData.map((match, index) => {
    if (yearMap.has(match.season)) {
      yearMap.set(match.season, yearMap.get(match.season) + 1);
    } else if (match.season) {
      yearMap.set(match.season, 0);
    }
  });

  var obj = Object.fromEntries(yearMap);
  var jsonString = JSON.stringify(obj);
  fs.writeFile(
    "/Users/seenachristin/MountBlue/IPL Project/src/public/output/matchesPerYear.json",
    jsonString,
    (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    }
  );
}

module.exports = matchesPerYear;
