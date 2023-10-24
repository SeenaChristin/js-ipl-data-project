const highestDismisal = require('../server/8-highest-dismisal');

test('Calculates matches per year correctly', () => {
  const input = [
    { player_dismissed: 'MS Dhoni', bowler: 'TS Mills' },
    { player_dismissed: 'V Kholi', bowler: 'A Choudhary' },
    { player_dismissed: 'DA Warner', bowler: 'S Aravind' },
    { player_dismissed: 'MS Dhoni', bowler: 'TS Mills' },
    { player_dismissed: 'V Kholi', bowler: 'TS Mills' },
    { player_dismissed: 'DA Warner', bowler: 'TS Mills' },
    { player_dismissed: 'MS Dhoni', bowler: 'TS Mills' },
    { player_dismissed: 'V Kholi', bowler: 'A Choudhary' },
    { player_dismissed: 'DA Warner', bowler: 'S Aravind' },
    { player_dismissed: 'MS Dhoni', bowler: 'TS Mills' },
    { player_dismissed: 'V Kholi', bowler: 'TS Mills' },
    { player_dismissed: 'DA Warner', bowler: 'TS Mills' },
    { player_dismissed: 'MS Dhoni', bowler: 'TS Mills' },
    { player_dismissed: 'V Kholi', bowler: 'A Choudhary' },
    { player_dismissed: 'DA Warner', bowler: 'S Aravind' },
    { player_dismissed: 'MS Dhoni', bowler: 'S Aravind' },
    { player_dismissed: 'V Kholi', bowler: 'TS Mills' },
    { player_dismissed: 'DA Warner', bowler: 'TS Mills' },
  ];

  const expectedOutput = {
    batsmanName: 'MS Dhoni',
    dismissedBy: 'TS Mills',
    HighestNumber: 5,
  };

  const result = highestDismisal(input);

  expect(result).toEqual(expectedOutput);
});
