// let input = document.getElementById("inputbox");
// let btn = document.getElementById("addBtn");
// let todoList = document.querySelector(".todoList");

// btn.addEventListener('click', function(e){
//   e.preventDefault();
//   console.log(e);
//   if (input.value == "") {
//     alert("Please enter a value");
//   } else {
//     let div = document.createElement("div");
//     let inner = `<div class="list">
//               <div class="list-text">${input.value}</div>
//                <div class="list-done">Done</div>
//               <div class="list-btn">Delete</div>
//             </div>`;
//     div.innerHTML = inner;
//     todoList.append(div);
//     input.value = "";
//   }
// });

// todoList.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains("list-btn")) {
//     e.target.parentElement.remove();
//   }

//   if (e.target.classList.contains("list-done")) {
//     console.log(e.target.parentElement.children[0]);
//     e.target.parentElement.children[0].style.textDecoration = "line-through";
//   }
// });
