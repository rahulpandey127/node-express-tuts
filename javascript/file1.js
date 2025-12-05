// "use strict";
// const sname = "RAHUL";
// console.log(sname[sname]);

// stringtuts trim is immutable

// let firstname = "   Pandey    ";
// console.log(firstname.length);
// firstname = firstname.trim();
// console.log(firstname.length);
// console.log(firstname.toUpperCase());

// let str1 = 123+"";
// let str2 = "world";
// console.log(typeof str1);

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);
// console.log(i);

// let i = 10;
// console.log(`Hello this is ${i}`);

//slice->>immutable
//splice-->mutable
//array
//object
//push
//pop
//shift -->slow
//unshift -->slow

// let arr = ["Priya", "Shreya", "Rahul", "Tanya", "Madhuri", "Sheetal", "Gauri"];
// arr.splice(-1, 1, "Rohan", "Raj");//mutable -->new array nahi banega
// console.log(arr);

// function sum() {
//   {
//     var a = 10;
//   }
// }
// console.log(a);

// sum();

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr[1] = { sname: "Rahul" };
// arr[1].sname = "Rohan";
// console.log(arr[1].sname);

// let num1 = 6;
// let num2 = num1;
// console.log(num2);

// num1++;
// console.log("num1", num1);
// console.log("num2", num2);

//premetive and referenced data type

//premetive
// let a = 3;
// let b = a;
// console.log(a, b);
// a++;
// console.log(a, b);

//referenced
// let c=["Rahul","Tanya"];
// let d=c;
// console.log(c,d);
// c[0]="Rohan";
// console.log(c,d);

//copy array into another array
//clone array
//using spread operator

// let arr1 = [1, 2, 3];
// let arr2 = arr1.slice(0);
// console.log(arr2);

// let arr3=[1,2,3];
// let arr4=[...arr3];
// console.log(arr4);

// let arr5=[1,2,3];
// let arr6=[].concat(arr5);
// console.log(arr6);

//copy array into another arrya with different way

// let arr1 = [10, 20, 70];
// let arr2 = [...arr1].concat('a','b');
// console.log(arr2);

// let arr1 = [10, 20, 70];
// let arr2 = arr1.splice(0).concat(arr1,'a','b');
// console.log(arr2);

// let arr1 = [10, 20, 70];
// let arr2 = [...arr1,'a','b'];
// console.log(arr2);

// let arr1 = [10, 20, 70, ["mango", "orange"]];
// arr1 = String(arr1.flat(1));

// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i].toUpperCase());
// }

//for of ==> array--> element deta hai

//for in ==> object-->index deta hai-->array me index aur object me keys deta hai

//destructure

// let students = [10, 20, [30, 40], { sname: "Rahul" }];

// for (let student in students) {
//   console.log(student);
// }

// let [stu1,stu2,...stu3]=students;
// console.log(stu3[0]);

// let key = "email";
// let obj = {
//   sname: "Rahul Kumar Pandey",
//   city: "Mau",
//   hobbies: ["cricket", "football", "chess"],
// };

// console.log(obj);

// obj.hobbies = [...obj.hobbies, "swimming"];
// obj["gender"] = "male";
// obj.gender = "male";

// obj[key] = "rkpandey@gmail.com";
//difference between dot and bracket notation
//1. dot notation is faster
//2. bracket notation is dynamic
//3. bracket notation is used to access the property of an object whose name is stored in a variable
//4. bracket notation is used to access the property of an object whose name is not known at the time of writing the code

// console.log(obj);

// let obj = {
//   sname: "Rahul Kumar Pandey",
//   city: "Mau",
//   hobbies: ["cricket", "football", "chess"],
// };

// for (let key in obj) {
//   console.log(`${key}:${obj[key]}`);
// }

// let stu = {
//   sname: "Rahul Kumar Pandey",
//   city: "Mau",
//   hobbies: ["cricket", "football", "chess"],
// };

// for (let key of Object.keys(stu)) {
//   console.log(`${key}:${stu[key]}`.toUpperCase());
// }

//----------------------//

// const key1 = "objKey1";
// const key2 = "objKey2";

// const val1 = "value1";
// const val2 = "value2";

