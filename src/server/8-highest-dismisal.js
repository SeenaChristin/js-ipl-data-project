function highestDismisal(delioveriesData) {
  let highestDismisalData = {};
  let result = {};
  delioveriesData.map((delivery) => {
    if (
      delivery.player_dismissed != undefined &&
      delivery.player_dismissed != "" &&
      delivery.bowler != undefined
    ) {
      if (highestDismisalData[delivery.player_dismissed] != undefined) {
        if (
          highestDismisalData[delivery.player_dismissed][delivery.bowler] !=
          undefined
        ) {
          highestDismisalData[delivery.player_dismissed][delivery.bowler]++;
        } else {
          highestDismisalData[delivery.player_dismissed][delivery.bowler] = 1;
        }
      } else {
        highestDismisalData[delivery.player_dismissed] = {};
        highestDismisalData[delivery.player_dismissed][delivery.bowler] = 1;
      }
    }
  });

  let maxValue = 0;
  let batsman = "";
  let bowler = "";
  for (const batsmanName in highestDismisalData) {
    let obj = highestDismisalData[batsmanName];
    // console.log(obj);
    for (let key in obj) {
      if (maxValue < obj[key]) {
        maxValue = obj[key];
        batsman = batsmanName;
        bowler = key;
      }
    }
  }
  result.batsmanName = batsman;
  result.dismissedBy = bowler;
  result.HighestNumber = maxValue;

  return result;
}

module.exports = highestDismisal;
