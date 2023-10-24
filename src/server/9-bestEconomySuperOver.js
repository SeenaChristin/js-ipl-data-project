function bestEcoSuperOver(matchesData, deliveriesData) {
  let bowlerData = {};
  let ecorateObj = {};
  let ecorateArr = [];

  deliveriesData.map((delivery) => {
    if (
      delivery.bowler != undefined &&
      delivery.is_super_over != 0 &&
      delivery.is_super_over != ''
    ) {
      if (bowlerData[delivery.bowler] != undefined) {
        if (delivery.wide_runs == 0 && delivery.noball_runs == 0) {
          bowlerData[delivery.bowler].balls =
            bowlerData[delivery.bowler].balls + 1;
        }
        bowlerData[delivery.bowler].totalRuns =
          bowlerData[delivery.bowler].totalRuns + parseInt(delivery.total_runs);
      } else {
        bowlerData[delivery.bowler] = {
          balls: 1,
          totalRuns: parseInt(delivery.total_runs),
        };
      }
    }
  });

  //Calculation for economic rate
  for (const bowler in bowlerData) {
    const obj = bowlerData[bowler];
    for (const key in obj) {
      if (key != null) {
        let ecorate = (obj.totalRuns / obj.balls) * 6;
        if (!isNaN(ecorate)) {
          ecorateObj[bowler] = ecorate;
        }
      }
    }
  }

  //Sorting for lowest ecorate
  ecorateArr = Object.entries(ecorateObj);
  ecorateArr.sort((a, b) => a[1] - b[1]);
  ecorateArr = ecorateArr.slice(0, 1);
  return Object.fromEntries(ecorateArr);
}

module.exports = bestEcoSuperOver;