// const obj = {
//   [key1]: val1,
//   [key2]: val2,
// };

// const obj={};
// obj[key1]=val1;
// obj[key2]=val2;

// console.log(obj);

//spread operator in array

// let arr1=[1,2,3];

// let arrclone=[].concat(arr1);
// let arrclone=arr1.slice(0);
// let arrclone=[...arr1];

//---spread a string------//
// let arrclone=[..."RAHUL KUMAR PANDEY"];
// let arrclone=[..."1234567"];

// console.log(arrclone);

//spread operator in objects

// let obj1 = {
//   key1: "value1",
//   key2: "value2",
// };

// let obj2 = {
//   key3: "value3",
//   key4: "value4",
//   key1: "value77",
// };

// let obj = { ...obj1, ...obj2 };
// let obj = { ...["item1", "item2"] };
// console.log(obj);

//------object destructuring------//

// let product = {
//   productName: "iphone",
//   price: 100000,
//   category: "mobile",
//   brand: "apple",
//   description: "this is a good product",
// };

// let { productName: pname, ...rest } = product;
// console.log(pname, rest.price);

//-----objects inside array------//

// let arr = [
//   {
//     userId: 1,
//     firstName: "Rahul",
//     gender: "male",
//   },
//   {
//     userId: 2,
//     firstName: "Rohan",
//     gender: "male",
//   },
//   {
//     userId: 3,
//     firstName: "Ritu",
//     gender: "female",
//   },
// ];

// for (let ele of arr) {
//   for (let val of Object.keys(ele)) {
//     console.log(ele[val]);
//   }
// }

//--------object destructuring in array------//
// let [{ firstName: user1 }, , { gender: gender1 }] = arr;
// console.log(user1, gender1);

//----------------functions----------------//

// function firstChar(ele) {
//   return ele[0];
// }

// console.log(firstChar("Rahul"));
// function searchEle(arr, num) { //function expression
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return [i, 1];
//     }
//   }
//   return -1;
// };

// let searchEle = function (arr, num) { //function expression
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return [i, 1];
//     }
//   }
//   return -1;
// };

// console.log(searchEle([1, 2, 3, 4, 5, 6], 16));

// function isSum(num) {
//   //function declaration
//   let val = num % 2 === 0;
//   return val;
// }

// console.log(isSum(10));

//------------arrow functions-----------------//
// let isSum = (num) => num;

// console.log(isSum(10));

// let isSum = (num1, num2) => {
//   // arrow functions
//   return [num1, num2];
// };

// console.log(isSum(10, 20));

// let arr1 = [10, 20];
// let arr2 = arr1;
// console.log(arr2);

// arr1.splice(1, 1, "Rahul");
// console.log(arr2);

//----mutable methods of array-----//
//1.push 2.pop 3.shift 4.unshift 5.splice 6.sort 7.fill 8.reverse

//----immutable methods of array-----//
//1.concat 2.slice 3.join 4.split 5.indexOf 6.lastIndexOf 7.includes 8.find 9.findIndex 10.filter 11.map 12.reduce 13.every 14.some 15.flat 16.flatmap

// let app1 = (num1) => {
//   let app2 = (num2) => {
//     console.log(num1,num2);
//   };
//   return app2;
// };

// let app3 = app1(10);
// app3(20);

// function google(a = 10, b = 0) {
//   console.log(a, b);
// }

// google(7,12);

// function calculate(...arr) {
//   let total = 0;
//   for (let ele of arr) {
//     total = total + ele;
//   }
//   return total;
// }

// let result = calculate(1, 2, 3);
// console.log(result);

// const person1 = {
//   sname: "Tanya",
//   age: 20,
//   gender: "female",
//   address: {
//     city: "Varanasi",
//     state: "UP",
//     country: "India",
//   },
// };

// const person2 = {
//   sname: "Rahul",
//   age: 23,
//   gender: "male",
//   address: {
//     city: "Mau",
//     state: "UP",
//     country: "India",
//   },
// };
// function printDetails({ person1, person2 }) {
//   let { sname:hero } = person1;
//   let { sname:zero,age } = person2; //   let { sname } = obj.person2;
//   console.log(hero,zero, age);
// }

// printDetails({ person1, person2 });

