// let fun = {};
// fun.isAge = () => {
//   return this.age > 12;
// };
// fun.isGreater = () => {
//   return this.price > 50000;
// };
// function Create(id, name, age, price) {
//   let user = {};
//   user.id = id;
//   user.name = name;
//   user.age = age;
//   user.price = price;
//   user.__proto__ = Create.prototype;
//   return user;
// }

// Create.prototype.isAge = () => {
//   return this.age > 12;
// };

// Create.prototype.isGreater = () => {
//   return this.price > 50000;
// };

// let user1 = Create(1, "abc", 12, 50000);
// let user2 = Create(2, "abc", 24, 57000);

// console.log(user1);

// function Create(id, name, age, price) {
//   this.id = id;
//   this.name = name;
//   this.age = age;
//   this.price = price;
//   Create.prototype.isAge = () => {
//   return this.age > 12;
// };
//   Create.prototype.isGreater = () => {
//     return this.price > 50000;
//   }
// }

// Create.prototype.isAge = () => {
//   return this.age > 12;
// };

// Create.prototype.isGreater = () => {
//   return this.price > 50000;
// };

// let user1 = new Create(1, "abc", 12, 50000);
// let user2 = new Create(2, "abc", 24, 57000);

// console.log(user1);

//prototype ek object hota hai jo har function ke saath create hota hai

//__proto__:ek reference hota hai jo prototype ke saath point karta hai, jo bhi object create hoga uska prototype object ke saath point karega,isse inheritence hota hai

// function student(roll, sname, course, age, fees) {
//   this.roll = roll;
//   this.sname = sname;
//   this.course = course;
//   this.age = age;
//   this.fees = fees;
//   // this.__proto__ = student.prototype;
// }

// student.prototype.isAge = () => {
//   return this.age > 27;
// };
// student.prototype.isGreater = () => {
//   return this.fees > 150000;
// };

// let stu1 = new student(1, "Rahul", "BCA", 22, 50000);
// let stu2 = new student(2, "Tanya", "B.Tech", 27, 63000);
// let stu3 = new student(3, "Priya", "MCA", 76, 96400);
// console.log(stu1);
// console.log(stu2);
// console.log(stu3);
// console.log(stu1.isAge());
// console.log(stu1.isGreater());

// let arr = new Array(1, 2, 3, 4, 5);
// arr.__proto__.hello = () => {
//   console.log("hello");
// };

// console.log(arr.__proto__);

//datatye
//1.primitive
//2.reference
//primitive data type
//number
//string
//boolean
//null
//undefined
//bigint
//symbol
//reference data type
//object
//array
//function

// class Person {
//   constructor(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//   }

//   isAge() {
//     return this.age > 12;
//   }

//   isGreater() {
//     return this.price > 50000;
//   }

//   myName(mname) {
//     console.log(mname);
//   }

//   get fullname() {
//     console.log(this.fname + " " + this.lname);
//   }

//   set fullname(value) {
//     let [fname, lname] = value.split(" ");
//     this.fname = fname;
//     this.lname = lname;
//   }
// }

// class Student extends Person {
//   constructor(roll, fname, lname, course, age, fees) {
//     super(fname, lname, age);
//     this.roll = roll;
//     this.course = course;
//     this.fees = fees;
//   }
// }

// let stu1 = new Student(1, "Rahul", "Kumar Pandey", "BCA", 22, 50000);
// console.log(stu1.age);
// stu1.fullname = "Tanya Singh";
// stu1.fullname;

//set ka use karne function ke through value set karne ke liye use hota hai,string ka use karke split karke value ko set karne ke liye use hota hai

//get ka use karne function ke through value get karne ke liye use hota hai,function ko call nahi karna padta hai,property likhke value get karne ke liye use hota hai

//closure is a function that has access to its own scope, the outer function’s scope, and the global scope. In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// function calculate(a, b) {
//   return a + b;
// }

// function sum(a, b, calculate) {
//   let ans = calculate(a, b);
//   console.log("TOTAL = " + ans);
// }

// sum(15, 27, calculate);

// let input = document.querySelector("input");
// input.setAttribute("placeholder", "Enter User Name");
// input.setAttribute("value", "Rahul Kumar Pandey");
// console.log(input.attributes);
// input.classList.add("changer");

let parent = document.querySelector(".parentbox");
let box = document.querySelector(".box");
let button = document.querySelectorAll("button");
button[0].style.backgroundColor = "red";
button[1].style.backgroundColor = "green";
button[2].style.backgroundColor = "blue";
button[0].style.color = "white";
button[1].style.color = "white";
button[2].style.color = "white";

button[0].addEventListener("click", () => {
  box.classList.add("red");
});

button[1].addEventListener("click", () => {
  box.classList.add("green");
});

button[2].addEventListener("click", () => {
  box.classList.add("blue");
});

let remove = document.querySelector(".remove").children;
remove[0].addEventListener("click", () => {
  box.classList.remove("red");
  box.classList.remove("green");
  box.classList.remove("blue");
});

// box.setAttribute("background-color", "red");
let input = document.querySelector("input");
input.setAttribute("value", box.classList);
console.log(input.attributes);
box.addEventListener("click", () => {
  box.classList.toggle("red");
});
