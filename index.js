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

// var users = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 28 },
//   { name: "Bill", age: 65 },
//   { name: "Emily", age: 17 },
//   { name: "Jack", age: 30 },
// ];

// lodash.reduce(users, (res, ele) => {}, {});

// const obj1 = {};
// const obj2 = {};
// console.log(lodash.isEqual(obj1, obj2));

// const arr1 = [2, 3, 4, 5, 6, 7, 8];
// const arr2 = [4, 5, 6, 7, 8, 9, 10];
// // console.log(arr1 === arr2, "arraycomprison");

// console.log(lodash.isEqual(arr1, arr2), "arraycomprison");

// const str1 = "suresh is a farmer";
// const str2 = "suresh is a farmer";
// console.log(lodash.isEqual(str1, str2), "STRING CHECK");

// const num1 = 10;
// const num2 = 10;
// console.log(lodash.isEqual(num1, num2), "number comparison");

// const numArray = [
//   1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10,
// ];

// const filtered = lodash.uniq(numArray);
// console.log("filtered", filtered);

// const strArray = ["ram", "suraj", "radha", "rohan"];
// console.log(lodash.includes(strArray, "ram"));

// let arr1s = ["mango", "apple", "orange"];
// let arr2s = ["orange", "banana", "cucumber"];
// let diff = lodash.difference(arr2s, arr1s);
// console.log("new_difference_array", diff);

// const intersectionArray = lodash.intersection(arr1s, arr2s);
// console.log("intersectionArray", intersectionArray);

// const object1 = {
//   name: "raju",
//   age: 24,
//   nestedObj: {
//     name: "shyam",
//     age: 34,
//     anotherNestedObj: {
//       name: "Raju",
//       age: 54,
//     },
//   },
// };

// const object2 = {
//   name: "raju",
//   age: 24,
//   nestedObj: {
//     name: "shyam",
//     age: 34,
//     anotherNestedObj: {
//       name: "Raju",
//       age: 54,
//     },
//   },
// };

// console.log("check equality", lodash.isEqual(object1, object2));
// console.log();

// //JSON.stringify comparison

// let nameObj1 = {
//   name: "rahul",
//   age: 24,
// };
// const nameObj2 = {
//   age: 24,
//   name: "rahul",
// };
// console.log(
//   "JSON.stringify comparison",
//   JSON.stringify(nameObj1) === JSON.stringify(nameObj2)
// );

//isEmpty method
// const emp_obj = {};
// console.log("emp_obj", lodash.isEmpty(emp_obj));
// const not_emp_obj = {
//   name: "raju",
// };
// console.log("not_empty_check", lodash.isEmpty(not_emp_obj));
// const empty_arr = [];
// console.log("empty_arr", lodash.isEmpty(empty_arr));
// empty_arr.push(3, 4, 5);
// console.log("not_empty_arr", lodash.isEmpty(empty_arr));
// const nullval = null;
// console.log("nullval", lodash.isEmpty(nullval));
// var something;
// console.log("something", lodash.isEmpty(something));

// const arrq1 = [1, 2];
// const arrq2 = [2, -5, 7, 8, 10, 1];
// const arrq3 = [-1, 2, 3, 4, 5, 1];
// const arrq4 = [9, 10, 11, 12, 13, 14, 1, 2];
// console.log(
//   "unique value identified",
//   lodash.union(arrq1, arrq2, arrq3, arrq4)
// );
// console.log(
//   "unique value intersection",
//   lodash.intersection(arrq1, arrq2, arrq3, arrq4)
// );

// const milliseconds = lodash.now();
// const now = new Date(milliseconds);

// // now.toLocaleString() 11/4/2023, 11:56:49 am
// console.log("toLocaleString", now.toLocaleString());

// //now.toLocaleDateString()  11/4/2023
// console.log("toLocaleDateString", now.toLocaleDateString());

// //now.toDateString()
// console.log("toDateString", now.toDateString());

// //now.toTimeString()
// console.log("toTimeString", now.toTimeString());

// //now.tolocaleTimeString
// console.log("tolocaleTimeString", now.toLocaleTimeString());

