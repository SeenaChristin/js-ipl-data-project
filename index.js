const matchesPerYear = require('./src/server/1-matches-per-year');
const matchesWonPerTeam = require('./src/server/2-matches-won-per-team-per-year');
const extraRuns2016 = require('./src/server/3-extra-runs-per-team-2016');
const topTenEcoBowlers = require('./src/server/4-top-10-economical-bowlers');
const tosMatchWinners = require('./src/server/5-toss-match-winners');
const playerOfTheMatch = require('./src/server/6-player-of-the-match');
const strikeRate = require('./src/server/7-strike-rate-each-season');
const highestDismisal = require('./src/server/8-highest-dismisal');
const bestEcoSuperOver = require('./src/server/9-bestEconomySuperOver');

const matchesCsvPath = './src/data/matches.csv';
const deliveriesCsvPath = './src/data/deliveries.csv';

const outputPath1 = './src/public/output/matchesPerYear.json';
const outputPath2 = './src/public/output/matchesWonPerTeamPerYear.json';
const outputPath3 = './src/public/output/extrarunsPerTeam2016.json';
const outputPath4 = './src/public/output/top10EcoPlayers2015.json';
const outputPath5 = './src/public/output/tossMatchWinners.json';
const outputPath6 = './src/public/output/playerOfTheMatch.json';
const outputPath7 = './src/public/output/strikeRateEachSeason.json';
const outputPath8 = './src/public/output/highestDismissal.json';
const outputPath9 = './src/public/output/bestEcpSuperPlayer.json';

const fs = require('fs');
const batsman = 'MS Dhoni';

// Function to convert csv to Json
function getJson(filePath) {
  const fs = require('fs');
  const delimiter = ',';
  const data = fs.readFileSync(filePath, 'utf8');
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map((v) => {
      const values = v.split(delimiter);
      const rowData = titles.reduce((obj, title, index) => {
        obj[title] = values[index];
        return obj;
      }, {});
      return rowData;
    });
}

//Function to write output into Json file
function writeOutput(outputObj, filePath) {
  var jsonString = JSON.stringify(outputObj);
  fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });
}

//Problem1
let output1 = matchesPerYear(getJson(matchesCsvPath));
writeOutput(output1, outputPath1);

//Problem2
let output2 = matchesWonPerTeam(getJson(matchesCsvPath));
writeOutput(output2, outputPath2);

//Problem3
let output3 = extraRuns2016(
  getJson(matchesCsvPath),
  getJson(deliveriesCsvPath),
);
writeOutput(output3, outputPath3);

//Problem4
let output4 = topTenEcoBowlers(
  getJson(matchesCsvPath),
  getJson(deliveriesCsvPath),
);
writeOutput(output4, outputPath4);

//Problem5
let output5 = tosMatchWinners(getJson(matchesCsvPath));
writeOutput(output5, outputPath5);

//Problem6
let output6 = playerOfTheMatch(getJson(matchesCsvPath));
writeOutput(output6, outputPath6);

//Problem7;
let output7 = strikeRate(
  getJson(matchesCsvPath),
  getJson(deliveriesCsvPath),
  batsman,
);
writeOutput(output7, outputPath7);

//Problem8;
let output8 = highestDismisal(getJson(deliveriesCsvPath));
writeOutput(output8, outputPath8);

//Problem9;
let output9 = bestEcoSuperOver(
  getJson(matchesCsvPath),
  getJson(deliveriesCsvPath),
);
writeOutput(output9, outputPath9);
