const playerOfTheMatch = require("../server/6-player-of-the-match");

test("Calculates matches per year correctly", () => {
  const input = [
    {
      season: "2008",
      player_of_match: "YK Pathan",
    },
    {
      season: "2008",
      player_of_match: "YK Pathan",
    },
    {
      season: "2008",
      player_of_match: "CH Gayle",
    },
    {
      season: "2011",
      player_of_match: "MEK Hussey",
    },
    {
      season: "2011",
      player_of_match: "MEK Hussey",
    },
    {
      season: "2011",
      player_of_match: "GJ Maxwell",
    },
    {
      season: "2011",
      player_of_match: "GJ Maxwell",
    },
    {
      season: "2013",
      player_of_match: "DA Warner",
    },
    {
      season: "2013",
      player_of_match: "GJ Maxwell",
    },
    {
      season: "2013",
      player_of_match: "GJ Maxwell",
    },
    {
      season: "2013",
      player_of_match: "GJ Maxwell",
    },
    {
      season: "2013",
      player_of_match: "DA Warner",
    },
  ];

  const expectedOutput = {
    2008: { "YK Pathan": 2 },
    2011: { "MEK Hussey": 2, "GJ Maxwell": 2 },
    2013: { "GJ Maxwell": 3 },
  };

  const result = playerOfTheMatch(input);
  // console.log(result);
  expect(result).toEqual(expectedOutput);
});
