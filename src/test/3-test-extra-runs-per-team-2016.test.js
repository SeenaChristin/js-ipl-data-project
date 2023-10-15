const extraRuns2016 = require("../server/3-extra-runs-per-team-2016");

test("Calculates matches per year correctly", () => {
  const input1 = [
    { id: 1, season: "2016" },
    { id: 2, season: "2008" },
    { id: 3, season: "2016" },
    { id: 4, season: "2009" },
    { id: 5, season: "2016" },
    { id: 6, season: "2016" },
    { id: 7, season: "2009" },
    { id: 8, season: "2016" },
    { id: 9, season: "2016" },
    { id: 10, season: "2009" },
    { id: 11, season: "2016" },
    { id: 12, season: "2016" },
    { id: 13, season: "2009" },
    { id: 14, season: "2016" },
    { id: 15, season: "2016" },
    { id: 16, season: "2016" },
  ];

  const input2 = [
    { match_id: 1, bowling_team: "Delhi Daredevils", extra_runs: 1 },
    { match_id: 2, bowling_team: "Sunrisers Hyderabad", extra_runs: 1 },
    { match_id: 3, bowling_team: "Rising Pune Supergiant", extra_runs: 1 },
    { match_id: 4, bowling_team: "Delhi Daredevils", extra_runs: 1 },
    { match_id: 5, bowling_team: "Sunrisers Hyderabad", extra_runs: 2 },
    { match_id: 6, bowling_team: "Rising Pune Supergiant", extra_runs: 2 },
    { match_id: 7, bowling_team: "Delhi Daredevils", extra_runs: 2 },
    { match_id: 8, bowling_team: "Sunrisers Hyderabad", extra_runs: 2 },
    { match_id: 9, bowling_team: "Rising Pune Supergiant", extra_runs: 0 },
    { match_id: 10, bowling_team: "Delhi Daredevils", extra_runs: 0 },
    { match_id: 11, bowling_team: "Sunrisers Hyderabad", extra_runs: 0 },
    { match_id: 12, bowling_team: "Rising Pune Supergiant", extra_runs: 0 },
    { match_id: 13, bowling_team: "Delhi Daredevils", extra_runs: 1 },
    { match_id: 14, bowling_team: "Sunrisers Hyderabad", extra_runs: 1 },
    { match_id: 15, bowling_team: "Rising Pune Supergiant", extra_runs: 1 },
    { match_id: 16, bowling_team: "Delhi Daredevils", extra_runs: 1 },
  ];

  const expectedOutput = {
    "Delhi Daredevils": 2,
    "Sunrisers Hyderabad": 5,
    "Rising Pune Supergiant": 4,
  };

  const result = extraRuns2016(input1, input2);

  expect(result).toEqual(expectedOutput);
});
