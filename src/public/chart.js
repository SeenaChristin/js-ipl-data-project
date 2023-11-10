/* eslint-disable no-prototype-builtins */
/* global Highcharts */
async function readJsonFile(fileName) {
  try {
    const response = await fetch(`./output/${fileName}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

function printChart1(data) {
  Highcharts.chart('chart1', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'MatchesPerYear',
    },
    xAxis: {
      title: {
        text: 'Year',
      },
      categories: Object.keys(data),
    },
    yAxis: {
      title: {
        text: 'No of matches',
      },
    },
    series: [
      {
        name: 'Year',
        data: Object.values(data),
      },
    ],
  });
}

function printChart2(data) {
  let result = [];
  let names = {};
  let arr = Object.entries(data);
  arr.map((record) => {
    let arrofNames = Object.keys(record[1]);
    arrofNames.map((name) => {
      if (name != '' && name != undefined) {
        names[name] = [];
      }
    });
  });
  for (let key in names) {
    arr.map((record) => {
      if (record[1].hasOwnProperty(key)) {
        names[key].push(record[1][key]);
      } else {
        names[key].push(0);
      }
    });
  }
  for (let key in names) {
    let series = {};
    series.name = key;
    series.data = names[key];
    result.push(series);
  }

  // console.log(names);
  Highcharts.chart('chart2', {
    chart: {
      type: 'column',
      zoomType: 'xy',
    },
    title: {
      text: 'MatchesWonPerTeamPerYear',
    },
    xAxis: {
      title: {
        text: 'Year',
      },
      categories: Object.keys(data),
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'No of matches',
      },
    },
    series: result,
  });
}

function printChart3(data) {
  Highcharts.chart('chart3', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Extra Runs per Team 2016',
    },
    xAxis: {
      title: {
        text: 'Teams',
      },
      categories: Object.keys(data),
    },
    series: [
      {
        name: 'Extra Runs',
        data: Object.values(data),
      },
    ],
  });
}

function printChart4(data) {
  Highcharts.chart('chart4', {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Top ten Economic Players 2105',
    },
    xAxis: {
      title: {
        text: 'Bowlers',
      },
      categories: Object.keys(data),
    },
    yAxis: {
      title: {
        text: 'Extra Runs',
      },
    },
    series: [
      {
        name: 'Eco Rate',
        data: Object.values(data),
      },
    ],
  });
}

function printChart5(data) {
  Highcharts.chart('chart5', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Toss and Match Winners',
    },
    xAxis: {
      categories: Object.keys(data),
      title: {
        text: 'Teams',
      },
    },
    yAxis: {},
    series: [
      {
        name: 'Winning times',
        data: Object.values(data),
      },
    ],
  });
}

function printChart6(data) {
  let result = [];
  let index = 0;
  let size = Object.keys(data).length;
  for (const year in data) {
    for (const team in data[year]) {
      let series = { name: '', data: [] };
      series.data.length = size;
      series.data.fill(0);
      if (team != '' && team != undefined) {
        series.name = team;
        series.data[index] = data[year][team];
        result.push(series);
      }
    }
    index++;
  }
  Highcharts.chart('chart6', {
    chart: {
      type: 'column',
      zoomType: 'xy',
    },
    title: {
      text: 'Player of the match per year',
    },
    xAxis: {
      title: {
        text: 'Year',
      },
      categories: Object.keys(data),
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'No of times Player of the Match',
      },
    },
    series: result,
  });
}

function printChart7(data) {
  Highcharts.chart('chart7', {
    chart: {
      type: 'line',
      zoomType: 'xy',
    },
    title: {
      text: 'Strike Rate Each Season of MS Dhoni',
    },
    xAxis: {
      title: {
        text: 'Year',
      },
      categories: Object.keys(data),
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Strike Rate',
      },
    },
    series: [
      {
        data: Object.values(data),
      },
    ],
  });
}

function printChart8(data) {
  let result = [];
  for (const key in data) {
    let series = { name: '', data: [] };
    series.name =
      data[key]['batsman'] + ' dismissed by ' + data[key]['dismissedBy'];
    series.data.push(data[key]['HighestNumber']);
    result.push(series);
  }
  Highcharts.chart('chart8', {
    chart: {
      type: 'column',
      zoomType: 'xy',
    },
    title: {
      text: 'Highest Dissmisal',
    },
    xAxis: {
      title: {
        text: 'Year',
      },
      categories: Object.keys(data),
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Strike Rate',
      },
    },
    series: result,
  });
}

function printChart9(data) {
  Highcharts.chart('chart9', {
    chart: {
      type: 'scatter',
      zoomType: 'xy',
    },
    title: {
      text: 'Best Eco Rate',
    },
    xAxis: {
      title: {
        text: 'Bowler',
      },
      categories: Object.keys(data),
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Eco Rate',
      },
    },
    series: [
      {
        data: Object.values(data),
      },
    ],
  });
}

function main() {
  let pr1 = readJsonFile('matchesPerYear.json');
  pr1.then((data) => {
    printChart1(data);
  });
  let pr2 = readJsonFile('matchesWonPerTeamPerYear.json');
  pr2.then((data) => {
    printChart2(data);
  });
  let pr3 = readJsonFile('extrarunsPerTeam2016.json');
  pr3.then((data) => {
    printChart3(data);
  });
  let pr4 = readJsonFile('top10EcoPlayers2015.json');
  pr4.then((data) => {
    printChart4(data);
  });
  let pr5 = readJsonFile('tossMatchWinners.json');
  pr5.then((data) => {
    printChart5(data);
  });
  let pr6 = readJsonFile('playerOfTheMatch.json');
  pr6.then((data) => {
    printChart6(data);
  });
  let pr7 = readJsonFile('strikeRateEachSeason.json');
  pr7.then((data) => {
    printChart7(data);
  });
  let pr8 = readJsonFile('highestDismissal.json');
  pr8.then((data) => {
    printChart8(data);
  });
  let pr9 = readJsonFile('bestEcpSuperPlayer.json');
  pr9.then((data) => {
    printChart9(data);
  });
}

main();
