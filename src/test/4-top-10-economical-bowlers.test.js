const topTenEcoBowlers = require('../server/4-top-10-economical-bowlers');

test('Calculates top ten economical bowlers correctly', () => {
  const matches = [
    { id: 1, season: '2015' },
    { id: 2, season: '2008' },
    { id: 3, season: '2015' },
    { id: 4, season: '2009' },
    { id: 5, season: '2015' },
    { id: 6, season: '2015' },
    { id: 7, season: '2009' },
    { id: 8, season: '2015' },
    { id: 9, season: '2015' },
    { id: 10, season: '2009' },
    { id: 11, season: '2015' },
    { id: 12, season: '2015' },
    { id: 13, season: '2009' },
    { id: 14, season: '2015' },
    { id: 15, season: '2015' },
    { id: 16, season: '2015' },
  ];

  const deliveries = [
    {
      match_id: 1,
      bowler: 'TS Mills',
      wide_runs: 0,
      noball_runs: 0,
      total_runs: 1,
    },
    {
      match_id: 2,
      bowler: 'A Choudhary',
      wide_runs: 0,
      noball_runs: 1,
      total_runs: 1,
    },
    {
      match_id: 3,
      bowler: 'S Aravind',
      wide_runs: 1,
      noball_runs: 0,
      total_runs: 2,
    },
    {
      match_id: 4,
      bowler: 'TS Mills',
      wide_runs: 0,
      noball_runs: 0,
      total_runs: 1,
    },
    {
      match_id: 5,
      bowler: 'A Choudhary',
      wide_runs: 0,
      noball_runs: 0,
      total_runs: 1,
    },
    {
      match_id: 6,
      bowler: 'S Aravind',
      wide_runs: 0,
      noball_runs: 1,
      total_runs: 2,
    },
    {
      match_id: 7,
      bowler: 'TS Mills',
      wide_runs: 1,
      noball_runs: 0,
      total_runs: 1,
    },
    {
      match_id: 8,
      bowler: 'A Choudhary',
      wide_runs: 0,
      noball_runs: 0,
      total_runs: 1,
    },
    {
      match_id: 9,
      bowler: 'S Aravind',
      wide_runs: 0,
      noball_runs: 0,
      total_runs: 2,
    },
    {
      match_id: 10,
      bowler: 'TS Mills',
      wide_runs: 0,
      noball_runs: 1,
      total_runs: 1,
    },
    {
      match_id: 11,
      bowler: 'A Choudhary',
      wide_runs: 1,
      noball_runs: 0,
      total_runs: 1,
    },
    {
      match_id: 12,
      bowler: 'S Aravind',
      wide_runs: 0,
      noball_runs: 0,
      total_runs: 2,
    },
    {
      match_id: 13,
      bowler: 'TS Mills',
      wide_runs: 0,
      noball_runs: 0,
      total_runs: 1,
    },
    {
      match_id: 14,
      bowler: 'A Choudhary',
      wide_runs: 0,
      noball_runs: 1,
      total_runs: 1,
    },
    {
      match_id: 15,
      bowler: 'S Aravind',
      wide_runs: 1,
      noball_runs: 0,
      total_runs: 2,
    },
    {
      match_id: 16,
      bowler: 'TS Mills',
      wide_runs: 0,
      noball_runs: 0,
      total_runs: 1,
    },
  ];

  const expectedOutput = {
    'A Choudhary': 24,
    'S Aravind': 60,
    'TS Mills': 12,
  };

  const result = topTenEcoBowlers(matches, deliveries);

  expect(result).toEqual(expectedOutput);
});
