const getMatchesJson = () => {
  const fs = require("fs");
  const delimiter = ",";
  const data = fs.readFileSync(
    "/Users/seenachristin/MountBlue/IPL Project/src/data/matches.csv",
    "utf8"
  );
  const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter);
      const rowData = titles.reduce((obj, title, index) => {
        obj[title] = values[index];
        return obj;
      }, {});
      return rowData;
    });
};
module.exports = getMatchesJson;
