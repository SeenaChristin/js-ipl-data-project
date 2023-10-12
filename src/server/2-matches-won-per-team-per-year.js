const fs = require("fs");

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

  //var obj = Object.fromEntries(matchesWonObj);
  var jsonString = JSON.stringify(matchesWonObj);
  //console.log(jsonString);
  fs.writeFile(
    "/Users/seenachristin/MountBlue/IPL Project/src/public/output/matchesWonPerTeamPerYear.json",
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

module.exports = matchesWonPerTeam;
