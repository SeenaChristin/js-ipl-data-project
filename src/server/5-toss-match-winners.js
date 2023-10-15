function tossMatchWinners(matchesData) {
  let tossAndMatchWinners = {};
  matchesData.map((match) => {
    if (match.toss_winner != undefined) {
      if (tossAndMatchWinners[match.toss_winner] != undefined) {
        if (match.toss_winner == match.winner) {
          tossAndMatchWinners[match.toss_winner] =
            tossAndMatchWinners[match.toss_winner] + 1;
        }
      } else {
        if (match.toss_winner == match.winner) {
          tossAndMatchWinners[match.toss_winner] = 1;
        } else {
          tossAndMatchWinners[match.toss_winner] = 0;
        }
      }
    }
  });
  return tossAndMatchWinners;
}

module.exports = tossMatchWinners;