//-----------Call Back Function--------//
// function myFunction(para) {
//   console.log(para);
// }

// function callFunc(callBack) {
//   callBack("Hello World!!");
// }

// callFunc(myFunction);

//---------function returning function or Highr Order Function---------//

//Higher order function
//1.accept a function as a parameter
//2.return a function
//3.accept a function as a parameter and return a function both

// function myFunction(para) {
//   console.log(para);
// }

// function callFunc() {
//   return myFunction;
// }

// let call = callFunc();
// call("Hello World!!");

// let arr = [5, 7, 3, 10, 9, 8, 1];
// let mul={mulnum:20};

// let map = (ele, index) => {
//   console.log(ele, index);
// };

// arr.forEach(map);
// function myFunction(ele) {
//   console.log(ele);
// }

// arr.map(myFunction);

// let arr = [5, 7, 3, 10, 9, 8, 1];
// let mul = { mulnum: 20 };

// function myFunction(ele) {
//   console.log(ele * this.mulnum);
// }

// arr.forEach(myFunction, mul);

//------------map function-----------//

// let arr = [5, 7, 3, 10, 9, 8, 1];
// let obj = { mul: 15 };

// function myFunction(ele, index, array) {
//   return ele * this.mul;
// }

// let map = arr.map(myFunction, obj);
// console.log(map);

// let arr = [
//   { userId: 1, firstName: "Rahul", gender: "male" },
//   { userId: 2, firstName: "Ritu", gender: "female" },
//   { userId: 3, firstName: "Ritu", gender: "female" },
// ];

// let obj = { mul: 15 };

// let map = arr.map(function(ele){
//   console.log(this.mul);
//   // return this.mul + " " + ele.firstName;
// }, obj);

// console.log(map);

// let arr = [8, 6, 4, 7, 2, 50, 39, 7, 55];
// let ans = arr.filter((ele) => {
//   return ele % 2 == 0;
// });
// console.log(ans);

// let arr = [8, 6, 4, 7, 2, 50, 39, 7, 55];

// let ans = arr.reduce((acc, ele,index,val) => {
//   console.log(val);
//   return acc + ele;}
// ,15000)

// console.log(ans);

// let arr = [8, 6, 4, 7, 2, 50, 39, 7, 55];
// arr.sort((a, b) => {
//   return b - a;
// });
// console.log(arr);

//if a-b=>+ve then a,b swap
//if a-b=>-ve then a,b not swap
//if a-b=>0 then a,b not swap
//if b-a=>+ve then a,b not swap
//if b-a=>-ve then a,b swap
//if b-a=>0 then a,b not swap

// let productList = [
//   { pid: 107, pname: "TV", price: 15000, category: "electronics" },
//   { pid: 64, pname: "Refrigerator", price: 15000, category: "electronics" },
//   { pid: 45, pname: "Book", price: 15000, category: "Stationary" },
//   { pid: 12, pname: "Pen", price: 17000, category: "Stationary" },
// ];

// let product = productList.slice(0).sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(productList);

//-------------find method--------------//

// let product = productList.find((ele) => {
//   console.log(ele.price == 15000);
//   return ele.price == 15000;
// });
// console.log(product);
//1.find method return the first element which satisfy the condition

//2.find method return undefined if no element satisfy the condition

// let product = productList.every((ele) => {
//   console.log(ele.price == 15000);
//   return ele.price == 15000;
// });
// console.log(product);

// let product = productList.some((ele) => {
//   console.log(ele.price == 15000);
//   return ele.price == 1000;
// });
// console.log(product);

let productList = [
  { pid: 107, pname: "TV", price: 15000, category: "electronics" },
  { pid: 64, pname: "Refrigerator", price: 15000, category: "electronics" },
  { pid: 45, pname: "Book", price: 15000, category: "Stationary" },
  { pid: 12, pname: "Pen", price: 17000, category: "Stationary" },
];
// function check(ele) {
//   if (ele.pid === 12) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let product = productList.map(check);
// console.log(product);

// let product = productList.find((ele) => {
//   return ele.pid === 12;
// });
// console.log(product);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.fill(0, 2, 4);
// console.log(result);

