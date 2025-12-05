// import {arr1,arr2} from "./module2.js";
// console.log(arr1,arr2);

// import UserName from "./module1.js";
// console.log(UserName);

// let user=new UserName("Rahul","M.Tech CSE");
// console.log(user);
// user.display();

//shallow copy

// let obj1 = {
//   sname: "Rahul",
//   course: "M.Tech CSE",
//   age: 24,
//   address: {
//     city: "Mumbai",
//     state: "Maharashtra",
//   },
//   print: function () {
//     return this.sname;
//   },
// };

// let obj3 = { ...obj1 }; //shallow copy
// obj3.address.city = "Noida";
// console.log(obj1);
// console.log(obj3);

// let obj3 = Object.assign({}, obj1); //shallow copy
// obj3.address.city = "Noida";
// console.log(obj1);
// console.log(obj3);

// let obj2 = JSON.parse(JSON.stringify(obj1)); //deep copy
// obj2.address.city = "Noida";
// console.log(obj1);
// console.log(obj2);

// let obj2 = _.cloneDeep(obj1); //deep copy
// obj2.address.city = "Noida";
// console.log(obj1);
// console.log(obj2);

// export default obj1;
