const matchesWonPerTeam = require("../server/2-matches-won-per-team-per-year");

test("Calculates matches per year correctly", () => {
  const input = [
    { winner: "Pune", season: "2009" },
    { winner: "Mumbai", season: "2008" },
    { winner: "Gujarat", season: "2007" },
    { winner: "Gujarat", season: "2009" },
    { winner: "RCB", season: "2008" },
    { winner: "Punjab", season: "2007" },
    { winner: "Pune", season: "2009" },
    { winner: "RCB", season: "2008" },
    { winner: "RCB", season: "2007" },
    { winner: "Mumbai", season: "2009" },
    { winner: "Pune", season: "2008" },
    { winner: "Gujarat", season: "2007" },
    { winner: "Mumbai", season: "2009" },
    { winner: "RCB", season: "2008" },
    { winner: "Punjab", season: "2007" },
    { winner: "Mumbai", season: "2009" },
  ];

  const expectedOutput = {
    2007: { Gujarat: 2, RCB: 1, Punjab: 2 },
    2008: { RCB: 3, Mumbai: 1, Pune: 1 },
    2009: { Pune: 2, Gujarat: 1, Mumbai: 3 },
  };

  const result = matchesWonPerTeam(input);

  expect(result).toEqual(expectedOutput);
});
