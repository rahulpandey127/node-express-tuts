// {
//   var a = 10;
// }
// a++;
// function fun() {
//   console.log(a);
// }
// fun();

// const { set } = require("lodash");

// (function () {
//   console.log("IIFE executed!");
// })();

// sayHello(); // Works fine

// function sayHello() {
//   console.log("Hello!");
// }

// console.log(greet("Rahul"));

// const greet = function (name) {
//   return "Hello, " + name;
// };

// let obj = {
//   sname: "Rahul",
//   age: 20,
//   gender: "male",
//   address: {
//     city: "Delhi",
//     state: "Delhi",
//     pincode: 110020,
//   },
//   print: function () {
//     return this.sname;
//   },
// };

// obj["marital"] = "single";

// console.log(obj);

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Data fetched"), 2000);
//   });
// }

// async function getData() {
//   console.log("Fetching...");
//   let result = await fetchData(); // wait until promise resolves
//   console.log(result);
//   console.log("Done!");
// }

// getData();

// setInterval(() => {
//   console.log("Hello");
// }, 500);

// let arr=[1,2,3];
// console.log(arr);

// let ele=arr.shift();
// console.log(arr);

// let arr = [5, 75,105,117,73, 1];
// const students = [
//   { name: "Aman", marks: 85 },
//   { name: "Ravi", marks: 100 },
//   { name: "Neha", marks: 100 },
// ];
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let obj={};

// for(let ele of fruits)
// {
// if(obj[ele])
// {
//     obj[ele]++;
// }
// else{
//     obj[ele]=1;
// }
// }

// console.log(obj);

// const fruits = [
// 10,5,17,4,21,44,1
// ];

// let result = fruits.reduce((acc, ele) => {
//   if (!acc.includes(ele)) {
//     acc.push(ele);
//   }
//   return acc;
// }, []);

// console.log(result);
// let arr = [];

// for (let ele of fruits) {
//   if (!arr.includes(ele)) {
//     arr.push(ele);
//   }
// }

// console.log(arr);

// const num = [10, 5, 17, 4, 21, 44, 1];
//Find Maximum
// let result=num.reduce((acc,ele)=>{
//     return acc>ele?acc:ele  ;
// })

// console.log(result);

// const students = [
//   { name: "Aman", grade: "A" },
//   { name: "Ravi", grade: "B" },
//   { name: "Neha", grade: "A" },
//   { name: "Pooja", grade: "C" },
// ];

// let obj = {};

// for(let ele of students)
// {
//     if(obj[ele.grade])
//     {
//         obj[ele.grade].push(ele.name);
//     }
//     else{
//         obj[ele.grade]=[ele.name];
//     }
// }

// let result = students.reduce((acc, ele) => {
//   acc[ele.grade]
//     ? acc[ele.grade].push(ele.name)
//     : (acc[ele.grade] = [ele.name]);
//   return acc;
// }, []);

// console.log(result);

// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// let result = arr.reduce((acc, ele) => {
//   return acc.concat(ele);
// });
// console.log(result);

// const str = "hello world";

// let result = str.split("").reduce((acc, ele) => {
//   if (ele.length != 0) {
//     acc = acc + 1;
//   }
//   return acc;
// }, 0);
// console.log(result);

// const str = "hello world";

// let result = str.split("").reduce((acc, ele) => {
//   if (acc[ele] && ele!=="") {
//     acc[ele]++;
//   } else {
//     acc[ele] = 1;
//   }
//   return acc;
// }, {});

// console.log(result);

// const nums = [10, 30, 20, 40, 50];

// let result = nums.reduce((acc, ele, i, arr) => {
// acc=acc+ele;
// return acc;
// },0);

// console.log(result);

// console.log(result);

// let user = [10, 17, 5];

// let b = user.some((ele) => ele > 10);
// console.log(b);
// class Courses {
//   constructor(sub1, sub2) {
//     this.sub1 = sub1;
//     this.sub2 = sub2;
//   }
// }
// class Student extends Courses {
//   constructor(name, age, sub1, sub2) {
//     super(sub1, sub2);
//     this.name = name;
//     this.age = age;
//   }
// }

// let stu1 = new Student("Rahul", 20, "Mathematics", "Science");
// let stu2 = new Student("Tanya", 18, "Mathematics", "Science");
// console.log(stu1, "My name is "+stu2["name"]);

// for (let ele in stu1) {
//   console.log(ele + " : " + stu1[ele]);
// }

// let obj = {
//   sname: "Rahul",
//   course: "M-Tech",
//   print: function () {
//     return this.sname;
//   },
// };

// console.log(Object.entries(obj));

// function student(sname) {
//   this.sname = sname;
//   this.print = function () {
//     return this.sname;
//   };
// }

// let stu1 = new student("Rahul");
// let stu2 = new student("Tanya");
// console.log(stu2.print());

//Event Bubbling

// function student() {}

// student.sname = "Rahul";
// let student = {
//   sname: "Rahul"
// }

// let course = Object.create(student);
// course.course= "M.Tech CSE",
// console.log(course);

let ul = document.querySelector(".first");

// let li = document.createElement("li");
// li.textContent = "Hello World";
// li.classList.add("inner");
// console.log(li);
// ul.insertAdjacentElement("beforebegin", li);
// let ele = li.cloneNode(true);
// ul.insertAdjacentElement("afterend", ele);
// console.log(ele);
// // let root=document.getRootNode();
// // console.log(root.childNodes[1].childNodes[2].children[0].childNodes);

// let ele1 = li.cloneNode(true);
// ul.insertAdjacentElement("afterbegin", ele1);

// let ele2 = li.cloneNode(true);
// ul.insertAdjacentElement("beforeend", ele2);

// let second = document.querySelector(".second");
// let textNode = document.createTextNode("Start here");
// ul.replaceChild(textNode, second);

//appendChild
//removeChild
//replaceChild
//insertBefore
//insertAdjacentElement
//-->>beforebegin
//-->>afterbegin
//-->>beforeend
//-->>afterend
//append
//prepend

let ele = document.createElement("li");
ele.textContent = "Hello World";
ele.classList.add("inner");
ul.before(ele);
