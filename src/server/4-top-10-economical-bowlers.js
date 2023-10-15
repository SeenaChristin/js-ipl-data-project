function topTenEcoBowlers(matchesData, deliveriesData) {
  let bowlerData = {};
  let ecorateObj = {};
  let ecorateArr = [];
  matchesData.map((match) => {
    if (match.season == "2015") {
      deliveriesData.map((delivery) => {
        if (delivery.bowler != undefined && delivery.match_id == match.id) {
          if (bowlerData[delivery.bowler] != undefined) {
            if (delivery.wide_runs == "0" && delivery.noball_runs == "0") {
              bowlerData[delivery.bowler].balls =
                bowlerData[delivery.bowler].balls + 1;
            }
            bowlerData[delivery.bowler].totalRuns =
              bowlerData[delivery.bowler].totalRuns +
              parseInt(delivery.total_runs);
          } else {
            bowlerData[delivery.bowler] = {
              balls: 1,
              totalRuns: parseInt(delivery.total_runs),
            };
          }
        }
      });
    }
  });

  for (const bowler in bowlerData) {
    const obj = bowlerData[bowler];
    for (const balls in obj) {
      let ecorate = (obj.totalRuns / obj.balls) * 6;
      if (!isNaN(ecorate)) {
        ecorateObj[bowler] = ecorate;
      }
    }
  }
  ecorateArr = Object.entries(ecorateObj);
  ecorateArr.sort((a, b) => (a[1] > b[1] ? 1 : -1));
  if (ecorateArr.length > 10) ecorateArr.length = 10;
  return Object.fromEntries(ecorateArr);
}

module.exports = topTenEcoBowlers;
