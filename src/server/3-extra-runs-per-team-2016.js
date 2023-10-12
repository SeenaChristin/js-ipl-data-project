const fs = require("fs");

function extraRuns2016(matchesData) {
  let extraRuns = new Map();
  matchesData.map((match, index) => {
    if (match.season == 2016) {
      if (extraRuns.has(match.winner)) {
        extraRuns.set(
          match.winner,
          extraRuns.get(match.winner) + parseInt(match.win_by_runs)
        );
      } else if (match.winner) {
        extraRuns.set(match.winner, parseInt(match.win_by_runs));
      }
    }
  });

  var obj = Object.fromEntries(extraRuns);
  var jsonString = JSON.stringify(obj);
  fs.writeFile(
    "/Users/seenachristin/MountBlue/IPL Project/src/public/output/extrarunsPerTeam2016.json",
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

module.exports = extraRuns2016;