// //now.toISOString
// console.log("toISOString", now.toISOString());

// //now.toJSON
// console.log("toJSON", now.toJSON());

// //now.toString
// console.log("toString", now.toString());

// //now.toUTCString()
// console.log("toUTCString", now.toUTCString());

// console.log("MM DD", now.toString("MMM dd"));

// console.log("MMM DD", now.toString("MMM dd"));

// console.log("getHours", now.getHours());
// console.log("getMinutes", now.getMinutes());
// console.log("getSeconds", now.getSeconds());
// console.log("toDateString()", now.toDateString());
// console.log("getTime()", now.getTime());
// console.log("getFullYear", now.getFullYear());
// //now.getMonth gives month less than 1
// console.log("getMonth", now.getMonth() + 1);

// const dayName = (n) => {
//   console.log(typeof n);
//   console.log(n, "n");
//   switch (n) {
//     case 1:
//       return "Mon";
//       break;
//     case 2:
//       return "Tue";
//     case 3:
//       return "Wed";
//     case 4:
//       return "Thur";
//     case 5:
//       return "Fri";
//     case 6:
//       return "Sat";

//     default:
//       return "Sun";
//     // break;
//   }
// };

// console.log("getDay", dayName(+now.getDay()));

// const split = lodash.chunk([1, 2, 3, 4], 3);
// console.log("split", split);

// const objC1 = {
//   name: "pappu",
//   age: 24,
//   address: {
//     state: "Bihar",
//     city: "patna",
//   },
//   getAge() {
//     return 24;
//   },
//   joiningDate: new Date(),
// };

// const objC2 = lodash.clone(objC1);
// const objC2 = Object.assign({}, objC1);
// const objC2 = { ...objC1 };
// const objC2 = JSON.parse(JSON.stringify(objC1));
// console.log(lodash.isEqual(objC1, objC2));

// objC2.name = "pramodh";
// objC2.address.state = "karnatka";
// console.log("objC1", objC1);
// console.log("objC2", objC2);

// const arrOBJ = [
//   { name: "raj", age: 24 },
//   { name: "Rupesh", age: 35 },
// ];
// const clonearrOBJ = lodash.clone(arrOBJ);
// arrOBJ[0].name = "suraj";
// console.log("arrOBJ", arrOBJ);
// console.log("clonearrOBJ", clonearrOBJ);

// defer

// const msg = (n) => {
//   console.log(n);
// };
// lodash.defer(msg, "hello");

// lodash.times(10, () => console.log("ki"));
//lodash.defer stop function calling inside until current call stack get empty
// const stamp = (n) => {
//   console.log("n", n);
//   console.log("lodash.now()", lodash.now());
//   console.log(lodash.now() - n);
// };
// lodash.defer(stamp, lodash.now());
// console.log("difference b/w time");

//some strings methods
//lodash.camelCase remove all the special characters and finally make a camelcase letter with digit if included
// console.log(
//   lodash.camelCase("___12345&^%#FOOD_6789BLO$#$&&%$*$($$$($GGGER_HAI")
// );

// console.log(lodash.capitalize("____66666$%$$yahiooo^^%%$$&%%&&9772299"));

// console.log(lodash.clamp(-109, -5, 100), "clamp");

// The _.inRange() method takes a number, and checks to see if it is between given start and end parameters. If the end is not specified, then it is set equals to the start, and then start is set equals 0. If the start is greater than the end the parameters are swapped to support negative ranges.
// console.log(lodash.inRange(10, 8, 17), "rangeCheck");
// console.log(lodash.inRange(2, 3, 5), "rangeCheck");

// console.log(lodash.inRange(-5, -5, -1), "inRangeChecked");
// console.log(lodash.random(5, 1, true), "randomNumber");
// console.log(lodash.random(1.2), "randomCheckrd");

// var objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];

// const sum = lodash.sumBy(objects, (o) => {
//   return o.n;
// });
// const sum = lodash.sumBy(objects, "n");
// console.log(sum, "sum");
// console.log(lodash.sum([2, 3, 5, 7]));
// console.log(lodash.subtract(7, 3));
// console.log(lodash.round(7.876, 1));
// console.log(lodash.multiply(8, 9));
// console.log(lodash.round(lodash.divide(11, 9), 3));

