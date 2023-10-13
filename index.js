const matchesPerYear = require("./src/server/1-matches-per-year");
const matchesWonPerTeam = require("./src/server/2-matches-won-per-team-per-year");
const extraRuns2016 = require("./src/server/3-extra-runs-per-team-2016");
const fs = require("fs");
const matchesCsvPath = "./src/data/matches.csv";
const deliveriesCsvPath = "./src/data/deliveries.csv";

function getJson(filePath) {
  const fs = require("fs");
  const delimiter = ",";
  const data = fs.readFileSync(filePath, "utf8");
  const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter);
      const rowData = titles.reduce((obj, title, index) => {
        obj[title] = values[index];
        return obj;
      }, {});
      return rowData;
    });
}

const getMatchesJson = () => {};

const getDeliveriesJson = () => {
  const fs = require("fs");
  const { parse } = require("csv-parse");

  fs.createReadStream(
    "/Users/seenachristin/MountBlue/IPL Project/src/data/deliveries.csv"
  ).pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
    })
  );
  const data = [];

  fs.createReadStream(
    "/Users/seenachristin/MountBlue/IPL Project/src/data/deliveries.csv"
  )
    .pipe(
      parse({
        delimiter: ",",
        columns: true,
        ltrim: true,
      })
    )
    .on("data", function (row) {
      // This will push the object row into the array
      data.push(row);
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("end", function () {
      const jsonString = JSON.stringify(data);
      fs.writeFile(
        "/Users/seenachristin/MountBlue/IPL Project/src/data/deliveries.json",
        jsonString,
        (err) => {
          if (err) {
            console.log("Error writing file", err);
          } else {
            console.log("Successfully wrote file");
          }
        }
      );
    });
};

function writeOutput(outputObj, filePath) {
  var jsonString = JSON.stringify(outputObj);
  fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
}

let output1 = matchesPerYear(getJson(matchesCsvPath));
writeOutput(output1, "./src/public/output/matchesPerYear.json");

let output2 = matchesWonPerTeam(getJson(matchesCsvPath));
writeOutput(output2, "./src/public/output/matchesWonPerTeamPerYear.json");

let output3 = extraRuns2016(
  getJson(matchesCsvPath),
  getJson(deliveriesCsvPath)
);
writeOutput(output3, "./src/public/output/extrarunsPerTeam2016.json");