// let result = arr.splice(1, 2, 4, 4, 77);
// console.log(arr);
// console.log(result);
//splice method return the deleted elements
//splice method modify the original array
// let ele1 = [1, 2, 3];
// let ele2 = [1, 5, 3];
// let sets = new Set();
// sets.add(ele1);

// sets.forEach((ele) => {
//   console.log(ele);
// });

// console.log(sets.has(ele1));
// console.log(sets);

//--------sets--------//
//1.set is a collection of unique elements
//2.set is iterable
//3.set is not an array
//4.set is not an object
//5.set is not a map
//6.set is not a string
//7.set is not a number
//8.set is not a boolean
//9.set is not a null
//10.set is not a undefined
// let length = 0;

// for (let ele of sets) {
//   console.log(ele);
//   length++;
// }

// console.log(length);

//-----map object----------//
//1.map is a collection of key value pairs
//2.map is iterable
//3.map is not an array
//4.map is not an object

// let obj = {
//   sid: 1,
//   name: "rahul",
//   gender: "male",
// };

// console.log(obj?.address?.city);

// let user1 = {
//   sname: "Rahul Kr Pandey",
// };

// let user2 = {
//   about: function (sname, age) {
//     console.log(sname, age);
//   },
// };

// let func = user2.about.bind(user1, "Raja Babu", 21);
// func();
// const userMethods = {
//   minSalary: function () {
//     return this.salary > 5000;
//   },
// };
// function createUser(name, age, salary) {
//   let obj = {};
//   obj= Object.create(userMethods);
//   obj.name = name;
//   obj.age = age;
//   obj.salary = salary;
//   return obj;
// }

// let user = createUser("Rahul", 21, 15000);
// console.log(user.minSalary());

// let obj1 = {
//   sname: "Raja Tanya",
// };

// let obj2 = {
// __proto__:Object.create(obj1),
// age:55
// };

// console.log(obj2);

// let quicker = {
//   details: function () {
//     console.log(this.age, this.course);
//   },
//   sname: function () {
//     console.log(this.name);
//   },
// };
// function student(name, age, course) {
//   let obj = Object.create(quicker);//
//   obj.name = name;
//   obj.age = age;
//   obj.course = course;
//   return obj;
// }

// let student1 = student("Rahul".toUpperCase(), 21, "Btech".toUpperCase());
// student1.sname();
// student1.details();

// let student = new Map();
// student.set(1, "Rahul");
// student.set([1], 21);

// console.log(student.get([1]));

//--access array as key in map object--//

// let student = new Map();
// student.set([1, 2, 3], "Rahul");
// student.set(["age"], 21);

// class Course {
//   constructor(course, marks) {
//     this.course = course;
//     this.marks = marks;
//   }

//   //-----setter-----//
//   set courseVal(val) {
//     let val1 = val.split(" ")[0].concat(" " + val.split(" ")[1]);
//     this.course = val1;
//   }

//   //-----getter-----//
//   get getCourse() {
//     console.log(this.course);
//   }
// }
// class Student extends Course {}

// let stu1 = new Student("BTECH CSE", 750);

// stu1.courseVal = "Electrical Engineering";

// stu1.getCourse;
//static method or properties ko class ke name se call karte hai,object ke name se nahi

// class Bank {
//   static minBalance = 1000;
//   static getMinBalance() {
//     console.log(this.minBalance);
//   }
// }

// console.log(Bank.minBalance);
// Bank.getMinBalance();
// class Balance {
//   constructor(balance) {
//     this.balance = balance;
//   }

//   set accBalance(val) {
//     this.balance = val;
//   }
//   get accBalance() {
//     console.log(this.balance);
//   }
// }
// class Bank extends Balance {
//   constructor(accId, name, balance) {
//     super(balance);
//     this.accId = accId;
//     this.name = name;
//   }
// }

// let user1 = new Bank(1234, "Rahul", 1500000);
// user1.accBalance = 22275000;
// user1.accBalance;

let arr = [1, 2, 3, 3, 3, 7, 5, 4, 5, 6, 7, 8, 9];
let user = new Set(arr);
user.add(12);
user.add(12);
user.values;
// for(let val of user)
// {
//   console.log(val);
// }
// console.log(user);
// console.log(user.has(127));