// console.log(lodash.min([4, 2, 5, 8, -9]));
// console.log(lodash.max([4, 2, 5, 8, -9]));
// console.log(lodash.minBy(objects, "n"));
// console.log(lodash.maxBy(objects, "n"));
// console.log(lodash.sumBy(objects, "n"));
// console.log(lodash.mean([8, 6, 4, 9]));
// console.log(lodash.meanBy(objects, "n"));

// function some() {
//   this.a = 5;
//   this.b = 6;
// }
// some.prototype.c = 6;
// console.log(lodash.values(new some()));
// console.log(lodash.values("hihello"));
// const objects2 = { b: 35, c: 20 };
// const objects1 = {
//   a: 10,
//   b: 20,
//   getSum() {
//     return 10;
//   },
//   c: {
//     d: 400,
//   },
//   joingDate: new Date(),
// };
// function newSome() {
//   (this.k = 10), (this.p = 0);
// }
// newSome.prototype.v = 05;

// const objects3 = { c: 30, d: 50 };

// const newObj = Object.assign(
//   { z: 500 },
//   objects2,
//   objects3,
//   objects1,
//   new newSome()
// );
// console.log("newObj", newObj);
// const lodash_newObj = lodash.assign(
//   { z: 500 },
//   objects2,
//   objects3,
//   objects1,
//   new newSome()
// );
// console.log("lodash_newObj", lodash_newObj);
// newObj.c.d = 100;
// // lodash_newObj.c.d = 204;

// console.log("after");
// console.log(newObj);
// console.log(lodash_newObj, "lodash_newObj");
// console.log(objects1, "objects1");

// function foo() {
//   this.a = 10;
//   this.p = 20;
//   this.getAge = () => {
//     return 20;
//   };
// }
// foo.prototype.joiningDate = new Date();
// function soo() {
//   this.k = 10;
//   this.d = 30;
//   this.getAddress = () => {
//     return "pune";
//   };
// }
// soo.prototype.salary = "145k";
// soo.prototype.bonus = "30k";

// const newObjectIn = lodash.assignIn({ name: "pappu" }, new foo(), new soo());
// console.log("newObjectIn", newObjectIn);

//lodash.at
// var object = { a: [{ b: { c: 3 } }, 4, { d: { b: { s: { f: 4 } } } }] };
// console.log(lodash.at(object, ["a[0].b.c", "a[1]", "a[2].d.b.s.f"]));

// function Shape() {
//   this.x = 0;
//   this.y = 0;
// }
// function Circle() {
//   Shape.call(this);
// }

// Circle.prototype = lodash.create(Shape.prototype, {
//   constructor: Circle,
// });
// console.log("Shape", new Shape());
// console.log("Circle", new Circle());

//lodash.defaults take destination objects which have some default value and source object

// const newObj = lodash.defaults(
//   { a: { c: 5, b: 20 }, b: 1 },
//   { a: { b: 24, c: 30, d: 5 }, b: 20 }
// );
// console.log("newObj", newObj);
// const newObjs = lodash.defaultsDeep(
//   { a: { c: 5, b: 20 }, b: 1 },
//   { a: { b: 24, c: 30, d: 5 }, b: 20 }
// );
// console.log("newObjs", newObjs);
// var users = {
//   barney: { age: 36, active: true },
//   fred: { age: 40, active: false },
//   pebbles: { age: 1, active: true },
// };

// const filteredUsers = lodash.findKey(users, (ele) => ele.age == 1);
// const filteredUsers = lodash.findKey(users, { age: 40, active: false });
// const filteredUsers = lodash.findKey(users, ["active", false]);
// const filteredUsers = lodash.findLastKey(users, ["active", true]);
// const filteredUsers = lodash.findLastKey(users, { active: true });

// console.log("filteredUsers", filteredUsers);

