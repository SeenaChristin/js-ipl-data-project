const getMatchesJson = require("../data/getMatchesJson");
const matchesWonPerTeam = require("../server/2-matches-won-per-team-per-year.js");
matchesWonPerTeam(getMatchesJson());
