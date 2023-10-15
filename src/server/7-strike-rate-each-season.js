function strikeRate(matchesData, delioveriesData, batsman) {
  let strikeRateData = {};
  let result = {};
  matchesData.map((match) => {
    delioveriesData.map((delivery) => {
      if (
        match.season != undefined &&
        delivery.match_id == match.id &&
        delivery.batsman == batsman
      ) {
        if (strikeRateData[match.season] != undefined) {
          strikeRateData[match.season].runs =
            strikeRateData[match.season].runs + parseInt(delivery.batsman_runs);
          if (
            delivery.wide_runs == 0 &&
            //  delivery.bye_runs == 0
            //  delivery.legbye_runs == 0 &&
            delivery.noball_runs == 0
          ) {
            strikeRateData[match.season].balls =
              strikeRateData[match.season].balls + 1;
          }
        } else {
          let ballVal = 0;
          if (delivery.wide_runs == 0 && delivery.noball_runs == 0) {
            ballVal = 1;
          }
          strikeRateData[match.season] = {
            balls: ballVal,
            runs: parseInt(delivery.batsman_runs),
          };
        }
      }
    });
  });
  for (const key in strikeRateData) {
    result[key] = (strikeRateData[key].runs / strikeRateData[key].balls) * 100;
  }
  return result;
}

module.exports = strikeRate;