// function foo() {
//   this.a = 10;
//   this.b = 10;
//   this.c = 30;
//   this.d = 40;
// }
// foo.prototype.e = 50;
// foo.prototype.f = 20;
// lodash.forIn(new foo(), (value, key) => {
//   console.log(value);
// });
// console.log("print from last in case forInRight");
// lodash.forInRight(new foo(), (value, key) => {
//   console.log(value);
// });
// console.log("forOwn");
// lodash.forOwn(new foo(), (value, key) => {
//   console.log(value);
// });
// lodash.forOwnRight(new foo(), (value, key) => {
//   console.log(key);
// });

// function Foo() {
//   this.a = lodash.constant("a");
//   this.b = lodash.constant("b");
//   this.c = lodash.constant("c");
// }
// Foo.prototype.d = lodash.constant("d");

// lodash.forIn(new Foo(), (value, key) => {
//   console.log(key, value);
// });
// console.log(lodash.functions(new Foo()));
// console.log(lodash.functionsIn(new Foo()));

// var object = { a: [{ b: { c: 3 } }] };

//lodash.get find on that path if value is not present then return default value

// console.log(lodash.get(object, "a[0].b.c"));
// console.log(lodash.get(object, ["a", "0", "b", "c"]));
// console.log(lodash.get(object, ["a", "1"], "6"));

// const object = { a: { b: 2 } };
// const other = lodash.create({ a: lodash.create({ b: 2 }) });
// console.log("object", object);
// console.log("other", other);
// console.log(lodash.has(object, ["a", "b"]));
// console.log(lodash.hasIn(other, "a"));

// const obj = { a: 1, b: 2, c: 3 };
// console.log(lodash.invert(obj));
// const obj1 = { a: { b: { c: 3 }, d: { e: 5 } }, f: { g: 7 }, k: 8 };
// console.log(lodash.invert(obj1));

// const obj = { a: 1, b: 2, c: 1, d: 4 };
// console.log(
//   lodash.invertBy(obj, (val) => {
//     return "Group" + val;
//   })
// );

// Array.prototype.add = (arr) => {
//   return "Applying array method";
// };

// var object = { a: [{ b: { c: [1, 2, 3, 4] } }] };
// console.log(lodash.invoke(object, "a[0].b.c.add"));

// const obj = { a: 3, b: 4, c: 5 };

// console.log(lodash.keys(obj));
// console.log(lodash.keys("obj                  o"));

// function Foo() {
//   this.a = 1;
//   this.b = 2;
// }
// Foo.prototype.c = 3;
// console.log(lodash.keysIn(new Foo()));

// const obj = {
//   a: 2,
//   b: 5,
//   c: 50,
// };
// console.log(
//   lodash.mapKeys(obj, (val, key) => {
//     return key + "some";
//   })
// );
// console.log(
//   lodash.mapValues(obj, (val, key) => {
//     return val + 10;
//   })
// );
// const object = { a: { age: 24, sex: "male" }, b: { age: 30, sex: "female" } };
// console.log(
//   lodash.mapValues(object, (obj) => {
//     return obj.sex;
//   })
// );

// const someFunc = (a, b, c) => {
//   return [a, b, c];
// };
// const curriedFunc = lodash.curry(someFunc);
// console.log(curriedFunc(1)(2)(3));
// console.log(curriedFunc(1)(5)(3));

// //castArray
// console.log(lodash.castArray(2, 3));
// console.log(lodash.castArray([1, 2, 3, 4, "hi"]));
// console.log(lodash.castArray({ name: "pappu" }));
// console.log(lodash.castArray("abc"));
// console.log(lodash.castArray(null));
// console.log(lodash.castArray(undefined));

// const numArr = [1, 2, 3, 4, 5];
// console.log(lodash.castArray(numArr) === numArr);

// const obj1 = [{ a: 1 }, { b: 2 }];
// const cloneObj1 = lodash.clone(obj1);
// console.log(obj1[0] == cloneObj1[0]);
// const cloneObj2 = lodash.cloneDeep(obj1);
// console.log(cloneObj2[0] == obj1[0]);

// const obj = { a: 1, b: 2 };
// const other = { a: 1, b: 2 };
// console.log(lodash.eq(obj, obj));
// console.log(lodash.eq("a", "a"));
// console.log(lodash.eq("b", Object("b")));

