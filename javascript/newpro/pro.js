// let start = document.querySelector(".start");
// let stop = document.querySelector(".stop");
// let body = document.querySelector("body");
// let first = document.querySelector(".first");
// let second = document.querySelector(".second");
// let third = document.querySelector(".third");
// let fourth = document.querySelector(".fourth");
// let fifth = document.querySelector(".fifth");
// function changer(name) {
//   let id = setInterval(function () {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     background = `rgb(${red},${green},${blue})`;
//     name.style.background = background;
//   }, 500);
//   return id;
// }
// let fid = 0;
// let sid = 0;
// let tid = 0;
// let foid = 0;
// let ffid = 0;
// start.addEventListener("click", function () {
//   fid = changer(first);
//   sid = changer(second);
//   tid = changer(third);
//   foid = changer(fourth);
//   ffid = changer(fifth);
// });

// stop.addEventListener("click", function () {
//   console.log(fid, sid, tid, foid, ffid);
//   clearInterval(fid);
//   clearInterval(sid);
//   clearInterval(tid);
//   clearInterval(foid);
//   clearInterval(ffid);

//   first.style.background = "white";
//   second.style.background = "white";
//   third.style.background = "white";
//   fourth.style.background = "white";
//   fifth.style.background = "white";
// });

// function resolve(num) {
//   return new Promise((resolve, reject) => {
//     let a = 10;
//     let b = 20;
//     let sum = 0;
//     for (let i = 0; i < num; i++) {
//       console.log("status pending");
//       sum = sum + i;
//     }
//     if (a < b) {
//       resolve("promise resolved");
//     } else {
//       reject("promise rejected");
//     }
//   });
//   //   return promise;
// }

// resolve(500)
//   .then((val) => {
//     return val + "     " + "and then";
//   })
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((val) => {
//     console.log(val);
//   });

// Promise.resolve(5000000).then((val) => {
//   console.log(val);
// })

// let start = document.querySelector(".start");
// let stop = document.querySelector(".stop");
// let body = document.querySelector("body");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let fourth = document.querySelector(".fourth");
let fifth = document.querySelector(".fifth");

function changer(element, text, color, bgcolor, time) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      element.innerText = text;
      element.style.color = color;
      element.style.backgroundColor = bgcolor;
      element.style.fontWeight = "normal";
      element.style.fontSize = "81px";
      if (element) {
        resolve("done");
      } else {
        reject("not done");
      }
    }, time);
  });
  return promise;
}

let time = 1000;
let interval = setInterval(() => {
  if (time % 2 === 0) {
    changer(first, "First", "white", "red", 1000)
      .then((result) => {
        //   console.log(result);
        if (result === "done") {
          return changer(second, "Second", "white", "green", 1000);
        }
      })
      .then((result) => {
        //   console.log(result);
        if (result === "done") {
          return changer(third, "Three", "black", "cyan", 1000);
        }
      })
      .then((result) => {
        //   console.log(result);
        if (result === "done") {
          return changer(fourth, "Four", "black", "yellow", 1000);
        }
      })
      .then((result) => {
        //   console.log(result);
        if (result === "done") {
          return changer(fifth, "Five", "white", "orange", 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    time = time - 1;
    // console.log(time);
  } else {
    changer(first, "R", "black", "white", 1000)
      .then((result) => {
        //   console.log(result);
        if (result === "done") {
          return changer(second, "A", "black", "white", 1000);
        }
      })
      .then((result) => {
        //   console.log(result);
        if (result === "done") {
          return changer(third, "H", "black", "white", 1000);
        }
      })
      .then((result) => {
        //   console.log(result);
        if (result === "done") {
          return changer(fourth, "U", "black", "white", 1000);
        }
      })
      .then((result) => {
        //   console.log(result);
        if (result === "done") {
          return changer(fifth, "L", "black", "white", 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    time = time + 1;
    // console.log(time);
  }
}, 5000);

console.log(interval);

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");

start.addEventListener("click", function () {
    
})
