const tossMatchWinners = require('../server/5-toss-match-winners');

test('Calculates toss and match winners correctly', () => {
  const matches = [
    {
      season: '2008',
      winner: 'Royal Challengers Bangalore',
      toss_winner: 'Royal Challengers Bangalore',
    },
    {
      season: '2009',
      winner: 'Royal Challengers Bangalore',
      toss_winner: 'Sunrisers Hyderabad',
    },
    {
      season: '2010',
      winner: 'Kolkata Knight Riders',
      toss_winner: 'Kolkata Knight Riders',
    },
    { season: '2011', winner: 'Mumbai Indians', toss_winner: 'Mumbai Indians' },
    {
      season: '2011',
      winner: 'Kolkata Knight Riders',
      toss_winner: 'Kolkata Knight Riders',
    },
    {
      season: '2012',
      winner: 'Royal Challengers Bangalore',
      toss_winner: 'Royal Challengers Bangalore',
    },
    {
      season: '2013',
      winner: 'Royal Challengers Bangalore',
      toss_winner: 'Royal Challengers Bangalore',
    },
    {
      season: '2013',
      winner: 'Royal Challengers Bangalore',
      toss_winner: 'Royal Challengers Bangalore',
    },
    {
      season: '2014',
      winner: 'Sunrisers Hyderabad',
      toss_winner: 'Sunrisers Hyderabad',
    },
    {
      season: '2015',
      winner: 'Gujarat Lions',
      toss_winner: 'Sunrisers Hyderabad',
    },
    { season: '2016', winner: 'Gujarat Lions', toss_winner: 'Mumbai Indians' },
    { season: '2016', winner: 'Mumbai Indians', toss_winner: 'Mumbai Indians' },
    { season: '2017', winner: 'Mumbai Indians', toss_winner: 'Mumbai Indians' },
    {
      season: '2017',
      winner: 'Sunrisers Hyderabad',
      toss_winner: 'Mumbai Indians',
    },
    { season: '2017', winner: 'Gujarat Lions', toss_winner: 'Gujarat Lions' },
  ];

  const expectedOutput = {
    'Royal Challengers Bangalore': 4,
    'Sunrisers Hyderabad': 1,
    'Mumbai Indians': 3,
    'Kolkata Knight Riders': 2,
    'Gujarat Lions': 1,
  };

  const result = tossMatchWinners(matches);

  expect(result).toEqual(expectedOutput);
});
