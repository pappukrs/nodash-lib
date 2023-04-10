const nodash = require("nodash");
// let jsondata = { id: 1, first_name: "john", last_name: "white" };
// const p = nodash.writeAsCSV(`${__dirname}/tmp/data.csv`, jsondata); // returns a promise
// console.log("isBoolean", nodash.isBoolean(4 === 4));
// console.log("typeOf", nodash.typeOf(4 === 4));
// console.log("typeOf", nodash.typeOf(4));
// console.log("typeOf", nodash.typeOf("4"));
// console.log("typeof", nodash.typeOf({}));
// console.log("typeOf", nodash.typeOf([]));

//function check

// function test() {
//   return "hi";
// }
// console.log("isFunction", nodash.isFunction(test));

//isUndefined check

// var name = "pappu";
// console.log("isUndefined", nodash.isUndefined(name));
// console.log(nodash);
// const num = 4;
// const str = "hello world";
// console.log("number check", nodash.isNumber(str));
// console.log("string checkup", nodash.isString(num));

const lodash = require("lodash");

// const randomVal = () => {
//   return nodash.ceiling(Math.random() * 100);
// };

// const arr = lodash.times(15, randomVal);
// console.log(arr, "arr");

// const original = {
//   name: "rajeev",
//   age: 24,
//   dob: "09-11-1987",
// };

// const copy = lodash.cloneDeep(original);
//  const copy = { ...original };

// copy.name = "rahul";
// copy.age = 30;
// copy.dob = "10-11-1965";
// console.log("original", original);
// console.log("copy", copy);

// const sortedArr = [20, 21, 21, 21, 23, 26, 26, 27, 27, 30];
// const uniqSorted = lodash.sortedUniq(sortedArr);
// console.log("uniqSorted", uniqSorted);

//lodash.assign

// const newObj = { ...copy, mbl: "918809501517", name: "rajesh" };
// console.log("newObj", newObj);
// console.log("original", original);
// console.log("copy", copy);

// const obj1 = {
//   brand: "hp",
//   ram: "8gb",
// };
// const obj2 = {
//   brand: "dell",
//   ram: "4gb",
//   processor: "i3",
// };

// const obj3 = lodash.assign({ price: "56k" }, obj2, obj1);
// console.log("obj3", obj3);

//lodash.find

// var users = [
//   { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
//   { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
//   { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
//   { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
// ];

// const filteredUser = lodash.find(users, { lastName: "Doe", gender: "female" });
// console.log("filteredUser", filteredUser);

//lodash.deburr
//it removes the combining diacritical marks

// const str = "déjà vu";
// console.log(lodash.deburr(str), "deburr");

// const str2 = "Juan José";
// console.log(lodash.deburr(str2), "debur str2");

// var posts = [
//   { id: "1abc", title: "First blog post", content: "..." },
//   { id: "2abc", title: "Second blog post", content: "..." },
//   // more blog posts
//   { id: "34abc", title: "The blog post we want", content: "..." },
//   // even more blog posts
// ];

// const post = lodash.keyBy(posts, "id");
// const filteredObj = post["34abc"];

// console.log("filteredObj", filteredObj);

// const numArr = [2, 4, 5, 6, 9];
// const res = lodash.reduce(numArr, (sum, ele) => sum + ele, 0);

// console.log("res", res);

var users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 28 },
  { name: "Bill", age: 65 },
  { name: "Emily", age: 17 },
  { name: "Jack", age: 30 },
];

lodash.reduce(users, (res, ele) => {}, {});

const obj1 = {};
const obj2 = {};
console.log(lodash.isEqual(obj1, obj2));

const arr1 = [2, 3, 4, 5, 6, 7, 8];
const arr2 = [4, 5, 6, 7, 8, 9, 10];
// console.log(arr1 === arr2, "arraycomprison");

console.log(lodash.isEqual(arr1, arr2), "arraycomprison");

const str1 = "suresh is a farmer";
const str2 = "suresh is a farmer";
console.log(lodash.isEqual(str1, str2), "STRING CHECK");

const num1 = 10;
const num2 = 10;
console.log(lodash.isEqual(num1, num2), "number comparison");
