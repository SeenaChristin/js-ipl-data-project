const getMatchesJson = require("../data/getMatchesJson");
const matchesPerYear = require("../server/1-matches-per-year");
matchesPerYear(getMatchesJson());
