const container = document.querySelector(".container");
const width = document.querySelector(".width");
const height = document.querySelector(".height");

let w = container.getBoundingClientRect().width;
let h = container.getBoundingClientRect().width;

window.addEventListener("resize", () => {
  w = container.getBoundingClientRect().width;
  h = container.getBoundingClientRect().height;
  width.textContent = w;
  height.textContent = h;
  console.log(w, h);
});
