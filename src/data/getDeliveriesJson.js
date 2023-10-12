const getDeliveriesJson = () => {
  const fs = require("fs");
  const { parse } = require("csv-parse");

  fs.createReadStream(
    "/Users/seenachristin/MountBlue/IPL Project/src/data/deliveries.csv"
  ).pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
    })
  );
  const data = [];

  fs.createReadStream(
    "/Users/seenachristin/MountBlue/IPL Project/src/data/deliveries.csv"
  )
    .pipe(
      parse({
        delimiter: ",",
        columns: true,
        ltrim: true,
      })
    )
    .on("data", function (row) {
      // This will push the object row into the array
      data.push(row);
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("end", function () {
      //console.log("parsed csv data:");
      // console.log(data);
      const jsonString = JSON.stringify(data);
      fs.writeFile(
        "/Users/seenachristin/MountBlue/IPL Project/src/data/deliveries.json",
        jsonString,
        (err) => {
          if (err) {
            console.log("Error writing file", err);
          } else {
            console.log("Successfully wrote file");
          }
        }
      );
    });
};

module.exports = getDeliveriesJson;
