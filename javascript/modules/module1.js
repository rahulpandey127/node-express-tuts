import obj1 from "./module2.js";
// let obj3 = { ...obj1 }; //shallow copy
// obj3.address.city = "Noida";
// console.log(obj1);
// console.log(obj3);

// let obj3 = Object.assign({}, obj1); //shallow copy
// obj3.address.city = "Noida";
// console.log(obj1);
// console.log(obj3);

let obj2 = JSON.parse(JSON.stringify(obj1)); //deep copy
obj2.address.city = "Noida";
// console.log(obj1);
// console.log(obj2);

// let obj2 = _.cloneDeep(obj1); //deep copy
// obj2.address.city = "Noida";
// console.log(obj1);
// console.log(obj2);
export { obj1, obj2 };