// console.log(lodash.gt(3, 3));
// console.log(lodash.gte(3, -2));
// console.log(lodash.isArguments([3, 4, 5, 6]));
// console.log(
//   lodash.isArguments(
//     (function () {
//       return arguments;
//     })()
//   )
// );

// console.log(
//   lodash.isArguments(function () {
//     return arguments;
//   })
// );
// console.log(
//   lodash.isArguments(
//     (function () {
//       return arguments;
//     })()
//   )
// );
// console.log(lodash.isArray([1, 2, 3]));
// console.log(lodash.isArray("abc"));
// console.log(lodash.isArray([1, 2, 3, 5]));
// // console.log(lodash.isArray(document.body.children));
// console.log(lodash.isArrayBuffer(new ArrayBuffer(2, 3, 4)), "buffer-check");
// console.log(lodash.isArrayBuffer(new Array(6)));
// console.log(lodash.isArrayBuffer(lodash.castArray(1)));
// console.log(lodash.isArrayLike([1, 23, 3]));
// console.log(lodash.isArrayLike(1));
// console.log(lodash.isArrayLikeObject({ a: 1, b: 2 }));
// console.log(lodash.isArrayLikeObject([2, 3, 4]));
// console.log(lodash.isArrayLikeObject());
// console.log(lodash.isBoolean(false));
// console.log(lodash.isBoolean(true));
// console.log(lodash.isBoolean(3));
// console.log(lodash.isBoolean(0));
// console.log(lodash.isBoolean(-7));
// const date = new Date();
// console.log(lodash.isDate(date));

// const someFun = (a, b, c, d, e, f) => {
//   return [a, b, c, d, e, f];
// };

// const curried = lodash.curry(someFun);
// console.log("curried");
// console.log(curried(1, 2, 3)(4, 5, 6));

// function mha(a, b) {
//   return [a, b];
// }

// var currieds = lodash.curry(mha);
// console.log(curried(1)(2));

// const someFunction = (a, b, c) => {
//   return [a, b, c];
// };
// const curried = lodash.curry(someFunction);
// console.log(curried(1)(2)(3));

// const sum = (a, b, c) => {
//   return a + b + c;
// };
// console.log(lodash.isFunction(sum));
// console.log(lodash.isFunction("abc"));

// console.log(lodash.isInteger(4));
// console.log(lodash.isInteger("abc"));
// console.log(lodash.isInteger(Number.MIN_VALUE));
// console.log(lodash.isInteger(Infinity));

// console.log(lodash.toString(null));
// console.log(lodash.toString());

// const arr = [6.9, 8.5, 7.6, 7.8, 6.5, 5.7, 5.4, 6.4];

// const res = lodash.countBy(arr, Math.floor);
// console.log("res", res);

// const arrWords = [
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ];
// const rest = lodash.countBy(arrWords, "length");
// console.log("rest", rest);

// const obj1 = [true, 8, null, "yes"];
// const obj2 = [true, 9, 10, "yes"];

// const rest1 = lodash.every(obj1, Boolean);
// const rest2 = lodash.every(obj2, Boolean);
// console.log("rest1", rest1);
// console.log("rest2", rest2);

// var users = [
//   { user: "barney", age: 36, active: false },
//   { user: "fred", age: 40, active: false },
// ];

// const res = lodash.every(users, { users: "barney", active: false });
// console.log("res", res);

// const res1 = lodash.every(users, { active: false });
// console.log("res", res1);

// const res2 = lodash.every(users, ["active", false]);
// console.log("res2", res2);

// var users = [
//   { user: "barney", age: 36, active: true },
//   { user: "fred", age: 40, active: false },
//   { user: "pebbles", age: 1, active: true },
// ];

// const res3 = lodash.filter(users, function (obj) {
//   return obj.age > 35;
// });
// console.log("res3", res3);

// const res4 = lodash.find(users, function (obj) {
//   return obj.age > 35;
// });
// console.log("res4", res4);

const arr = [1, 2, 3, 5];
function duplicate(n) {
  return n ** n;
}
const res = lodash.flatMapDepth(arr, duplicate, 2);
console.log("res", res);
console.log("arr", arr);
