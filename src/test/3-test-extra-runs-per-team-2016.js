const getMatchesJson = require("../data/getMatchesJson");
const extraRuns2016 = require("../server/3-extra-runs-per-team-2016.js");
extraRuns2016(getMatchesJson());
