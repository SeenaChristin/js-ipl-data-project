function extraRuns2016(matchesData, deliveriesData) {
  let extraRuns = {};
  matchesData.map((match, index) => {
    if (match.season == 2016) {
      deliveriesData.map((delivery) => {
        if (delivery.match_id == match.id) {
          if (extraRuns[delivery.bowling_team] != undefined) {
            extraRuns[delivery.bowling_team] =
              parseInt(extraRuns[delivery.bowling_team]) +
              parseInt(delivery.extra_runs);
          } else {
            extraRuns[delivery.bowling_team] = parseInt(delivery.extra_runs);
          }
        }
      });
    }
  });
  return extraRuns;
}

module.exports = extraRuns2016;
