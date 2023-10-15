const strikeRate = require("../server/7-strike-rate-each-season");

test("Calculates matches per year correctly", () => {
  const input1 = [
    { id: 1, season: "2007" },
    { id: 2, season: "2007" },
    { id: 3, season: "2007" },
    { id: 4, season: "2007" },
    { id: 5, season: "2007" },
    { id: 6, season: "2008" },
    { id: 7, season: "2008" },
    { id: 8, season: "2008" },
    { id: 9, season: "2008" },
    { id: 10, season: "2008" },
    { id: 11, season: "2009" },
    { id: 12, season: "2009" },
    { id: 13, season: "2009" },
    { id: 14, season: "2009" },
    { id: 15, season: "2009" },
    { id: 16, season: "2009" },
  ];

  const input2 = [
    {
      match_id: 1,
      batsman: "MS Dhoni",
      wide_runs: 0,
      noball_runs: 0,
      batsman_runs: 1,
    },
    {
      match_id: 2,
      batsman: "MS Dhoni",
      wide_runs: 0,
      noball_runs: 1,
      batsman_runs: 1,
    },
    {
      match_id: 3,
      batsman: "MS Dhoni",
      wide_runs: 1,
      noball_runs: 0,
      batsman_runs: 2,
    },
    {
      match_id: 4,
      batsman: "MS Dhoni",
      wide_runs: 0,
      noball_runs: 0,
      batsman_runs: 1,
    },
    {
      match_id: 5,
      batsman: "MS Dhoni",
      wide_runs: 0,
      noball_runs: 0,
      batsman_runs: 1,
    },
    {
      match_id: 6,
      batsman: "MS Dhoni",
      wide_runs: 0,
      noball_runs: 1,
      batsman_runs: 4,
    },
    {
      match_id: 7,
      batsman: "MS Dhoni",
      wide_runs: 1,
      noball_runs: 0,
      batsman_runs: 2,
    },
    {
      match_id: 8,
      batsman: "MS Dhoni",
      wide_runs: 0,
      noball_runs: 0,
      batsman_runs: 2,
    },
    {
      match_id: 9,
      batsman: "MS Dhoni",
      wide_runs: 0,
      noball_runs: 0,
      batsman_runs: 4,
    },
    {
      match_id: 10,
      batsman: "MS Dhoni",
      wide_runs: 0,
      noball_runs: 0,
      batsman_runs: 0,
    },
    {
      match_id: 11,
      batsman: "MS Dhoni",
      wide_runs: 1,
      noball_runs: 0,
      batsman_runs: 1,
    },
    {
      match_id: 12,
      batsman: "MS Dhoni",
      wide_runs: 0,
      noball_runs: 0,
      batsman_runs: 2,
    },
    {
      match_id: 13,
      batsman: "MS Dhoni",
      wide_runs: 0,
      noball_runs: 0,
      batsman_runs: 1,
    },
    {
      match_id: 14,
      batsman: "MS Dhoni",
      wide_runs: 0,
      noball_runs: 1,
      batsman_runs: 1,
    },
    {
      match_id: 15,
      batsman: "MS Dhoni",
      wide_runs: 1,
      noball_runs: 0,
      batsman_runs: 2,
    },
    {
      match_id: 16,
      batsman: "MS Dhoni",
      wide_runs: 0,
      noball_runs: 1,
      batsman_runs: 1,
    },
  ];
  const expectedOutput = {
    2007: 200,
    2008: 400,
    2009: 400,
  };

  const result = strikeRate(input1, input2, "MS Dhoni");

  expect(result).toEqual(expectedOutput);
});
