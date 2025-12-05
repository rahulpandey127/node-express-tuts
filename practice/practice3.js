// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");
// let subchild = document.querySelector(".subchild");

// parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("parent clicked");
//     //   e.stopPropagation();
//   },
//   true
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("child clicked");
//     //   e.stopPropagation();
//   },
//   true
// );

// parent.addEventListener("click", (e) => {
//   console.log("parent");
//   // e.stopPropagation();
// });

// child.addEventListener("click", (e) => {
//   console.log("child");
//   // e.stopPropagation();
// });

// subchild.addEventListener("click", (e) => {
//   console.log("subchild");
//   // e.stopPropagation();
// });

let text = document.getElementsByClassName("text")[0];
let submit = document.getElementsByClassName("submit")[0];
let tasklist = document.getElementsByClassName("task-list")[0];

let taskitem = document.querySelector(".task-item");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let ele = document.createElement("div");
  ele.innerHTML = `<div class="task-item">${text.value}<div class="btn"><input type="button" value="done" class="done button1"/><input type="button" value="Delete" class="delete button2"/></div></div>`;
  tasklist.append(ele);
  text.value = "";
});

tasklist.addEventListener("click", (e) => {
  console.log(e.target.classList);
  if (e.target.classList.contains("done")) {
    // e.target.parentElement.parentElement.style.textDecoration = "line-through";
    let ele = e.target.parentElement.parentElement;
    console.log(ele);
    ele.style.textDecoration = "line-through";
  } else {
    e.target.parentElement.parentElement.remove();
  }
});
