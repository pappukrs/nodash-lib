const nodash = require("nodash");
// let jsondata = { id: 1, first_name: "john", last_name: "white" };
// const p = nodash.writeAsCSV(`${__dirname}/tmp/data.csv`, jsondata); // returns a promise
// console.log("isBoolean", nodash.isBoolean(4 === 4));
console.log("typeOf", nodash.typeOf(4 === 4));
console.log("typeOf", nodash.typeOf(4));
console.log("typeOf", nodash.typeOf("4"));
console.log("typeof", nodash.typeOf({}));
console.log("typeOf", nodash.typeOf([]));
