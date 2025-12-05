const managebtn = document.getElementsByClassName("manage-button");

// let i = 0;
// managebtn[0].addEventListener("click", function () {
//   console.log("manage button clicked");
//   managebtn[0].style.backgroundColor = i == 0 ? "red" : "white";
//   i = i == 0 ? 1 : 0;
// });

// const input = document.querySelectorAll(".input");
// console.log(input);

// let link = document.querySelectorAll("a");
// link[0].setAttribute("href", "https://www.google.com");
// console.log(link[0]);

// managebtn[0].addEventListener("click", function () {
//   managebtn[0].innerHTML = "<div>You Already Clicked..</div>";
//   managebtn[0].innerHTML += "<div><button class='btn'>Click me</button></div> ";
// });

// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// const bodyElements = htmlElementNode.childNodes[2].childNodes;
// console.log(bodyElements[1]);
//childeNodes me all space and line also count hote hain
//children me space and line nahi count hote hain
// let manage = document.querySelector(".manage");
// let mangchildren = manage.children;
// let adder = mangchildren[0].classList.add("adder");
// console.log(mangchildren[0]);

// let list = document.querySelector(".list");

// let li = document.createElement("li");
// li.textContent = "This is a new item";
// li.style.color = "white";
// li.style.fontSize = "25px";
// // list.prepend(li);

// // console.log(list[3].remove());

// list.style.border = "1px solid white";
// li.style.listStyle = "none";

// list.after(li);

// const box = document.querySelector(".box");
// box.style.border = "2px solid red";
// console.log(box);

// let ul = document.createElement("ul");
// let li = document.createElement("li");
// li.innerText = "This is a new item 2 ";
// ul.appendChild(li);
// box.insertAdjacentElement("beforebegin", ul);
// li.style.listStyle = "none";
// li.style.background = "green";
// li.style.color = "white";
// // box.insertAdjacentHTML("afterend", "<div>Hello Everyone</div>");
// box.prepandme(ul);

let details = document.createElement("div");
details.innerText = "My name is Rahul";

let form = document.querySelector(".form-container");

let det = details.cloneNode(true);
// console.log(det);
form.prepend(details);
form.append(det);

det.style.background = "blue";
det.style.color = "white";
det.style.padding = "10px";
det.style.marginTop = "10px";
det.style.fontWeight = "bold";
det.style.borderRadius = "5px";

details.style.background = "red";
details.style.color = "white";
details.style.padding = "10px";
details.style.marginTop = "10px";
details.style.fontWeight = "bold";
details.style.borderRadius = "5px";
details.setAttribute("class", "");
form.classList.add("babu");

let task = document.querySelector(".babu");
// console.log(task);

//1.getRootNode()
//2.childNodes
//3.children
//4.firstChild
//5.lastChild
//6.nextSibling
//7.previousSibling
//8.parentNode
//9.parentElement
//10.appendChild()
//11.prepend()
//12.before()
//13.after()
//14.replaceChild()
//15.cloneNode()
//16.removeChild()
//17.remove()
//18.setAttribute()
//19.removeAttribute()
//20.classList.add()
//21.classList.remove()
//22.classList.toggle()
//23.classList.contains()
//24.classList.replace()
//25.addEventListener()
//26.removeEventListener()
//27.querySelector()
//28.querySelectorAll()
//29.createElement()
//30.createTextNode()
//31.innerHTML
//32.innerText
//34.getAttribute()
//35.setAttribute()
//36.removeAttribute()
//37.insertAdjacentElement("beforebegin", element)
//37.insertAdjacentElement("afterbegin", element)
//37.insertAdjacentElement("beforeend", element)
//37.insertAdjacentElement("afterend", element

//38.insertAdjacentHTML()
//39.insertAdjacentText()

// console.log(form.children);

let newNode = document.createElement("div");
newNode.setAttribute("class", "new-div");
newNode.innerText = "This is a new div";
form.removeChild(form.children[1]);
// console.log(form.children);
// form.remove();

// let rect = form.getBoundingClientRect().height;
// console.log(rect);

let changer = function () {
  this.style.backgroundColor = "yellow";
};

let btn = document.querySelector(".btn");
btn.addEventListener("click", (this) => {
console.log(this)
});
